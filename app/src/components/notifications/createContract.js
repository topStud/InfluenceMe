import DialogTitle from "@material-ui/core/DialogTitle";
import React, {useRef} from "react";
import {Dialog, DialogActions, DialogContent} from "@material-ui/core";
import {
    email_bad_format,
    ErrorSnackbar,
    invalid_phone,
    required_txt,
    TransitionSlide,
    ValidateEmail
} from "../../utils";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputTextArea from "../InputComponents/InputTextArea";
import isMobilePhone from "validator/es/lib/isMobilePhone";
import InputDate from "../InputComponents/inputDate";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextInput from "../InputComponents/inputText";
import InputPhone from '../InputComponents/phoneTextField'
import ConfirmationDialog from "../Cards/confirmationDialog";
import PropTypes from 'prop-types'

CreateContractDialog.propTypes = {
    backdrop: PropTypes.exact({
        getter: PropTypes.bool,
        setter: PropTypes.func
    }).isRequired,
    contractValues: PropTypes.exact({
        data: PropTypes.exact({
            getter: PropTypes.object,
            setter: PropTypes.func
        }),
        dates: PropTypes.exact({
            getter: PropTypes.object,
            setter: PropTypes.func
        })
    }).isRequired,
    setCallServer: PropTypes.func.isRequired
}

export default function CreateContractDialog({backdrop, contractValues, setCallServer}) {
    // when true, dialog is open
    const [backdropConfirmationDialog, setBackdropConfirmationDialog] = React.useState(false)

    // function for saving previous state value
    function usePrevious(value) {
        const ref = useRef(value);
        return ref.current;
    }

    // all fields were an error might occur in the form: field_nameErr, field_nameMsg
    const [errContract, setErrContract] = React.useState({
        companyPhoneErr: false,
        companyPhoneMsg: '',
        companyEmailErr: false,
        companyEmailMsg: '',
        detailsErr: false,
        detailsMsg: '',
        paymentErr: false,
        paymentMsg: '',
        startDayErr: false,
        startDayMsg: '',
        endDayErr: false,
        endDayMsg: ''
    })
    const err = {
        getter: errContract,
        setter: setErrContract
    }
    const [badInput, setBadInput] = React.useState(false)

    // saves previous states
    const prevErrObj = usePrevious(errContract)
    const preContractValues = usePrevious(contractValues.data.getter)
    const preDatesValues = usePrevious(contractValues.dates.getter)

    // returns all the fields to their initial state
    function onClickCancel() {
        backdrop.setter(false)
        contractValues.data.setter(preContractValues)
        contractValues.dates.setter(preDatesValues)
        setErrContract(prevErrObj)
    }

    function onClickCreate() {
        let invalidStartDay = false, invalidEndDay = false, invalidDates = false
        let currentDate = new Date().setHours(0,0,0,0)
        if (contractValues.dates.getter.startDay !== '' || contractValues.dates.getter.endDay !== '') {
            let startDate, endDate
            if (contractValues.dates.getter.startDay !== '') {
                startDate = new Date(contractValues.dates.getter.startDay).setHours(0,0,0,0)
                invalidStartDay = startDate < currentDate
            }
            if (contractValues.dates.getter.endDay !== '') {
                endDate = new Date(contractValues.dates.getter.endDay).setHours(0,0,0,0)
                invalidEndDay = endDate < currentDate
            }
            if (contractValues.dates.getter.startDay !== '' && contractValues.dates.getter.endDay !== '') {
                invalidDates = startDate > endDate
            }
        }
        let detailsEmpty = contractValues.data.getter.details === ''
        let paymentEmpty = contractValues.data.getter.payment === ''
        let invalidEmail = !ValidateEmail(contractValues.data.getter.companyEmail)
        let invalidPhone = !(contractValues.data.getter.companyPhone === '' ||
            (contractValues.data.getter.companyPhone.split(" ").length - 1) === 0 ||
            isMobilePhone(contractValues.data.getter.companyPhone.replace(/\s+/g, ''), 'any'))
        // checks for mistakes
        if (detailsEmpty || paymentEmpty || invalidEmail || invalidPhone ||
            invalidDates || invalidStartDay || invalidEndDay) {
            setBadInput(true)
            setErrContract({
                paymentErr: paymentEmpty,
                paymentMsg: paymentEmpty ? required_txt : '',
                detailsErr: detailsEmpty,
                detailsMsg: detailsEmpty ? required_txt : '',
                companyPhoneErr: invalidPhone,
                companyPhoneMsg: invalidPhone ? invalid_phone : '',
                companyEmailErr: invalidEmail,
                companyEmailMsg: contractValues.data.getter.companyEmail === '' ? required_txt : invalidEmail ? email_bad_format : '',
                startDayErr: invalidDates || invalidStartDay,
                startDayMsg: invalidDates ? 'The collaboration needs first to start' : invalidStartDay ? 'Invalid Date' : '',
                endDayErr: invalidEndDay || invalidDates,
                endDayMsg: invalidDates ? 'The collaboration needs first to start' : invalidEndDay ? 'Invalid Date' : ''
            })
        } else {
            setBackdropConfirmationDialog(true)
        }
    }

    const detailsInfoObj = {
        id: 'contractDetails',
        label: 'Contract\'s Details',
        name: 'details',
        placeholder: 'All the details of the collaboration should appear here..'
    }

    const paymentInfoObj = {
        id: 'paymentDetails',
        label: 'Payment',
        name: 'payment',
        placeholder: 'The influencer\'s payment should be described here..'
    }

    const startDayInfoObj = {
        id: 'startDayDate',
        label: 'Start Of Collaboration',
        name: 'startDay'
    }

    const endDayInfoObj = {
        id: 'endDayDate',
        label: 'End Of Collaboration',
        name: 'endDay'
    }

    const emailInfoObj = {
        required: true,
        id: 'email',
        label: 'Email Address',
        name: 'companyEmail',
    }

    return(
        <Dialog
            open={backdrop.getter}
            TransitionComponent={TransitionSlide}
            keepMounted
            fullWidth
            maxWidth={'sm'}
        >
            <DialogTitle>
            <span style={{fontFamily:'Rubik', fontWeight:800,
                color: '#1F75A6', fontSize:'1.5em'}}>{'Contract for: '
            + contractValues.data.getter.title}</span>
            </DialogTitle>
            <DialogContent>
                <DialogContentText style={{marginBottom: 40}}>
                    In this window, you are requested to fill the information according to the proposal in question.<br/>
                    It will be useful for tracking your active and inactive collaborations.<br/>
                    On clicking the 'Create' button, the contract will be sent to the influencer. <br/>
                    Only when the influencer confirms the contract's content, the collaboration between you will be created.
                </DialogContentText>
                <Grid container spacing={5}>
                    <Grid item xs={6}>
                        <InputDate val={contractValues.dates} info={startDayInfoObj} err={err}/>
                    </Grid>
                    <Grid item xs={6}>
                        <InputDate val={contractValues.dates} info={endDayInfoObj} err={err}/>
                    </Grid>
                    <Grid item xs={12} style={{height: 145}}>
                        <InputTextArea val={contractValues.data} err={err} info={detailsInfoObj}/>
                    </Grid>
                    <Grid item xs={12} style={{height: 145}}>
                        <InputTextArea val={contractValues.data} err={err} info={paymentInfoObj}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput info={emailInfoObj} val={contractValues.data} err={err}/>
                    </Grid>
                    <Grid item xs={6}>
                        <InputPhone err={err} info={{name: 'companyPhone'}} val={contractValues.data}/>
                    </Grid>
                </Grid>
            </DialogContent>
            <DialogActions>
                <Button color="primary" onClick={onClickCancel}>
                    Cancel
                </Button>
                <Button color="primary" variant={"contained"} onClick={onClickCreate}>
                    Create
                </Button>
            </DialogActions>
            <ConfirmationDialog
                backdrop={{getter: backdropConfirmationDialog, setter: setBackdropConfirmationDialog}}
                setDialogOpen={backdrop.setter} type={'create'} setCallServer={setCallServer}
                msg={<>Are you sure you want to create this contract for the proposal
                    {contractValues.data.getter.title}?<br/><b>Note, you won't be able to edit it later on!</b></>
                }/>
            <ErrorSnackbar open={badInput} setOpen={setBadInput}/>
        </Dialog>
    )
}