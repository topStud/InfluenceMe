import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function ConfirmationDialog({backdrop, setCallServer, proposalName, setDialogOpen, type}) {
    const handleClose = () => {
        backdrop.setter(false)
    };

    function handleConfirm() {
        setCallServer(true)
        backdrop.setter(false)
        setDialogOpen(false)
    }

    return (
        <Dialog
            open={backdrop.getter}
            maxWidth={'xs'}
        >
            <DialogTitle style={{color: '#1F75A6'}} id="dialog-title">
                <span style={{fontFamily: 'Rubik'}}>{type==='delete'?'Delete Proposal':'Send Request'}</span>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {type === 'delete' ? `Are you sure you want to delete the proposal of the name \'${proposalName}\'?` :
                        `Are you sure you want to send the company a cooperation request for the proposal named \'${proposalName}\'?`}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button variant="contained" onClick={handleConfirm} color="primary">
                    {type === 'delete' ? 'Delete' : 'I am sure'}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

