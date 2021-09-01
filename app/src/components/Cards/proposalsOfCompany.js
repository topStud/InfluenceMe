import AddIcon from '@material-ui/icons/Add';
import Chip from "@material-ui/core/Chip";
import BackDrop from '@material-ui/core/Backdrop';
import {makeStyles} from "@material-ui/core/styles";
import React, {useEffect} from 'react'
import CreateProposal from './createProposal'
import CardsDisplay from './cardsDisplay'
import {AnswerOfServer} from "../../utils";
import FullInfoProposal from "./fullInfoProposal";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function ProposalsOfCompany({companyInfo}) {
    const classes = useStyles()

    // for deleting a proposal
    const [callServerForDelete, setCallForServerForDelete] = React.useState(false)

    // for backdrop - new proposal
    const [openBackDropNewProposal, setOpenBackDropNewProposal] = React.useState(false);
    const backdropObjNewProposal = {
        getter: openBackDropNewProposal,
        setter: setOpenBackDropNewProposal
    }

    // backdrop - full info of proposal
    const [openBackDropFullInfo, setOpenBackDropFullInfo] = React.useState(false);
    const backdropObjFullInfo = {
        getter: openBackDropFullInfo,
        setter: setOpenBackDropFullInfo
    }

    const [proposalClickedForInfo, setProposalClickedForInfo] = React.useState(null)

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

    function onClickNewProposal() {
        setOpenBackDropNewProposal(true)
    }

    const [proposalsList, setProposalsList] = React.useState(null)
    const proposalListObj = {
        getter: proposalsList,
        setter: setProposalsList
    }

    useEffect(()=>{
        fetch(`/api/collaboration_proposals/company/${companyInfo._id}`).then(res => {
            if (!res.ok) {
                console.log('problem in connection with server')
            }
            return res.json()
        }).then(proposalData => {
            if ('status' in proposalData) {
                console.log('there is an error')
            } else {
                let proposals = proposalData.response.map(proposal => {
                    proposal.companyName = companyInfo.name
                    proposal.companySite = companyInfo.siteUrl
                    proposal.email = companyInfo.email
                    proposal.logo = companyInfo.photo
                    proposal.bio = companyInfo.bio
                    return proposal
                })
                console.log(proposals)
                setProposalsList(proposals)
            }
        })
    }, [])

    return (
        <>
            <div style={{display: "flex", justifyContent: "flex-end", marginRight:30}}>
                <Chip label="NEW PROPOSAL" icon={<AddIcon />} color={"primary"} clickable variant="outlined"
                      style={{border: 'transparent', fontSize:15}} onClick={onClickNewProposal}/>
            </div>
            {proposalsList !== null && <CardsDisplay display={'proposals'} objList={proposalsList} backdrop={backdropObjFullInfo} setClickedProposal={setProposalClickedForInfo}/>}
            {/*backdrop for creating new proposal*/}
            <BackDrop className={classes.backdrop} open={openBackDropNewProposal}>
                <CreateProposal val={values} backdrop={backdropObjNewProposal} companyInfo={companyInfo} proposalList={proposalListObj}/>
            </BackDrop>
            {/*backdrop for showing full information*/}
            <BackDrop className={classes.backdrop} open={openBackDropFullInfo}>
                {proposalClickedForInfo !== null && <FullInfoProposal backdrop={backdropObjFullInfo} proposalObj={proposalClickedForInfo} setCallToServer={setCallForServerForDelete} userType={'companies'}/>}
            </BackDrop>
            {proposalClickedForInfo !== null &&
            <AnswerOfServer callServerObj={{getter: callServerForDelete, setter: setCallForServerForDelete}}
                            url={`/api/collaboration_proposals/${proposalClickedForInfo._id}`} methodObj={{method: 'DELETE'}}
                            sucMsg={'Proposal deleted successfully'} errMsg={'Deletion Failed'}
                            sucFunc={()=>{proposalListObj.setter(proposalListObj.getter.filter(proposal=> proposal._id !== proposalClickedForInfo._id))}}/>
            }
        </>
    )
}