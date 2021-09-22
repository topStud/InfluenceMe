import React, {useRef} from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import InputText from '../InputComponents/inputText'
import Grid from "@material-ui/core/Grid";
import CategoriesComponent from "../InputComponents/categoriesComponent";
import InputTextArea from "../InputComponents/InputTextArea";
import {Checkbox, FormControlLabel, FormGroup, TextField} from "@material-ui/core";
import PropTypes from 'prop-types'
import {AnswerOfServer, ErrorSnackbar, parseJwt, required_txt, TransitionSlide} from "../../utils";

CreateProposalDialog.propTypes = {
    val: PropTypes.object.isRequired,
    backdrop: PropTypes.object.isRequired,
    companyInfo: PropTypes.object,
    proposalList: PropTypes.object.isRequired,
    option: PropTypes.oneOf(['create', 'edit']).isRequired
}

export default function CreateProposalDialog(props) {
    // we call to server when true
    const [sendToServerCreate, setSendToServerCreate] = React.useState(false)
    const [sendToServerEdit, setSendToServerEdit] = React.useState(false)
    // we called to server successfully
    const [proposalAccepted, setProposalAccepted] = React.useState(false)
    const [proposalEdited, setProposalEdited] = React.useState(false)
    // if user entered bad input, true
    const [badInput, setBadInput] = React.useState(false)

    function usePrevious(value) {
        const ref = useRef(value);
        return ref.current;
    }
    // saves the previous values of the proposal (in case the user changes things and regrets)
    const prevObj = usePrevious(props.val.getter)

    // all possible field that may get an error
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
        // closes dialog
        props.backdrop.setter(false)
        // returns to previous values
        props.val.setter(prevObj)
        // resets values
        if (props.option === 'create') {
            setProposalAccepted(false)
        } else {
            setProposalEdited(false)
        }
        setErrProposals({
            titleErr: false,
            titleMsg: '',
            descriptionMsg: '',
            descriptionErr: false,
            categoryErr: false,
            requirementsMsg: '',
            requirementsErr: false
        })
    }

    // handles the two checkboxes
    const handleAddContactInfoChange = (event) => {
        if (props.option === 'create') {
            props.val.setter({ ...props.val.getter, [event.target.name]: event.target.checked});
        } else {
            // in case of edit, we already enter the correct values or null in case of uncheck.
            if (props.val.getter[event.target.name] !== null) {
                props.val.setter({ ...props.val.getter, [event.target.name]: null})
            } else {
                props.val.setter({ ...props.val.getter, [event.target.name]: props.val.getter.contact[event.target.name]})
            }
        }
    };

    function onClickCreateEdit() {
        let emptyTitle = props.val.getter.title === ''
        let longTitle = props.val.getter.title.length > 40
        let categoriesErr = props.val.getter.categories.length === 0
        let emptyDescription = props.val.getter.description === ''
        let emptyRequirements = props.val.getter.requirements === ''
        // checks if the user entered bad input and notifies him about it
        if (emptyTitle || categoriesErr || emptyDescription || emptyRequirements) {
            setErrProposals({
                titleErr: emptyTitle || longTitle,
                titleMsg: emptyTitle ? required_txt : longTitle ? 'Title too long. The length\'s limit is 40 characters' : '',
                categoryErr: categoriesErr,
                descriptionErr: emptyDescription,
                descriptionMsg: emptyDescription ? required_txt : '',
                requirementsErr: emptyRequirements,
                requirementsMsg: emptyRequirements ? required_txt : ''
            })
            setBadInput(true)
        } else {
            // sends info to server
            if (props.option === 'create') {
                setSendToServerCreate(true)
            } else {
                setSendToServerEdit(true)
            }
        }
    }

    return (
        <Dialog
            open={props.backdrop.getter}
            TransitionComponent={TransitionSlide}
            keepMounted
            fullWidth
            maxWidth={'sm'}
        >
            <DialogTitle>
                <span style={{fontFamily:'Rubik', fontWeight:800, color: '#1F75A6', fontSize:'1.5em'}}>
                    {props.option === 'create' ? 'Create New Proposal' : 'Edit ' + props.val.getter.title}
                </span>
            </DialogTitle>
            <DialogContent>
                {props.option === 'create' &&
                <DialogContentText id="alert-dialog-slide-description" style={{fontFamily:'Rubik'}}>
                    Please fill in all the required field before creating your proposal.<br/>
                    All the proposals will be shared with all users (not only influencers registered to this site).
                </DialogContentText>}
                <Grid container spacing={3}>
                    <Grid item xs={12} style={{height: 80}}>
                        {props.option === 'create' ? <InputText val={props.val} err={errors} info={titleObj}/> :
                         <TextField disabled={true} fullWidth label={'Title'} id={'disabled-title'}
                                    value={props.val.getter.title}/>}
                    </Grid>
                    <Grid item xs={12} style={{height: 100}}>
                        <CategoriesComponent val={props.val} err={errors}/>
                    </Grid>
                    <Grid item xs={12} style={{height: 145, paddingLeft:0}}>
                        <InputTextArea val={props.val} err={errors} info={descriptionObj}/>
                    </Grid>
                    <Grid item xs={12} style={{height: 145, paddingLeft:0}}>
                        <InputTextArea val={props.val} err={errors} info={requirementsObj}/>
                    </Grid>
                    <Grid item xs={12} style={{maxHeight: 90}}>
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={props.option === 'create' ? props.val.getter.addPhone :
                                            props.val.getter.phone !== null}
                                        onChange={handleAddContactInfoChange}
                                        name={props.option === 'create' ? "addPhone":'phone'}
                                        color="primary"
                                        value={true} size={"small"}
                                    />
                                }
                                label="Add my company's phone to proposal"
                            />
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={props.option === 'create' ? props.val.getter.addEmail :
                                            props.val.getter.email !== null}
                                        onChange={handleAddContactInfoChange}
                                        name={props.option === 'create' ? "addEmail":'email'}
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
            {props.option === 'create' ? (!proposalAccepted ?
                <DialogActions>
                    <Button color="primary" onClick={onClickCancelFinish}>
                        Cancel
                    </Button>
                    <Button color="primary" variant={"contained"} onClick={onClickCreateEdit}>
                        Create
                    </Button>
                </DialogActions> :
                <DialogActions>
                    <Button color="primary" onClick={onClickCancelFinish}>
                        Finish
                    </Button>
                </DialogActions>) : (
                !proposalEdited ? <DialogActions>
                    <Button color="primary" onClick={onClickCancelFinish}>
                        Cancel
                    </Button>
                    <Button disabled={JSON.stringify(prevObj) === JSON.stringify(props.val.getter)} color="primary"
                            variant={"contained"} onClick={onClickCreateEdit}>
                        Edit
                    </Button>
                </DialogActions> :
                <DialogActions>
                    <Button color="primary" onClick={onClickCancelFinish}>
                        Finish
                    </Button>
                </DialogActions>
            )}
            {props.option === 'create' ?
                <AnswerOfServer callServerObj={{getter: sendToServerCreate, setter: setSendToServerCreate}}
                                failMsg={'Failed to create the proposal'} url={'/api/collaboration_proposals'}
                                methodObj={{method: 'POST', headers: {'Accept': 'application/json', 'Content-Type':
                                            'application/json'}, body: JSON.stringify({...props.val.getter,
                                        companyID: props.companyInfo._id})}} sucMsg={'Proposal created successfully'}
                                sucFunc={(response)=>{
                                    // getting the id of the new proposal
                                    let dic = parseJwt(response.data)
                                    // seperated all field from addPhone and addEmail
                                    const {addPhone: phoneVal, addEmail: emailVal,...otherKeys} = props.val.getter;
                                    // creates new proposal by adding all the information related to company and proposal id.
                                    props.proposalList.setter({
                                        ...props.proposalList.getter,
                                        original: [{...otherKeys,
                                            companyID: props.companyInfo._id, companyName: props.companyInfo.name,
                                            companySite: props.companyInfo.siteUrl, photo: props.companyInfo.photo,
                                            bio: props.companyInfo.bio, email: emailVal ? props.companyInfo.email : null,
                                            phone: phoneVal ? props.companyInfo.phone : null, contact:
                                                {phone: props.companyInfo.phone, email: props.companyInfo.email},
                                            canEdit: true, collaborationsNumber:0, _id: dic.id},
                                            ...props.proposalList.getter.original]
                                    })
                                    setProposalAccepted(true)
                                }}/>
                 :
                <AnswerOfServer callServerObj={{getter: sendToServerEdit, setter: setSendToServerEdit}}
                                url={`/api/collaboration_proposals/${props.val.getter._id}`}
                                methodObj={{method: 'PUT', headers: {'Content-type': 'application/json; charset=UTF-8'},
                                body: JSON.stringify({...props.val.getter})}} sucMsg={'Proposal edited successfully'}
                                failMsg={'Edit failed'} sucFunc={()=>{
                                    setProposalEdited(true);
                                    // actions for inserting the proposal in it's index
                                    let proposal = props.proposalList.getter.original.find(proposal => proposal._id === props.val.getter._id);
                                    let newArr = props.proposalList.getter.original.filter(o=>o._id !== proposal._id);
                                    let index = props.proposalList.getter.original.indexOf(proposal)
                                    newArr.splice(index,0, {...proposal, ...props.val.getter,
                                        phone: props.val.getter.addPhone ? proposal.contact.phone : null,
                                        email: props.val.getter.addEmail ? proposal.contact.email : null})
                                    props.proposalList.setter({
                                        ...props.proposalList.getter,
                                        original: newArr
                                    });
                }}/>
            }
            <ErrorSnackbar open={badInput} setOpen={setBadInput}/>
        </Dialog>

    );
}