import Grid from "@material-ui/core/Grid";
import AddIcon from '@material-ui/icons/Add';
import Chip from "@material-ui/core/Chip";
import BackDrop from '@material-ui/core/Backdrop';
import {makeStyles} from "@material-ui/core/styles";
import React, {useEffect} from 'react'
import CreateProposal from './createProposal'
import ProposalCard from "./proposalCard";
import {Snackbar} from "@material-ui/core";
import {Alert, Pagination} from "@material-ui/lab";

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

    // for backdrop
    const [openBackDrop, setOpenBackDrop] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const openCreateProposal = {
        getter: openDialog,
        setter: setOpenDialog
    }

    // variables for creating new proposals
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

    // pagination
    let [page, setPage] = React.useState(1);
    const [count ,setCount] = React.useState(1)
    const PER_PAGE = 7;

    const handleChange = (e, p) => {
        setPage(p);
    };

    function currentData(data) {
        const begin = (page - 1) * PER_PAGE;
        const end = begin + PER_PAGE;
        return data.slice(begin, end);
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
                    setCount(Math.ceil(proposals.length / PER_PAGE))
                }
            })

    }, [])

    useEffect(()=>{
        if (proposalsList !== null) {
            setCount(Math.ceil(proposalsList.length / PER_PAGE))
        }
    }, [JSON.stringify(proposalsList)])

    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={10}/>
                <Grid item xs={12} sm={2}>
                    <Chip label="NEW PROPOSAL" icon={<AddIcon />} color={"primary"} clickable variant="outlined"
                          style={{border: 'transparent'}} onClick={onClickNewProposal}/>
                </Grid>
                {proposalsList !== null && currentData(proposalsList).map((proposal) => (
                    <Grid item xs={12} sm={4} key={proposal._id}>
                        <ProposalCard infoObj={proposal} setCallServer={setCallForServerForDelete}
                                      setDeleteProposal={setProposalForDelete}/>
                    </Grid>
                ))}
                {
                    count > 1 &&
                    <Grid item xs={12} sm={12} style={{display: "flex", justifyContent:"center"}}>
                        <Pagination variant="outlined" color="secondary" count={count} page={page} onChange={handleChange}/>
                    </Grid>
                }
            </Grid>
            <BackDrop className={classes.backdrop} open={openBackDrop}>
                <CreateProposal val={values} open={openCreateProposal} setBackDrop={setOpenBackDrop} companyInfo={companyInfo} proposalList={proposalListObj}/>
            </BackDrop>
            <AnswerOfServer callServer={callServerForDelete} setCallServer={setCallForServerForDelete} id={proposalForDelete} proposalList={proposalListObj}/>
        </>
    )
}

// in case of deletion of a proposal
const AnswerOfServer = ({callServer, setCallServer, id, proposalList}) => {
    const [open, setOpen] = React.useState(false)
    const [errMsg, setErrMsg] = React.useState('')
    const [severity, setSeverity] = React.useState('error')

    useEffect(() => {
        if(callServer) {
            fetch(`/api/collaboration_proposals/${id}`, {
                method: 'DELETE',
            }).then(res => {
                if (!res.ok) {
                    setOpen(true)
                    setSeverity('error')
                    setErrMsg('Connection problem')
                }
                return res.json()
            }).then(response => {
                if (response.status === 'error') {
                    setSeverity('error')
                    setOpen(true)
                    if ('error' in response) {
                        setErrMsg(response.error)
                    } else {
                        setErrMsg('Deletion Failed')
                    }
                } else {
                    setSeverity('success')
                    setErrMsg('Proposal deleted successfully')
                    proposalList.setter(proposalList.getter.filter(proposal=> proposal._id !== id))
                    setCallServer(false)
                    setOpen(true)
                }
            })
        }
    },[callServer])

    const handleClose = () => {
        setOpen(false)
        setCallServer(false)
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
            <Alert onClose={handleClose} severity={severity} style={{fontSize:14, fontFamily:'Rubik'}}>
                <div>{errMsg}</div>
            </Alert>
        </Snackbar>
    )
}