import React, {useEffect} from 'react';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import PersonIcon from '@material-ui/icons/Person';
import InstagramIcon from '@material-ui/icons/Instagram';
import InfoIcon from '@material-ui/icons/Info';
import classes from '../../styles/Stepper.module.css'
import '../../styles/Stepper.module.css'
import {StepConnector} from "@material-ui/core";
import PersonalInfo from "./personalInfo";
import InstagramInfo from './instagramInfo'
import Bio from "./bio";
import { Alert, AlertTitle } from '@material-ui/lab';
import CircularProgress from '@material-ui/core/CircularProgress';
import BusinessIcon from '@material-ui/icons/Business'
import CompanyData from "./companyData";
import isMobilePhone from "validator/es/lib/isMobilePhone";
import {calculateAge, invalid_phone, invalid_url, parseJwt} from '../../utils'
import {required_txt, validateWebsiteUrl} from "../../utils";
import PropTypes from 'prop-types'

// the titles of the steps. for influencer and company we have different titles.
function getSteps(userType) {
    return userType === 'influencers' ? ['Personal information', 'instagram account', 'Bio'] : ['Company information', 'Bio'];
}

// the content of each step if the user is influencer
function getStepContentInfluencer(stepIndex, values) {
    switch (stepIndex) {
        case 0:
            return <PersonalInfo values={values.personalInfo}/>
        case 1:
            return <InstagramInfo values={values.instagramInfo}/>
        case 2:
            return <Bio values={values.Bio}/>
        default:
            return 'Unknown stepIndex';
    }
}

// the content of each step if the user is company
function getStepContentCompany(stepIndex, values) {
    switch (stepIndex) {
        case 0:
            return <CompanyData values={values.companyData}/>
        case 1:
            return <Bio values={values.Bio}/>
        default:
            return 'Unknown stepIndex';
    }
}

// steps' icons if the user is influencer
function ColorStepIconInfluencer(props) {
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

// steps' icons if the user is company
function ColorStepIconCompany(props) {
    const { active, completed } = props;

    const icons = {
        1: <BusinessIcon/>,
        2: <InfoIcon />,
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

NewAccountSteps.propTypes = {
    profileValues: PropTypes.exact({
        getter: PropTypes.object,
        setter: PropTypes.func
    }).isRequired,
    regValues: PropTypes.exact({
        email: PropTypes.string,
        password: PropTypes.string,
        passwordV: PropTypes.string
    }).isRequired,
    userType: PropTypes.oneOf(['influences', 'companies']).isRequired,
    filledCorrectly: PropTypes.func.isRequired
}

export default function NewAccountSteps(props) {
    const [activeStep, setActiveStep] = React.useState(0);
    const userType = props.userType;
    const steps = getSteps(userType);

    // influencer
    const valuesPersonalInfo = props.profileValues.influencers.personal.getter
    const setValuesPersonalInfo = props.profileValues.influencers.personal.setter
    const valuesInstaAccount = props.profileValues.influencers.instagram.getter
    const setValuesInstaAccount = props.profileValues.influencers.instagram.setter
    const bioInfluencer = props.profileValues.influencers.bio.getter
    const setBioInfluencer = props.profileValues.influencers.bio.setter

    // company
    const valuesCompany = props.profileValues.companies.info.getter
    const setValuesCompany = props.profileValues.companies.info.setter
    const bioCompany = props.profileValues.companies.bio.getter
    const setBioCompany = props.profileValues.companies.bio.setter

    // exist for indicating vad input for user - personal info
    const [errPersonalInfo, setErrPersonalInfo] = React.useState({
        firstNameErr: false,
        lastNameErr: false,
        firstNameMsg: '',
        lastNameMsg: '',
        phoneErr: false,
        phoneMsg: '',
        dateErr: false,
        dateMsg: ''
    })
    // exist for indicating vad input for user - instagram account
    const [errInstaAccount, setErrInstaAccount] = React.useState({
        instagramUserErr: false,
        followersErr: false,
        instagramUrlErr: false,
        categoryErr: false,
        instagramUserMsg: '',
        followersMsg: '',
        instagramUrlMsg: '',
    })
    // exist for indicating vad input for user - company data
    const [errCompanyData, setErrCompanyData] = React.useState({
        companyNameErr: false,
        companyNameMsg: '',
        siteUrlErr: false,
        siteUrlMsg: '',
        phoneErr: false,
        phoneMsg: ''
    })
    // exist for indicating vad input for user - bio
    const [errBio, setErrBio] = React.useState({
        bioErr: false,
        bioMsg: ''
    })

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
                getter: bioInfluencer,
                setter: setBioInfluencer
            },
            err: {
                getter: errBio,
                setter: setErrBio
            }
        }
    }

    const values_company = {
        companyData: {
            val: {
                getter: valuesCompany,
                setter: setValuesCompany,
            },
            err: {
                getter: errCompanyData,
                setter: setErrCompanyData,
            },
        },
        Bio: {
            val: {
                getter: bioCompany,
                setter: setBioCompany
            },
            err: {
                getter: errBio,
                setter: setErrBio
            }
        }
    }

    const handleNextInfluencer = () => {
        let mayContinue = true
        // personal information
        if (activeStep === 0) {
            let phoneNumberErr = !(valuesPersonalInfo.phone === '' || (valuesPersonalInfo.phone.split(" ").length - 1) === 0 || isMobilePhone(valuesPersonalInfo.phone.replace(/\s+/g, ''), 'any'))
            let fNameErr = valuesPersonalInfo.firstName === ''
            let lNameErr = valuesPersonalInfo.lastName === ''
            let invalidAge = new Date(valuesPersonalInfo.date).getTime() > new Date().getTime() || calculateAge(valuesPersonalInfo.date) > 120
            // checks for bad input
            if (fNameErr || lNameErr || phoneNumberErr || invalidAge) {
                mayContinue = false;
            }
            setErrPersonalInfo({
                firstNameErr: fNameErr,
                firstNameMsg: fNameErr ? required_txt : '',
                lastNameErr: lNameErr,
                lastNameMsg: lNameErr ? required_txt : '',
                phoneErr: phoneNumberErr,
                phoneMsg: phoneNumberErr ? invalid_phone : '',
                dateErr: invalidAge,
                dateMsg: invalidAge ? 'Invalid Age' : ''
            })
        }
        // Instagram account
        else if (activeStep === 1) {
            let instaUserEmpty = valuesInstaAccount.instagramUser === ''
            let instagramUserTooLong = valuesInstaAccount.instagramUser > 50
            let instaFollowersErr = valuesInstaAccount.followersAmount === ''
            let linkErr = valuesInstaAccount.instagramUrl !== '' && !validateWebsiteUrl(valuesInstaAccount.instagramUrl)
            let categoryErr = valuesInstaAccount.categories.length === 0
            // checks for bad input
            if (linkErr || instaUserEmpty || instaFollowersErr || categoryErr || instagramUserTooLong) {
                mayContinue = false
                setErrInstaAccount({
                    instagramUrlErr: linkErr,
                    instagramUrlMsg: linkErr ? invalid_url : '',
                    instagramUserErr: instaUserEmpty || instagramUserTooLong,
                    instagramUserMsg: instaUserEmpty ? required_txt : instagramUserTooLong ? 'Username too long. The length\'s limit is 50 characters' : '',
                    followersErr: instaFollowersErr,
                    followersMsg: instaFollowersErr ? required_txt : '',
                    categoryErr: categoryErr
                })
            }
        } else if (activeStep === 2) {
            let bioEmpty = bioInfluencer === ''
            // checks for bad input
            if (bioEmpty) {
                mayContinue = false
            }
            setErrBio({
                bioErr: bioEmpty,
                bioMsg: bioEmpty ? required_txt : ''
            })
        }
        // continuous to next step if all values are valid
        if (mayContinue)
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleNextCompany = () => {
        let mayContinue = true
        // personal information
        if (activeStep === 0) {
            let phoneNumberErr = !(valuesCompany.phone === '' || (valuesCompany.phone.split(" ").length - 1) === 0 || isMobilePhone(valuesCompany.phone.replace(/\s+/g, ''), 'any')),
                compNameEmpty = valuesCompany.name === '', companyNameTooLong = valuesCompany.name.length > 30,
                linkErr = valuesCompany.siteUrl !== '' && !validateWebsiteUrl(valuesCompany.siteUrl);
            // checks for bad input
            if (compNameEmpty || linkErr || phoneNumberErr || companyNameTooLong) {
                mayContinue = false
            }
            setErrCompanyData({
                companyNameErr: compNameEmpty || companyNameTooLong,
                companyNameMsg: compNameEmpty ? required_txt : companyNameTooLong ? 'Name too long. The length\'s limit is 30 characters' : '',
                siteUrlErr: linkErr,
                siteUrlMsg: linkErr ? invalid_url : '',
                phoneErr: phoneNumberErr,
                phoneMsg: phoneNumberErr ? invalid_phone : ''
            })
        } else if (activeStep === 1) {
            // checks for bad input
            let bioEmpty = bioCompany === ''
            if (bioEmpty) {
                mayContinue = false
            }
            setErrBio({
                bioErr: bioEmpty,
                bioMsg: bioEmpty ? required_txt : ''
            })
        }
        // continuous to next step if all values are valid
        if (mayContinue) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };

    const handleBackStandardInfluencer = () => {
        // removes all errors indications before returning to previous step
        if(activeStep === 1) {
            setErrInstaAccount({
                instagramUserErr: false,
                instagramUserMsg: '',
                followersMsg: '',
                followersErr: false,
                instagramUrlErr: false,
                instagramUrlMsg: '',
                categoryErr: false
            })
        }
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleBackStandardCompany = () => {
        // removes error indication before returning to previous step
        if(activeStep === 1) {
            setErrBio({
                bioErr: false,
                bioMsg: ''
            })
        }
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleBackToRegister = () => {
        props.filledCorrectly(false);
    };

    return (
        <div style={{width: '100%', boxShadow: '1px 10px 10px gray', paddingRight:50, paddingLeft:50, paddingBottom:20,
            marginBottom: 20, height:520}} >
            <Stepper style={{backgroundColor:'transparent'}} activeStep={activeStep} alternativeLabel
                     connector={<StepConnector style={{marginTop: '10px'}}
            classes={{completed: classes.completed_conn, active: classes.active_conn, line: classes.line_conn}}/>}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={props.userType === 'influencers' ? ColorStepIconInfluencer :
                            ColorStepIconCompany}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <AnswerOfServer obj={userType === 'influencers'? {
                        email: props.regValues.email,
                        password: props.regValues.password,
                        ...valuesPersonalInfo,
                        ...valuesInstaAccount,
                        bio: bioInfluencer
                    }:{
                        email: props.regValues.email,
                        password: props.regValues.password,
                        ...valuesCompany,
                        bio: bioCompany
                    }} filledCorrectly={props.filledCorrectly} userType={userType}/>
                ) : (
                    <div style={{display:"flex", flexDirection:"column", justifyContent:"flex-end" , height:350}}>
                        <div style={{marginBottom: 30}}>
                            {userType === 'influencers' ?
                                getStepContentInfluencer(activeStep, values_influencer) :
                                getStepContentCompany(activeStep, values_company)}
                        </div>
                        <div style={{display:"flex", justifyContent: "center"}}>
                            <Button
                                onClick={activeStep === 0 ? handleBackToRegister :
                                    (userType === 'influencers' ? handleBackStandardInfluencer :
                                        handleBackStandardCompany)}
                                style={{marginRight: '4%'}}
                            >
                                Back
                            </Button>
                            <Button variant="contained" color="primary" onClick={userType === 'influencers' ?
                                handleNextInfluencer : handleNextCompany}>
                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

const AnswerOfServer = ({obj, filledCorrectly, userType}) => {
    const [id, setId] = React.useState('')
    const [err, setErr] = React.useState(false)
    const [errEmailExists, setErrEmailExists] = React.useState(false)

    // returns to the beginning of registration process
    const handleReset = () => {
        window.location.href = '/register'
    };

    // moves user to personal page
    const handleContinue = () => {
        window.location.href = `/${userType}/${id}`
    }

    // returns the user to login page
    const BackToLogIn = () => {
        window.location.href = '/'
    }

    // returns user to change his email
    const ChangeEmail = () => {
        filledCorrectly(false)
    }

    // sends information to server to register the user
    useEffect(() => {
        fetch(`/api/${userType}/register`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            },
            body: JSON.stringify(obj)
        }).then(res=> {
            if(!res.ok) {
                setErr(true)
                throw new Error('didn\'t register the user')
            }
            return res.json()
        }).then(data=>{
            if (data.status === 'error') {
                setErrEmailExists(true)
                throw new Error('email exists')
            } else {
                let idData = parseJwt(data.data)
                setId(idData.id)
            }
        }).catch(function (error) {
            console.log(error);
        });
    },[])

    return (
        <>
            {/*registered successfully*/}
            {id !== '' && !err && !errEmailExists && <div style={{display: "flex", flexDirection: "column", height:320}}>
                <Alert severity="success" style={{height: 150, fontSize:16, marginBottom: 50, width:'100%', lineHeight: '22pt'}}>
                    <AlertTitle style={{fontSize:28}}><strong>Congrats!</strong></AlertTitle>
                    You registered successfully to our system.<br/>
                    We hope you'll find InfluenceMe helpful, enjoy!
                </Alert>
                <Button onClick={handleContinue} style={{alignSelf:"center"}}>Continue</Button>
            </div>}
            {/*an error occurred*/}
            {err && !id && !errEmailExists && <div style={{display: "flex", flexDirection: "column", height:320}}>
                <Alert severity="error" style={{height: 150, fontSize:16, marginBottom: 50, width:'100%', lineHeight: '22pt'}}>
                    <AlertTitle style={{fontSize:28}}><strong>Note!</strong></AlertTitle>
                    Something went wrong!<br/>
                    We couldn't add you to our system. Please try again!
                </Alert>
                <Button onClick={handleReset} style={{alignSelf:"center"}}>reset registration</Button>
            </div>}
            {/*a user with this email already exists*/}
            {errEmailExists && !id && !err && <div style={{display: "flex", flexDirection: "column", height:320}}>
                <Alert severity="error" style={{height: 150, fontSize:16, marginBottom: 50, width:'100%', lineHeight: '22pt'}}>
                    <AlertTitle style={{fontSize:28}}><strong>User exists!</strong></AlertTitle>
                    Hi there,<br/>
                    A user with the provided email already exists.
                </Alert>
                <div style={{display: "flex", justifyContent: "center" }}>
                    <Button onClick={ChangeEmail} style={{alignSelf:"center", marginRight: '4%'}}>Change email</Button>
                    <Button variant="contained" color="primary" onClick={BackToLogIn} style={{alignSelf:"center"}}>Log in</Button>
                </div>
            </div>}
            {/*loading result*/}
            {!(id || err || errEmailExists) && <div style={{display:"flex", justifyContent: "center",
                alignItems: "center", height:350}}><CircularProgress/></div>}
        </>
    )
}
