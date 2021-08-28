import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";

export default function ConfirmationDialog({popupObj, setCallServer, setDeleteProposal}) {
    const handleClose = () => {
        popupObj.setOpenDialog(false);
        popupObj.setOpenBackDrop(false);
    };

    function handleDelete() {
        popupObj.setOpenDialog(false);
        popupObj.setOpenBackDrop(false);
        setCallServer(true)
        setDeleteProposal(popupObj.proposalId)
    }

    return (
        <Dialog
            open={popupObj.openDialog}
            maxWidth={'xs'}
        >
            <DialogTitle style={{color: '#1F75A6'}} id="dialog-title">
                <span style={{fontFamily: 'Rubik'}}>Delete Proposal</span>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete the proposal of the name '{popupObj.nameOfProposal}'?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button variant="contained" onClick={handleDelete} color="primary">
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    );
}
