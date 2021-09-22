import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import React from "react";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ConfirmationDialog from "./confirmationDialog";
import EditDialog from "./createProposal";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import {useLocation} from "react-router-dom";
import PropTypes from 'prop-types'
import {TransitionZoom} from "../../utils";

FullInfoProposal.propTypes = {
    backdrop: PropTypes.exact({
        getter: PropTypes.bool,
        setter: PropTypes.func
    }).isRequired,
    proposalObj: PropTypes.exact({
        getter: PropTypes.object,
        setter: PropTypes.func
    }).isRequired,
    setCallToServer: PropTypes.func,
    proposalList: PropTypes.exact({
        getter: PropTypes.object,
        setter: PropTypes.func
    }),
    disabled: PropTypes.bool
}

export default function FullInfoProposal({backdrop, proposalObj, setCallToServer, proposalList, disabled}) {
    // gets userType from url -> influencers/companies
    const { pathname } = useLocation();
    const userType = pathname.split('/')[1]

    // sets time of confirmation we want from user delete proposal/send request to company
    const [confirmationType, setConfirmationType] = React.useState('delete')
    // when true confirmation dialog opens
    const [backdropConfirmation, setBackdropConfirmation] = React.useState(false)
    const backdropConfirmationObj = {
        getter: backdropConfirmation,
        setter: setBackdropConfirmation
    }
    // when true edit proposal dialog opens
    const [backdropEdit, setBackdropEdit] = React.useState(false)
    const backdropEditObj = {
        getter: backdropEdit,
        setter: setBackdropEdit
    }

    // closes card
    function onClickCancelFinish() {
        backdrop.setter(false)
    }

    // closes card and opens edit dialog
    const onEditClick = () => {
        backdrop.setter(false)
        setBackdropEdit(true)
    };

    // opens delete confirmation dialog
    const onDeleteClick = () => {
        setConfirmationType('delete')
        setBackdropConfirmation(true)
    }

    // opens interested confirmation dialog
    const onClickInterested = () => {
        setConfirmationType('interested')
        setBackdropConfirmation(true)
    }

    return(
        <>
            <Dialog
                open={backdrop.getter}
                TransitionComponent={TransitionZoom}
                keepMounted
                fullWidth
                maxWidth={'md'}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="proposal-dialog-slide-title" >
                    <span style={{fontFamily:'Rubik', fontWeight:800, color: '#1F75A6', fontSize:'1.7em'}}>
                        {proposalObj.getter.title} <small style={{fontSize:'0.5em', color: '#F27746'}}>
                        ({proposalObj.getter.companyName})</small>
                    </span>
                    {/*delete and edit icons for company*/}
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
                    {/*categories display*/}
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
                    {/*company info*/}
                    <h3 style={{color: '#A68617'}}>Some information about the company</h3>
                    <p style={{whiteSpace: "pre-line"}}>{proposalObj.getter.bio}</p>
                    <h3 style={{color: '#A68617', margin:0}}>Some information about the proposal</h3>
                    <p style={{whiteSpace: "pre-line"}}>{proposalObj.getter.description}</p>
                    <h4 style={{color: '#796211'}}>Requirements</h4>
                    <p style={{whiteSpace: "pre-line"}}>{proposalObj.getter.requirements}</p>
                    {/*company contact info*/}
                    {
                        ((proposalObj.getter.phone !== '' && proposalObj.getter.phone !== null) ||
                            proposalObj.getter.email != null || proposalObj.getter.companySite !== '') &&
                        <>
                            <div style={{display:"flex", flexDirection: "column", alignItems:"center"}}>
                            {(proposalObj.getter.phone !== '' && proposalObj.getter.phone !== null) &&
                            <>
                                Our phone number is <span style={{textDecoration: "underline", userSelect: 'text',
                                msUserSelect: 'text'}}>{proposalObj.getter.phone}</span><br/>
                            </>}
                            {proposalObj.getter.email !== null &&
                            <>
                                You can email us to <span style={{textDecoration: "underline", userSelect: 'text',
                                msUserSelect: 'text'}}>{proposalObj.getter.email}</span><br/>
                            </>}
                            {proposalObj.getter.companySite !== '' &&
                            <>
                                Visit out website
                                <a href={(new RegExp('^([a-z]+://|//)', 'i').test(proposalObj.getter.companySite)
                                    ?'':'//')+proposalObj.getter.companySite} target={'_blank'}
                                   style={{textDecoration: "underline", userSelect: 'text', msUserSelect: 'text'}}>
                                    {proposalObj.getter.companySite}
                                </a>
                            </>}
                            </div>
                        </>
                    }
                </DialogContent>
                <DialogActions>
                    {/*if user disabled, can't send interest requests to companies*/}
                    {userType==='influencers' && !disabled &&
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
            {backdropConfirmation &&
                <ConfirmationDialog
                    msg={confirmationType === 'delete' ? `Are you sure you want to delete the proposal of the
                     name \'${proposalObj.getter.title}\'?` : `Are you sure you want to send the company a 
                     cooperation request for the proposal named \'${proposalObj.getter.title}\'?`}
                    backdrop={backdropConfirmationObj} setCallServer={setCallToServer} setDialogOpen={backdrop.setter}
                    type={confirmationType}/>
            }
            {backdropEdit &&
                <EditDialog val={proposalObj} proposalList={proposalList} backdrop={backdropEditObj} option={'edit'}/>
            }
        </>
    )
}