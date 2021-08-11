import React, {useEffect} from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import PersonIcon from '@material-ui/icons/Person';
import InstagramIcon from '@material-ui/icons/Instagram';
import InfoIcon from '@material-ui/icons/Info';
import classes from '../styles/Stepper.module.css'
import '../styles/Stepper.module.css'
import {StepConnector} from "@material-ui/core";
import PersonalInfo from "./personalInfo";
import InstagramInfo from './instagramInfo'
import Bio from "./bio";
import { Alert, AlertTitle } from '@material-ui/lab';
import CircularProgress from '@material-ui/core/CircularProgress';

function getSteps() {
    return ['Personal information', 'instagram account', 'Bio'];
}

function getStepContent(stepIndex, values) {
    switch (stepIndex) {
        case 0:
            return <PersonalInfo personalInfoValues={values.personalInfo}/>
        case 1:
            return <InstagramInfo instagramInfoValues={values.instagramInfo}/>
        case 2:
            return <Bio bioValues={values.Bio}/>;
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
    const [userId, setUserId] = React.useState(0)
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();

    // influencer variables for user inputs
    // personal info
    let currDate = new Date()
    currDate = currDate.getFullYear() + '-' + String(currDate.getMonth() + 1).padStart(2, '0') + '-' +
        String(currDate.getDate()).padStart(2, '0')
    const [valuesPersonalInfo, setValuesPersonalInfo] = React.useState({
        firstName: '',
        lastName: '',
        date: currDate,
        phoneNum: '',
        photo: null,
    })
    const [errPersonalInfo, setErrPersonalInfo] = React.useState({
        firstNameErr: false,
        lastNameErr: false,
        firstNameMsg: '',
        lastNameMsg: '',
    })

    // instagram info
    const [valuesInstaAccount, setValuesInstaAccount] = React.useState({
        user: '',
        followers: '',
        url: '',
        categories: []
    })
    const [errInstaAccount, setErrInstaAccount] = React.useState({
        userErr: false,
        followersErr: false,
        urlErr: false,
        categoryErr: false,
        userMsg: '',
        followersMsg: '',
        urlMsg: '',
    })
    const [bio, setBio] = React.useState('')

    const values_influencer = {
        personalInfo: {
            val: {
                getter: valuesPersonalInfo,
                setter: setValuesPersonalInfo,
            },
            err: {
                getter: errPersonalInfo,
                setter: setErrPersonalInfo,
            },
        },
        instagramInfo: {
            val: {
                getter: valuesInstaAccount,
                setter: setValuesInstaAccount,
            },
            err: {
                getter: errInstaAccount,
                setter: setErrInstaAccount,
            },
        },
        Bio:{
            val: {
                getter: bio,
                setter: setBio
            }
        }
    }

    const validateWebsiteUrl = websiteUrl => {
        const urlRegEx = new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??#?)?)/);
        return urlRegEx.test(String(websiteUrl).toLowerCase());
    };

    const handleNext = () => {
        let mayContinue = true
        // personal information
        if (activeStep === 0) {
            let fNameErr = valuesPersonalInfo.firstName === ''
            let lNameErr = valuesPersonalInfo.lastName === ''
            if (fNameErr || lNameErr) {
                mayContinue = false;
            }
            setErrPersonalInfo({
                ...errPersonalInfo,
                firstNameErr: fNameErr,
                firstNameMsg: fNameErr ? required_txt : '',
                lastNameErr: lNameErr,
                lastNameMsg: lNameErr ? required_txt : '',
            })
        }
        // Instagram account
        else if (activeStep === 1) {
            let instaUserErr = valuesInstaAccount.user === ''
            let instaFollowersErr = valuesInstaAccount.followers === ''
            let linkErr = valuesInstaAccount.url && !validateWebsiteUrl(valuesInstaAccount.url)
            let categoryErr = valuesInstaAccount.categories.length === 0
            console.log('check' + valuesInstaAccount.categories)
            if (linkErr || instaUserErr || instaFollowersErr || categoryErr) {
                mayContinue = false
                setErrInstaAccount({
                    urlErr: linkErr,
                    urlMsg: linkErr ? 'Url format is invalid' : '',
                    userErr: instaUserErr,
                    userMsg: instaUserErr ? required_txt : '',
                    followersErr: instaFollowersErr,
                    followersMsg: instaFollowersErr ? required_txt : '',
                    categoryErr: categoryErr
                })
            }
        }
        if (mayContinue)
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBackStandard = () => {
        if(activeStep === 1) {
            setErrInstaAccount({
                userErr: false,
                userMsg: '',
                followersMsg: '',
                followersErr: false,
                urlErr: false,
                urlMsg: '',
                categoryErr: false
            })
        }
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleBackToRegister = () => {
        props.register(false);
    };

    return (
        <div style={{width: '100%', boxShadow: '1px 10px 10px gray', paddingRight:50, paddingLeft:50, paddingBottom:20, marginBottom: 20, height:480}} >
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
                        <AnswerOfServer obj={{
                            email: props.values.emailVal,
                            password: props.values.passVal,
                            firstName: valuesPersonalInfo.firstName,
                            lastName: valuesPersonalInfo.lastName,
                            date: valuesPersonalInfo.date,
                            photo: valuesPersonalInfo.photo,
                            phone: valuesPersonalInfo.phone,
                            user: valuesInstaAccount.user,
                            followersAmount: valuesInstaAccount.followers,
                            instagramUrl: valuesInstaAccount.url,
                            categories: valuesInstaAccount.categories,
                            bio: bio
                        }}/>
                ) : (
                    <div style={{display:"flex", flexDirection:"column", justifyContent:"flex-end" , height:320}}>
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

const AnswerOfServer = ({ obj }) => {
    const [id, setId] = React.useState(null)
    const [err, setErr] = React.useState(false)

    const handleReset = () => {
        window.location('/newAccount')
    };

    const handleContinue = (userId) => {
        // move to user's page
    }

    useEffect(() => {
        fetch(`api/register/`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        }).then(res=> {
            if(!res.ok) {
                setErr(true)
                throw new Error(res.statusText)
            }
            return res.json()
        }).then(data=>{
            setId(data)
        }).catch(function (error) {
            console.log(error);
        });
    },[])

    return (
        <>
            {id && <div style={{display: "flex", flexDirection: "column", height:320}}>
                <Alert severity="success" style={{height: 150, fontSize:16, marginBottom: 50, width:'100%', lineHeight: '22pt'}}>
                    <AlertTitle style={{fontSize:28}}><strong>Congrats!</strong></AlertTitle>
                    You registered successfully to our system.<br/>
                    We hope you'll find InfluenceMe helpful, enjoy!
                </Alert>
                <Button onClick={()=>handleContinue(id)} style={{alignSelf:"center"}}>Continue</Button>
            </div>}
            {err && <div style={{display: "flex", flexDirection: "column", height:320}}>
                <Alert severity="error" style={{height: 150, fontSize:16, marginBottom: 50, width:'100%', lineHeight: '22pt'}}>
                    <AlertTitle style={{fontSize:28}}><strong>Note!</strong></AlertTitle>
                    Something went wrong!<br/>
                    We couldn't add you to our system. Please try again!
                </Alert>
                <Button onClick={handleReset} style={{alignSelf:"center"}}>reset registration</Button>
            </div>}
            {!(id || err) && <div style={{display:"flex", justifyContent: "center", alignItems: "center", height:350}}><CircularProgress/></div>}
        </>
    )
}

