import Grid from "@material-ui/core/Grid";
import AddIcon from '@material-ui/icons/Add';
import Chip from "@material-ui/core/Chip";
import BackDrop from '@material-ui/core/Backdrop';
import {makeStyles} from "@material-ui/core/styles";
import React from 'react'
import CreateProposal from './createProposal'

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function ProposalsOfCompany({id}) {
    const classes = useStyles()
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

    return (
        <>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={10}/>
                <Grid item xs={12} sm={2}>
                    <Chip label="NEW PROPOSAL" icon={<AddIcon />} color={"primary"} clickable variant="outlined"
                          style={{border: 'transparent'}} onClick={onClickNewProposal}/>
                </Grid>
            </Grid>
            <BackDrop className={classes.backdrop} open={openBackDrop}>
                <CreateProposal val={values} open={openCreateProposal} setBackDrop={setOpenBackDrop} id={id}/>
            </BackDrop>
        </>
    )
}