import React from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import PersonIcon from '@material-ui/icons/Person';
import InstagramIcon from '@material-ui/icons/Instagram';
import InfoIcon from '@material-ui/icons/Info';
import classes from '../styles/Stepper.module.css'
import '../styles/Stepper.module.css'
import {StepConnector} from "@material-ui/core";
import PersonalInfo from "./personalInfo";
import Divider from '@material-ui/core/Divider';


function getSteps() {
    return ['Personal information', 'instagram account', 'Bio'];
}

function getStepContent(stepIndex, values) {
    switch (stepIndex) {
        case 0:
            return <PersonalInfo personalInfoValues={values.personalInfo}/>
        case 1:
            return 'What is an ad group anyways?';
        case 2:
            return 'This is the bit I really care about!';
        default:
            return 'Unknown stepIndex';
    }
}

function ColorLibStepIcon(props) {
    const { active, completed } = props;

    const icons = {
        1: <PersonIcon />,
        2: <InstagramIcon />,
        3: <InfoIcon />,
    };

    return (
        <div
            className={clsx(classes.root_icon, {
                [classes.active_icon]: active,
                [classes.completed_icon]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
}

export default function HorizontalLabelPositionBelowStepper(props) {
    const required_txt = 'This field is required'
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    // values from next steps - influencer
    let currDate = new Date()
    currDate = currDate.getFullYear() + '-' + String(currDate.getMonth() + 1).padStart(2, '0') + '-' +
        String(currDate.getDate()).padStart(2, '0')
    const [firstName, setFirstName] = React.useState('')
    const [lastName, setLastName] = React.useState('')
    const [date, setDate] = React.useState(currDate)
    const [phoneValue, setPhoneValue] = React.useState('')
    const [selectedFile, setSelectedFile] = React.useState(null)
    // errors from next steps - influencer
    const [firstNameErr, setFirstNameErr] = React.useState(false)
    const [lastNameErr, setLastNameErr] = React.useState(false)
    // error messages from next steps - influencer
    const [firstNameMsg, setFirstNameMsg] = React.useState('')
    const [lastNameMsg, setLastNameMsg] = React.useState('')

    const values_influencer = {
        personalInfo: {
            val: {
                fName: firstName,
                setFName: setFirstName,
                lName: lastName,
                setLName: setLastName,
                dateValue: date,
                setDateValue: setDate,
                phoneNum: phoneValue,
                setPhone: setPhoneValue,
                photo: selectedFile,
                setPhoto: setSelectedFile
            },
            err: {
                fName: firstNameErr,
                setFName: setFirstNameErr,
                lName: lastNameErr,
                setLName: setLastNameErr
            },
            errMsg: {
                fName: firstNameMsg,
                setFName: setFirstNameMsg,
                lName: lastNameMsg,
                setLName: setLastNameMsg
            }
        },
    }

    const handleNext = () => {
        let mayContinue = true
        // personal information
        if (activeStep === 0) {
            if (firstName === '') {
                mayContinue = false
                setFirstNameErr(true)
                setFirstNameMsg(required_txt)
            }
            if (lastName === '') {
                mayContinue = false
                setLastNameErr(true)
                setLastNameMsg(required_txt)
            }
        }
        if (mayContinue)
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBackStandard = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleBackToRegister = () => {
        props.register(false);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div style={{width: '100%', boxShadow: '1px 10px 10px gray', paddingRight:50, paddingLeft:50, paddingBottom:20, marginBottom: 20}} >
            <Stepper activeStep={activeStep} alternativeLabel connector={<StepConnector style={{marginTop: '10px'}}
            classes={{completed: classes.completed_conn, active: classes.active_conn, line: classes.line_conn}}/>}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorLibStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography style={{marginTop: '4%', marginBottom: '4%'}}>All steps completed</Typography>
                        <Button onClick={handleReset}>Reset</Button>
                    </div>
                    // here we need to go to user page
                ) : (
                    <div>
                        <div style={{marginBottom: 30}}>{getStepContent(activeStep, values_influencer)}</div>
                        <div style={{display:"flex", justifyContent: "center"}}>
                            <Button
                                onClick={activeStep === 0 ? handleBackToRegister : handleBackStandard}
                                style={{marginRight: '4%'}}
                            >
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={handleNext}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
