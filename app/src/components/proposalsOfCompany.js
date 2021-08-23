import Grid from "@material-ui/core/Grid";
import AddIcon from '@material-ui/icons/Add';
import Chip from "@material-ui/core/Chip";
import BackDrop from '@material-ui/core/Backdrop';
import {makeStyles} from "@material-ui/core/styles";
import React from 'react'

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function ProposalsOfCompany() {
    const classes = useStyles()
    const [open, setOpen] = React.useState(false);

    function onClickNewProposal() {
        setOpen(true)
    }

    function handleBackDropClose() {
        setOpen(false)
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
            <BackDrop className={classes.backdrop} open={open} onClick={handleBackDropClose}>

            </BackDrop>
        </>
    )
}