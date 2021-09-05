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
import PropTypes from 'prop-types'
import EditDialog from "./createProposal";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom ref={ref} {...props} />;
});

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

FullInfoProposal.propTypes = {
    userType: PropTypes.oneOf(['influencers', 'companies'])
}

export default function FullInfoProposal({backdrop, proposalObj, setCallToServer, userType, proposalList}) {
    const classes = useStyles()
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

    const [proposalValues, setProposalValues] = React.useState({
        title: proposalObj.title,
        addPhone: proposalObj.phone !== null,
        addEmail: proposalObj.email !== null,
        categories: proposalObj.categories,
        description: proposalObj.description,
        requirements: proposalObj.requirements,
        id: proposalObj._id
    })
    const values = {
        getter: proposalValues,
        setter: setProposalValues
    }

    function onClickCancelFinish() {
        backdrop.setter(false)
    }

    const onEditClick = () => {
        backdrop.setter(false)
        setBackdropEdit(true)
    };

    const onDeleteClick = () => {
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
                        {proposalObj.title} <small style={{fontSize:'0.5em', color: '#F27746'}}>({proposalObj.companyName})</small>
                    </span>
                    {userType === 'companies' && <div style={{display: "flex", justifyContent: "flex-end", marginTop: -50}}>
                        {proposalObj.canEdit === true && <IconButton aria-label="edit" onClick={onEditClick}>
                            <EditIcon/>
                        </IconButton>}
                        <IconButton aria-label="delete" onClick={onDeleteClick}>
                            <DeleteIcon/>
                        </IconButton>
                    </div>}
                </DialogTitle>
                <DialogContent>
                    <div style={{display:"flex",justifyContent: 'flex-start', fontSize: '1em', marginTop:-10}}>
                        {proposalObj.categories.map((category, i)=>(
                            i < proposalObj.categories.length - 1 ?
                                <div key={i} style={{display:"inline"}}>
                                    <span>{category}</span>
                                    <span style={{marginRight: 15, marginLeft: 15}}>•</span>
                                </div>
                                :
                                <span key={i}>{category}</span>
                        ))}
                    </div>
                    <h3 style={{color: '#A68617'}}>Some information about the company</h3>
                    <p style={{whiteSpace: "pre-line"}}>{proposalObj.bio}</p>
                    <h3 style={{color: '#A68617', margin:0}}>Some information about the proposal</h3>
                    <p style={{whiteSpace: "pre-line"}}>{proposalObj.description}</p>
                    <h4 style={{color: '#796211'}}>Requirements</h4>
                    <p style={{whiteSpace: "pre-line"}}>{proposalObj.requirements}</p>
                    {
                        ((proposalObj.phone !== '' && proposalObj.phone !== null) || proposalObj.email != null || proposalObj.companySite !== '') &&
                        <>
                            {/*<h3 style={{color: '#A68617'}}>Contact us</h3>*/}
                            <div style={{display:"flex", flexDirection: "column", alignItems:"center"}}>
                            {(proposalObj.phone !== '' && proposalObj.phone !== null) &&
                            <>
                                Our phone number is <span style={{textDecoration: "underline", userSelect: 'text', msUserSelect: 'text'}}>{proposalObj.phone}</span><br/>
                            </>}
                            {proposalObj.email !== null &&
                            <>
                                You can email us to <span style={{textDecoration: "underline", userSelect: 'text', msUserSelect: 'text'}}>{proposalObj.email}</span><br/>
                            </>}
                            {proposalObj.companySite !== '' &&
                            <>
                                Visit out website <span style={{textDecoration: "underline", userSelect: 'text', msUserSelect: 'text'}}>{proposalObj.companySite}</span>
                            </>}
                            </div>
                        </>
                    }
                </DialogContent>
                <DialogActions>
                    <Button variant={"contained"} color="primary" onClick={onClickCancelFinish}>
                        Close
                    </Button>
                </DialogActions>
            </Dialog>
            <BackDrop className={classes.backdrop} open={backdropConfirmation}>
                <ConfirmationDialog backdrop={backdropConfirmationObj} setCallServer={setCallToServer} proposalName={proposalObj.title} setDialogOpen={backdrop.setter}/>
            </BackDrop>
            <BackDrop open={backdropEdit} className={classes.backdrop}>
                <EditDialog val={values} proposalList={proposalList} backdrop={backdropEditObj} option={'edit'}/>
            </BackDrop>
        </>
    )
}