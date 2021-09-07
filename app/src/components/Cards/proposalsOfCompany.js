import AddIcon from '@material-ui/icons/Add';
import Chip from "@material-ui/core/Chip";
import BackDrop from '@material-ui/core/Backdrop';
import {makeStyles} from "@material-ui/core/styles";
import React, {useEffect} from 'react'
import CreateProposal from './createProposal'
import FilteringCards from './filteringCards'
import {AnswerOfServer} from "../../utils";
import FullInfoProposal from "./fullInfoProposal";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function ProposalsOfCompany({companyInfo, filterStringObj, filteredListObj, searchStringObj}) {
    const classes = useStyles()

    // decides when to call the server for deleting a proposal
    const [callServerForDelete, setCallServerForDelete] = React.useState(false)

    // backdrop for creating new proposal dialog
    const [openBackdropNewProposal, setOpenBackdropNewProposal] = React.useState(false);
    const backdropObjNewProposal = {
        getter: openBackdropNewProposal,
        setter: setOpenBackdropNewProposal
    }

    // backdrop for displaying full info of proposal
    const [openBackdropFullInfo, setOpenBackdropFullInfo] = React.useState(false);
    const backdropObjFullInfo = {
        getter: openBackdropFullInfo,
        setter: setOpenBackdropFullInfo
    }

    // the proposal the company chose and is fully open
    const [proposalClicked, setProposalClicked] = React.useState(null)

    // variables for creating new Cards
    const [proposalValues, setProposalValues] = React.useState({
        title: '',
        addPhone: false,
        addEmail: false,
        categories: [],
        description: '',
        requirements: '',
    })
    const values = {
        getter: proposalValues,
        setter: setProposalValues
    }

    // user clicked on the button 'new proposal'
    function onClickNewProposal() {
        setOpenBackdropNewProposal(true)
    }

    // the original list from the DB
    const [proposalsList, setProposalsList] = React.useState(null)
    const proposalListObj = {
        getter: proposalsList,
        setter: setProposalsList
    }

    useEffect(()=>{
        // getting all proposals of current company
        fetch(`/api/collaboration_proposals/company/${companyInfo._id}`).then(res => {
            if (!res.ok) {
                console.log('problem in connection with server')
            }
            return res.json()
        }).then(proposalData => {
            if ('status' in proposalData) {
                console.log('there is an error')
            } else {
                // creating object of proposal
                let proposals = proposalData.response.map(proposal => {
                    proposal.companyName = companyInfo.name
                    proposal.companySite = companyInfo.siteUrl
                    proposal.logo = companyInfo.photo
                    proposal.bio = companyInfo.bio
                    proposal.contact = {
                        phone: companyInfo.phone,
                        email: companyInfo.email
                    }
                    return proposal
                })
                console.log(proposals)
                // sets original list of proposals
                setProposalsList(proposals)
                // sets filtered list of proposals
                filteredListObj.setter(proposals)
            }
        })
    }, [])

    return (
        <>
            <div style={{display: "flex", justifyContent: "flex-end", marginRight:30}}>
                <Chip label="NEW PROPOSAL" icon={<AddIcon />} color={"primary"} clickable variant="outlined"
                      style={{border: 'transparent', fontSize:15}} onClick={onClickNewProposal}/>
            </div>
            {proposalsList !== null && <FilteringCards display={'proposals'} objList={proposalsList}
                    backdrop={backdropObjFullInfo} setClickedCard={setProposalClicked}
                    filterStringObj={filterStringObj} filteredListObj={filteredListObj} searchStringObj={searchStringObj}/>}
            {/*backdrop for creating new proposal*/}
            <BackDrop className={classes.backdrop} open={openBackdropNewProposal}>
                {openBackdropNewProposal && <CreateProposal val={values} backdrop={backdropObjNewProposal} companyInfo={companyInfo}
                                proposalList={proposalListObj} option={'create'} />}
            </BackDrop>
            {/*backdrop for showing full information*/}
            <BackDrop className={classes.backdrop} open={openBackdropFullInfo}>
                {proposalClicked !== null && <FullInfoProposal backdrop={backdropObjFullInfo} proposalList={proposalListObj} proposalObj={{getter: proposalClicked, setter:setProposalClicked}} setCallToServer={setCallServerForDelete} userType={'companies'}/>}
            </BackDrop>
            {proposalClicked !== null &&
            <AnswerOfServer callServerObj={{getter: callServerForDelete, setter: setCallServerForDelete}}
                            url={`/api/collaboration_proposals/${proposalClicked._id}`} methodObj={{method: 'DELETE'}}
                            sucMsg={'Proposal deleted successfully'} failMsg={'Deletion Failed'}
                            sucFunc={()=>{proposalListObj.setter(proposalListObj.getter.filter(proposal=> proposal._id !== proposalClicked._id))}}/>
            }
        </>
    )
}