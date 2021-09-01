import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import InputText from '../InputComponents/inputText'
import Grid from "@material-ui/core/Grid";
import CategoriesComponent from "../InputComponents/categoriesComponent";
import InputTextArea from "../InputComponents/InputTextArea";
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
        props.backdrop.setter(false)
        // props.open.setter(false)
        props.val.setter({
            title: '',
            categories: [],
            description: '',
            requirements: ''
        })
        setAddToProposal({
            addPhone: false,
            addEmail: false
        })
        setErrProposals({
            titleErr: false,
            titleMsg: '',
            descriptionMsg: '',
            descriptionErr: false,
            categoryErr: false,
            requirementsMsg: '',
            requirementsErr: false
        })
        setProposalAccepted(false)
    }

    const handleAddContactInfoChange = (event) => {
        setAddToProposal({ ...addToProposal, [event.target.name]: event.target.checked });
    };

    const objToServer = {
        companyID: props.companyInfo._id,
        title: props.val.getter.title,
        addPhone: addToProposal.addPhone,
        addEmail: addToProposal.addEmail,
        description: props.val.getter.description,
        requirements: props.val.getter.requirements,
        categories: props.val.getter.categories
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
            setSendToServer(true)
        }
    }

    return (
        <Dialog
            open={props.backdrop.getter}
            TransitionComponent={Transition}
            keepMounted
            fullWidth
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
                    <Grid item xs={12} style={{maxHeight: 100}}>
                        <CategoriesComponent val={props.val} err={errors}/>
                    </Grid>
                    <Grid item xs={12} style={{maxHeight: 145, paddingLeft:0}}>
                        <InputTextArea val={props.val} err={errors} info={descriptionObj}/>
                    </Grid>
                    <Grid item xs={12} style={{maxHeight: 145, paddingLeft:0}}>
                        <InputTextArea val={props.val} err={errors} info={requirementsObj}/>
                    </Grid>
                    <Grid item xs={12} style={{maxHeight: 90}}>
                        <FormGroup row>
                            <FormControlLabel
                                control={<Checkbox checked={addToProposal.addPhone} onChange={handleAddContactInfoChange}
                                                   name="addPhone" color="primary" value={true} size={"small"}/>}
                                label="Add my company's phone to proposal"
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
                                label="Add my company's email to proposal"
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
                            setProposalAccepted={setProposalAccepted} err={errors}
                            proposalList={props.proposalList} companyObj={props.companyInfo}/>
        </Dialog>

    );
}

const AnswerOfServer = ({ callServer,setCallServer,obj,setProposalAccepted, err, proposalList, companyObj }) => {
    const [open, setOpen] = React.useState(false)
    const [errMsg, setErrMsg] = React.useState('')
    const [severity, setSeverity] = React.useState('error')

    function createProposalObj(proposalInfo, companyInfo) {
        proposalInfo.companyName = companyInfo.name
        proposalInfo.companySite = companyInfo.siteUrl
        proposalInfo.logo = companyInfo.photo
        proposalInfo.bio = companyInfo.bio
        return proposalInfo
    }

    const proposalObj = createProposalObj(obj, companyObj)

    useEffect(() => {
        if(callServer) {
            console.log(obj)
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
                    setSeverity('success')
                    setErrMsg('Proposal created successfully')
                    setProposalAccepted(true)
                    proposalList.setter(oldArray => [...oldArray, proposalObj])
                    setCallServer(false)
                    setOpen(true)
                }
            })
        }
    },[callServer])

    const handleClose = () => {
        setOpen(false)
        setCallServer(false)
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
            <Alert onClose={handleClose} severity={severity} style={{fontSize:14, fontFamily:'Rubik'}}>
                <div>{errMsg}</div>
            </Alert>
        </Snackbar>
    )
}
