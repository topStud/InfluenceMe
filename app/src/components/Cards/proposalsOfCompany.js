import Grid from "@material-ui/core/Grid";
import AddIcon from '@material-ui/icons/Add';
import Chip from "@material-ui/core/Chip";
import BackDrop from '@material-ui/core/Backdrop';
import {makeStyles} from "@material-ui/core/styles";
import React, {useEffect} from 'react'
import CreateProposal from './createProposal'
import CardsDisplay from './cardsDisplay'
import {AnswerOfServer} from "../../utils";

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
    const [proposalForDelete, setProposalForDelete] = React.useState('')
    const menuObj = {
        setCallServer: setCallForServerForDelete,
        setDeleteProposal: setProposalForDelete
    }

    // for backdrop
    const [openBackDrop, setOpenBackDrop] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const openCreateProposal = {
        getter: openDialog,
        setter: setOpenDialog
    }

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
        setOpenDialog(true)
        setOpenBackDrop(true)
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
                console.log(proposalData.response)
                let proposals = proposalData.response.map(proposal => {
                    proposal.companyName = companyInfo.name
                    proposal.companySite = companyInfo.siteUrl
                    proposal.logo = companyInfo.photo
                    proposal.bio = companyInfo.bio
                    return proposal
                })
                setProposalsList(proposals)
            }
        })
    }, [])

    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={10}/>
                <Grid item xs={12} sm={2}>
                    <Chip label="NEW PROPOSAL" icon={<AddIcon />} color={"primary"} clickable variant="outlined"
                          style={{border: 'transparent'}} onClick={onClickNewProposal}/>
                </Grid>
                {proposalsList !== null && <CardsDisplay display={'Cards'} objList={proposalsList} options={menuObj} userType={'companies'}/>}
            </Grid>
            <BackDrop className={classes.backdrop} open={openBackDrop}>
                <CreateProposal val={values} open={openCreateProposal} setBackDrop={setOpenBackDrop} companyInfo={companyInfo} proposalList={proposalListObj}/>
            </BackDrop>
            <AnswerOfServer callServerObj={{getter: callServerForDelete, setter: setCallForServerForDelete}}
            url={`/api/collaboration_proposals/${proposalForDelete}`} methodObj={{method: 'DELETE'}}
            sucMsg={'Proposal deleted successfully'} errMsg={'Deletion Failed'}
            sucFunc={()=>{proposalListObj.setter(proposalListObj.getter.filter(proposal=> proposal._id !== proposalForDelete))}}/>
        </>
    )
}