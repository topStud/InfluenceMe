import DialogTitle from "@material-ui/core/DialogTitle";
import React, {useRef} from "react";
import {Backdrop, Dialog, DialogActions, DialogContent} from "@material-ui/core";
import {required_txt, TransitionSlide, ValidateEmail} from "../../utils";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputTextArea from "../InputComponents/InputTextArea";
import isMobilePhone from "validator/es/lib/isMobilePhone";
import InputDate from "../InputComponents/inputDate";
import {makeStyles} from "@material-ui/core/styles";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextInput from "../InputComponents/inputText";
import InputPhone from '../InputComponents/phoneTextField'
import ConfirmationDialog from "../Cards/confirmationDialog";
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

CreateContractDialog.propTypes = {
    backdrop: PropTypes.exact({
        getter: PropTypes.bool,
        setter: PropTypes.func
    }).isRequired,
    contractValues: PropTypes.exact({
        getter: PropTypes.object,
        setter: PropTypes.func
    }).isRequired,
    setCallServer: PropTypes.func.isRequired
}

export default function CreateContractDialog({backdrop, contractValues, setCallServer}) {
    const classes = useStyles()

    const [backdropConfirmationDialog, setBackdropConfirmationDialog] = React.useState(false)

    function usePrevious(value) {
        const ref = useRef(value);
        return ref.current;
    }

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
        endErrMsg: ''
    })
    const err = {
        getter: errContract,
        setter: setErrContract
    }

    const prevErrObj = usePrevious(errContract)
    const preContractValues = usePrevious(contractValues.getter)

    function onClickCancel() {
        backdrop.setter(false)
        contractValues.setter(preContractValues)
        setErrContract(prevErrObj)
    }

    function onClickCreate() {
        let mayContinue = true
        let currentDate = new Date().setHours(0,0,0,0),
            startDate = new Date(contractValues.getter.startDay).setHours(0,0,0,0),
            endDate = new Date(contractValues.getter.endDay).setHours(0,0,0,0)
        let invalidStartDay = startDate < currentDate
        let invalidEndDay = endDate < currentDate
        let invalidDates = startDate > endDate
        let detailsEmpty = contractValues.getter.details === ''
        let paymentEmpty = contractValues.getter.payment === ''
        let invalidEmail = !ValidateEmail(contractValues.getter.companyEmail)
        let invalidPhone = !(contractValues.getter.companyPhone === '' ||
            (contractValues.getter.companyPhone.split(" ").length - 1) === 0 ||
            isMobilePhone(contractValues.getter.companyPhone.replace(/\s+/g, ''), 'any'))
        if (detailsEmpty || paymentEmpty || invalidEmail || invalidPhone ||
            invalidDates || invalidStartDay || invalidEndDay) {
            mayContinue = false
            setErrContract({
                paymentErr: paymentEmpty,
                paymentMsg: paymentEmpty ? required_txt : '',
                detailsErr: detailsEmpty,
                detailsMsg: detailsEmpty ? required_txt : '',
                companyPhoneErr: invalidPhone,
                companyPhoneMsg: invalidPhone ? 'Phone number is not valid' : '',
                companyEmailErr: invalidEmail,
                companyEmailMsg: invalidEmail ? 'The email entered is not in the correct format' : '',
                startDayErr: invalidDates || invalidStartDay,
                startDayMsg: invalidDates ? 'The collaboration needs first to start' : invalidStartDay ? 'Invalid Date' : '',
                endDayErr: invalidEndDay || invalidDates,
                endDayMsg: invalidDates ? 'The collaboration needs first to start' : invalidEndDay ? 'Invalid Date' : ''
            })
        }
        if (mayContinue)
            setBackdropConfirmationDialog(true)
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
            + contractValues.getter.title}</span>
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
                        <InputDate val={contractValues} info={startDayInfoObj} err={err}/>
                    </Grid>
                    <Grid item xs={6}>
                        <InputDate val={contractValues} info={endDayInfoObj} err={err}/>
                    </Grid>
                    <Grid item xs={12} style={{height: 145}}>
                        <InputTextArea val={contractValues} err={err} info={detailsInfoObj}/>
                    </Grid>
                    <Grid item xs={12} style={{height: 145}}>
                        <InputTextArea val={contractValues} err={err} info={paymentInfoObj}/>
                    </Grid>
                    <Grid item xs={6}>
                        <TextInput info={emailInfoObj} val={contractValues} err={err}/>
                    </Grid>
                    <Grid item xs={6}>
                        <InputPhone err={err} info={{name: 'companyPhone'}} val={contractValues}/>
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
            <Backdrop open={backdropConfirmationDialog} className={classes.backdrop}>
                <ConfirmationDialog
                    backdrop={{getter: backdropConfirmationDialog, setter: setBackdropConfirmationDialog}}
                    setDialogOpen={backdrop.setter} type={'create'} setCallServer={setCallServer}
                    msg={`Are you sure you want to create this contract for the proposal
                     '${contractValues.getter.title}'? Note, you won't be able to edit it later on.`}/>
            </Backdrop>
        </Dialog>
    )
}