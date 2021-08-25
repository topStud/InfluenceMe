import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import InputText from './InputComponents/inputText'
import Grid from "@material-ui/core/Grid";
import CategoriesComponent from "./InputComponents/categoriesComponent";
import InputTextArea from "./InputComponents/InputTextArea";
import {Checkbox, FormControlLabel, FormGroup, Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function CreateProposalDialog(props) {
    const required_txt = 'This field is required'
    const [sentToServer, setSendToServer] = React.useState(false)
    const [proposalAccepted, setProposalAccepted] = React.useState(false)
    const [addToProposal, setAddToProposal] = React.useState({
        addPhone: false,
        addEmail: false
    })
    const [errProposals, setErrProposals] = React.useState({
        titleErr: false,
        titleMsg: '',
        categoryErr: false,
        descriptionErr: false,
        descriptionMsg: '',
        requirementsErr: false,
        requirementsMsg: ''
    })
    const errors = {
        getter: errProposals,
        setter: setErrProposals
    }

    const titleObj = {
        required: true,
        id: 'title-of-proposal',
        label: 'Title',
        name: 'title'
    }

    const descriptionObj = {
        id: 'description-of-proposal',
        label: 'Description',
        name: 'description',
        placeholder: 'Tell here about the proposal and of what it consists.'
    }

    const requirementsObj = {
        id: 'requirements-of-proposal',
        label: 'Requirements',
        name: 'requirements',
        placeholder: 'Tell here what do you require from the influencers.'
    }

    function onClickCancelFinish() {
        props.setBackDrop(false)
        props.open.setter(false)
    }

    const handleAddContactInfoChange = (event) => {
        setAddToProposal({ ...addToProposal, [event.target.name]: event.target.checked });
    };

    const objToServer = {
        companyID: props.id,
        title: props.val.title,
        addPhone: addToProposal.addPhone,
        addEmail: addToProposal.addEmail,
        description: props.val.description,
        requirements: props.val.requirements,
        categories: props.val.categories
    }

    function onClickCreate() {
        let emptyTitle = props.val.getter.title === ''
        let categoriesErr = props.val.getter.categories.length === 0
        let emptyDescription = props.val.getter.description === ''
        let emptyRequirements = props.val.getter.requirements === ''
        if (emptyTitle || categoriesErr || emptyDescription || emptyRequirements) {
            setErrProposals({
                titleErr: emptyTitle,
                titleMsg: emptyTitle ? required_txt : '',
                categoryErr: categoriesErr,
                descriptionErr: emptyDescription,
                descriptionMsg: emptyDescription ? required_txt : '',
                requirementsErr: emptyRequirements,
                requirementsMsg: emptyRequirements ? required_txt : ''
            })
        } else {
            // sends info to server
            console.log('hi')
            setSendToServer(true)
        }
    }

    function onDialogClick(e) {
        // if (e.target.name !== 'create') {
        //     console.log(e.target.name)
        //     setSendToServer(false)
        // }
    }

    return (
        <>
            <Dialog
                open={props.open.getter}
                TransitionComponent={Transition}
                keepMounted
                fullWidth
                onClick={onDialogClick}
                maxWidth={'sm'}
                aria-labelledby="alert-dialog-slide-title"
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle id="proposal-dialog-slide-title"><span style={{fontFamily:'Rubik', fontWeight:800, color: '#1F75A6', fontSize:'1.5em'}}>Create New Proposal</span></DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description" style={{fontFamily:'Rubik'}}>
                        Please fill in all the required field before creating your proposal.<br/>
                        All the proposals will be shared with all users (not only influencers registered to this site).
                    </DialogContentText>
                    <Grid container spacing={3}>
                        <Grid item xs={12} style={{maxHeight: 90}}>
                            <InputText val={props.val} err={errors} info={titleObj}/>
                        </Grid>
                        <Grid item xs={12} style={{maxHeight: 90}}>
                            <CategoriesComponent val={props.val} err={errors}/>
                        </Grid>
                        <Grid item xs={12} style={{maxHeight: 150, paddingLeft:0}}>
                            <InputTextArea val={props.val} err={errors} info={descriptionObj}/>
                        </Grid>
                        <Grid item xs={12} style={{maxHeight: 150, paddingLeft:0}}>
                            <InputTextArea val={props.val} err={errors} info={requirementsObj}/>
                        </Grid>
                        <Grid item xs={12} style={{maxHeight: 90}}>
                            <FormGroup row>
                                <FormControlLabel
                                    control={<Checkbox checked={addToProposal.addPhone} onChange={handleAddContactInfoChange}
                                                       name="addPhone" color="primary" value={true} size={"small"}/>}
                                    label="Add company's phone to proposal"
                                />
                                <FormControlLabel
                                    control={
                                        <Checkbox
                                            checked={addToProposal.addEmail}
                                            onChange={handleAddContactInfoChange}
                                            name="addEmail"
                                            color="primary"
                                            size={"small"}
                                            value={true}
                                        />
                                    }
                                    label="Add company's email to proposal"
                                />
                            </FormGroup>
                        </Grid>
                    </Grid>
                </DialogContent>
                {!proposalAccepted ?
                    <DialogActions>
                        <Button color="primary" onClick={onClickCancelFinish}>
                            Cancel
                        </Button>
                        <Button color="primary" name="create" onClick={onClickCreate}>
                            Create
                        </Button>
                    </DialogActions> :
                    <DialogActions>
                        <Button color="primary" onClick={onClickCancelFinish}>
                            Finish
                        </Button>
                    </DialogActions>
                }
                <AnswerOfServer callServer={sentToServer} setCallServer={setSendToServer} obj={objToServer}
                                setProposalAccepted={setProposalAccepted} err={errors}/>
            </Dialog>
        </>
    );
}

const AnswerOfServer = ({ callServer,setCallServer,obj,setProposalAccepted, err }) => {
    const [open, setOpen] = React.useState(false)
    const [errMsg, setErrMsg] = React.useState('')
    console.log('hi')

    useEffect(() => {
        if(callServer) {
            fetch('/api/collaboration_proposals', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(obj)
            }).then(res => {
                if (!res.ok) {
                    setOpen(true)
                    setErrMsg('Connection problem')
                }
                return res.json()
            }).then(data => {
                if (data.status === 'error') {
                    setOpen(true)
                    setErrMsg(data.error)
                    if (data.error === 'title already in use') {
                        err.setter({
                            ...err.getter,
                            titleErr: true,
                            titleMsg: 'Title already in use'
                        })
                    }
                } else {
                    setProposalAccepted(true)
                }
            })
        }
    },[callServer])

    const handleClose = () => {
        setOpen(false)
        setCallServer(false)
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
            <Alert onClose={handleClose} severity="error" style={{fontSize:20, fontFamily:'Rubik'}}>
                {/*Warning: findDOMNode is deprecated in StrictMode*/}
                <div>{errMsg}</div>
            </Alert>
        </Snackbar>
    )
}
