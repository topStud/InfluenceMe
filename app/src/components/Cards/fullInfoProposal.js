import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {Zoom} from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ConfirmationDialog from "./confirmationDialog";
import BackDrop from "@material-ui/core/Backdrop";
import {makeStyles} from "@material-ui/core/styles";
import EditDialog from "./createProposal";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {useLocation} from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function FullInfoProposal({backdrop, proposalObj, setCallToServer, proposalList}) {
    const classes = useStyles()
    const { pathname } = useLocation();
    const userType = pathname.split('/')[1]
    const [confirmationType, setConfirmationType] = React.useState('delete')
    const [backdropConfirmation, setBackdropConfirmation] = React.useState(false)
    const backdropConfirmationObj = {
        getter: backdropConfirmation,
        setter: setBackdropConfirmation
    }
    const [backdropEdit, setBackdropEdit] = React.useState(false)
    const backdropEditObj = {
        getter: backdropEdit,
        setter: setBackdropEdit
    }

    function onClickCancelFinish() {
        backdrop.setter(false)
    }

    const onEditClick = () => {
        backdrop.setter(false)
        setBackdropEdit(true)
    };

    const onDeleteClick = () => {
        setConfirmationType('delete')
        setBackdropConfirmation(true)
    }

    const onClickInterested = () => {
        setConfirmationType('interested')
        setBackdropConfirmation(true)
    }

    return(
        <>
            <Dialog
                open={backdrop.getter}
                TransitionComponent={Transition}
                keepMounted
                fullWidth
                maxWidth={'md'}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="proposal-dialog-slide-title" >
                    <span style={{fontFamily:'Rubik', fontWeight:800, color: '#1F75A6', fontSize:'1.7em'}}>
                        {proposalObj.getter.title} <small style={{fontSize:'0.5em', color: '#F27746'}}>({proposalObj.getter.companyName})</small>
                    </span>
                    {userType === 'companies' && <div style={{display: "flex", justifyContent: "flex-end", marginTop: -50}}>
                        {proposalObj.getter.canEdit === true && <IconButton aria-label="edit" onClick={onEditClick}>
                            <EditIcon/>
                        </IconButton>}
                        <IconButton aria-label="delete" onClick={onDeleteClick}>
                            <DeleteIcon/>
                        </IconButton>
                    </div>}
                </DialogTitle>
                <DialogContent>
                    <div style={{display:"flex",justifyContent: 'flex-start', fontSize: '1em', marginTop:-10}}>
                        {proposalObj.getter.categories.map((category, i)=>(
                            i < proposalObj.getter.categories.length - 1 ?
                                <div key={i} style={{display:"inline"}}>
                                    <span>{category}</span>
                                    <span style={{marginRight: 15, marginLeft: 15}}>•</span>
                                </div>
                                :
                                <span key={i}>{category}</span>
                        ))}
                    </div>
                    <h3 style={{color: '#A68617'}}>Some information about the company</h3>
                    <p style={{whiteSpace: "pre-line"}}>{proposalObj.getter.bio}</p>
                    <h3 style={{color: '#A68617', margin:0}}>Some information about the proposal</h3>
                    <p style={{whiteSpace: "pre-line"}}>{proposalObj.getter.description}</p>
                    <h4 style={{color: '#796211'}}>Requirements</h4>
                    <p style={{whiteSpace: "pre-line"}}>{proposalObj.getter.requirements}</p>
                    {
                        ((proposalObj.getter.phone !== '' && proposalObj.getter.phone !== null) || proposalObj.getter.email != null || proposalObj.getter.companySite !== '') &&
                        <>
                            <div style={{display:"flex", flexDirection: "column", alignItems:"center"}}>
                            {(proposalObj.getter.phone !== '' && proposalObj.getter.phone !== null) &&
                            <>
                                Our phone number is <span style={{textDecoration: "underline", userSelect: 'text', msUserSelect: 'text'}}>{proposalObj.getter.phone}</span><br/>
                            </>}
                            {proposalObj.getter.email !== null &&
                            <>
                                You can email us to <span style={{textDecoration: "underline", userSelect: 'text', msUserSelect: 'text'}}>{proposalObj.getter.email}</span><br/>
                            </>}
                            {proposalObj.getter.companySite !== '' &&
                            <>
                                Visit out website <span style={{textDecoration: "underline", userSelect: 'text', msUserSelect: 'text'}}>{proposalObj.getter.companySite}</span>
                            </>}
                            </div>
                        </>
                    }
                </DialogContent>
                <DialogActions>
                    {userType==='influencers' &&
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<FavoriteBorderIcon />}
                        onClick={onClickInterested}
                        disabled={proposalObj.getter.disabled}
                    >
                        Interested
                    </Button>
                    }
                    <Button variant={"contained"} color="primary" onClick={onClickCancelFinish}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            <BackDrop className={classes.backdrop} open={backdropConfirmation}>
                {backdropConfirmation &&
                    <ConfirmationDialog
                        msg={confirmationType === 'delete' ? `Are you sure you want to delete the proposal of the
                         name \'${proposalObj.getter.title}\'?` : `Are you sure you want to send the company a 
                         cooperation request for the proposal named \'${proposalObj.getter.title}\'?`}
                        backdrop={backdropConfirmationObj} setCallServer={setCallToServer} setDialogOpen={backdrop.setter}
                        type={confirmationType}/>
                }
            </BackDrop>
            <BackDrop open={backdropEdit} className={classes.backdrop}>
                {backdropEdit && <EditDialog val={proposalObj} proposalList={proposalList} backdrop={backdropEditObj} option={'edit'}/>}
            </BackDrop>
        </>
    )
}