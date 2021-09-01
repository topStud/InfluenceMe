import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ConfirmationDialog({backdrop, setCallServer, proposalName, setDialogOpen}) {
    const handleClose = () => {
        backdrop.setter(false)
    };

    function handleDelete() {
        backdrop.setter(false)
        setDialogOpen(false)
        setCallServer(true)
    }

    return (
        <Dialog
            open={backdrop.getter}
            maxWidth={'xs'}
        >
            <DialogTitle style={{color: '#1F75A6'}} id="dialog-title">
                <span style={{fontFamily: 'Rubik'}}>Delete Proposal</span>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Are you sure you want to delete the proposal of the name '{proposalName}'?
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

