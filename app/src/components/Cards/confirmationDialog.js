import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types'

ConfirmationDialog.propTypes = {
    backdrop: PropTypes.exact({
        getter: PropTypes.bool,
        setter: PropTypes.func
    }).isRequired,
    setCallServer: PropTypes.func.isRequired,
    msg: PropTypes.any.isRequired,
    setDialogOpen: PropTypes.func,
    type: PropTypes.oneOf(['delete', 'interested', 'create'])
}

export default function ConfirmationDialog({backdrop, setCallServer, msg, setDialogOpen, type}) {
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
                <span style={{fontFamily: 'Rubik'}}>
                    {type==='delete' ? 'Delete Proposal' : type === 'interested' ? 'Send Request' : 'Create Contract'}
                </span>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {msg}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button autoFocus onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button variant="contained" onClick={handleConfirm} color="primary">
                    {type === 'delete' ? 'Delete' : type === 'interested' ? 'I am sure' : 'Create & Send'}
                </Button>
            </DialogActions>
        </Dialog>
    );
}

