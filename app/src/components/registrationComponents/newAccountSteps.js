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
import {parseJwt} from '../../utilFunctions'

function getSteps(userType) {
    return userType === 'influencers' ? ['Personal information', 'instagram account', 'Bio'] : ['Company information', 'Bio'];
}

function getStepContentInfluencer(stepIndex, values) {
    switch (stepIndex) {
        case 0:
            return <PersonalInfo personalInfoValues={values.personalInfo}/>
        case 1:
            return <InstagramInfo instagramInfoValues={values.instagramInfo}/>
        case 2:
            return <Bio bioValues={values.Bio}/>
        default:
            return 'Unknown stepIndex';
    }
}

function getStepContentCompany(stepIndex, values) {
    switch (stepIndex) {
        case 0:
            return <CompanyData companyDataValues={values.companyData}/>
        case 1:
            return <Bio bioValues={values.Bio}/>
        default:
            return 'Unknown stepIndex';
    }
}

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


export default function ContentBelowStepper(props) {
    const required_txt = 'This field is required'
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

    const [errPersonalInfo, setErrPersonalInfo] = React.useState({
        firstNameErr: false,
        lastNameErr: false,
        firstNameMsg: '',
        lastNameMsg: '',
        phoneErr: false,
        phoneMsg: ''
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
    const [errCompanyData, setErrCompanyData] = React.useState({
        companyNameErr: false,
        companyNameMsg: '',
        siteUrlErr: false,
        siteUrlMsg: '',
        phoneErr: false,
        phoneMsg: ''
    })
    const [errCompanyBio, setErrCompanyBio] = React.useState({
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
                getter: bioInfluencer
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
                getter: errCompanyBio,
                setter: setErrCompanyBio
            }
        }
    }


    const validateWebsiteUrl = websiteUrl => {
        const urlRegEx = new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??#?)?)/);
        return urlRegEx.test(String(websiteUrl).toLowerCase());
    };

    const handleNextInfluencer = () => {
        let mayContinue = true
        // personal information
        if (activeStep === 0) {
            let phoneNumberErr = !(valuesPersonalInfo.phoneNum === '' || (valuesPersonalInfo.phoneNum.split(" ").length - 1) === 0 || isMobilePhone(valuesPersonalInfo.phoneNum.replace(/\s+/g, ''), 'any'))
            let fNameErr = valuesPersonalInfo.firstName === ''
            let lNameErr = valuesPersonalInfo.lastName === ''
            if (fNameErr || lNameErr || phoneNumberErr) {
                mayContinue = false;
            }
            setErrPersonalInfo({
                firstNameErr: fNameErr,
                firstNameMsg: fNameErr ? required_txt : '',
                lastNameErr: lNameErr,
                lastNameMsg: lNameErr ? required_txt : '',
                phoneErr: phoneNumberErr,
                phoneMsg: phoneNumberErr ? 'Phone number is not valid' : ''
            })
        }
        // Instagram account
        else if (activeStep === 1) {
            let instaUserErr = valuesInstaAccount.user === ''
            let instaFollowersErr = valuesInstaAccount.followers === ''
            let linkErr = valuesInstaAccount.url !== '' && !validateWebsiteUrl(valuesInstaAccount.url)
            let categoryErr = valuesInstaAccount.categories.length === 0
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

    const handleNextCompany = () => {
        let mayContinue = true
        // personal information
        if (activeStep === 0) {
            let phoneNumberErr = !(valuesCompany.phoneNum === '' || (valuesCompany.phoneNum.split(" ").length - 1) === 0 || isMobilePhone(valuesCompany.phoneNum.replace(/\s+/g, ''), 'any'))
            let compNameErr = valuesCompany.companyName === ''
            let linkErr = valuesCompany.siteUrl !== '' && !validateWebsiteUrl(valuesCompany.siteUrl)
            if (compNameErr || linkErr || phoneNumberErr) {
                mayContinue = false
            }
            setErrCompanyData({
                companyNameErr: compNameErr,
                companyNameMsg: compNameErr ? required_txt : '',
                siteUrlErr: linkErr,
                siteUrlMsg: linkErr ? 'Url format is invalid' : '',
                phoneErr: phoneNumberErr,
                phoneMsg: phoneNumberErr ? 'Phone number is not valid' : ''
            })
        } else if (activeStep === 1) {
            let bioEmpty = bioCompany === ''
            if (bioEmpty) {
                mayContinue = false
            }
            setErrCompanyBio({
                bioErr: bioEmpty,
                bioMsg: bioEmpty ? required_txt : ''
            })
        }
        if (mayContinue) {
            setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
    };


    const handleBackStandardInfluencer = () => {
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

    const handleBackStandardCompany = () => {
        if(activeStep === 1) {
            setErrCompanyBio({
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
        <div style={{width: '100%', boxShadow: '1px 10px 10px gray', paddingRight:50, paddingLeft:50, paddingBottom:20, marginBottom: 20, height:480}} >
            <Stepper activeStep={activeStep} alternativeLabel connector={<StepConnector style={{marginTop: '10px'}}
            classes={{completed: classes.completed_conn, active: classes.active_conn, line: classes.line_conn}}/>}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={props.userType === 'influencers' ? ColorStepIconInfluencer : ColorStepIconCompany}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <AnswerOfServer obj={userType === 'influencers'? {
                        email: props.regValues.email,
                        password: props.regValues.pass,
                        firstName: valuesPersonalInfo.firstName,
                        lastName: valuesPersonalInfo.lastName,
                        date: valuesPersonalInfo.date,
                        photo: valuesPersonalInfo.photo,
                        phone: valuesPersonalInfo.phoneNum,
                        instagramUser: valuesInstaAccount.user,
                        followersAmount: valuesInstaAccount.followers,
                        instagramUrl: valuesInstaAccount.url,
                        categories: valuesInstaAccount.categories,
                        bio: bioInfluencer
                    }:{
                        email: props.regValues.email,
                        password: props.regValues.pass,
                        name: valuesCompany.companyName,
                        siteUrl: valuesCompany.siteUrl,
                        photo: valuesCompany.photo,
                        phone: valuesCompany.phoneNum,
                        bio: bioCompany
                    }} filledCorrectly={props.filledCorrectly} userType={userType}/>
                ) : (
                    <div style={{display:"flex", flexDirection:"column", justifyContent:"flex-end" , height:320}}>
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
                            <Button variant="contained" color="primary" onClick={userType === 'influencers' ? handleNextInfluencer : handleNextCompany}>
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

    const handleReset = () => {
        window.location.href = '/register'
    };

    const handleContinue = () => {
        window.location.href = `/${userType}/${id}`
    }

    const BackToLogIn = () => {
        window.location.href = '/'
    }

    const ChangeEmail = () => {
        filledCorrectly(false)
    }

    useEffect(() => {
        console.log(JSON.stringify(obj))
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
                throw new Error(res.statusText)
            }
            return res.json()
        }).then(data=>{
            if (data.status === 'error') {
                setErrEmailExists(true)
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
            {id !== '' && !err && !errEmailExists && <div style={{display: "flex", flexDirection: "column", height:320}}>
                <Alert severity="success" style={{height: 150, fontSize:16, marginBottom: 50, width:'100%', lineHeight: '22pt'}}>
                    <AlertTitle style={{fontSize:28}}><strong>Congrats!</strong></AlertTitle>
                    You registered successfully to our system.<br/>
                    We hope you'll find InfluenceMe helpful, enjoy!
                </Alert>
                <Button onClick={handleContinue} style={{alignSelf:"center"}}>Continue</Button>
            </div>}
            {err && !id && !errEmailExists && <div style={{display: "flex", flexDirection: "column", height:320}}>
                <Alert severity="error" style={{height: 150, fontSize:16, marginBottom: 50, width:'100%', lineHeight: '22pt'}}>
                    <AlertTitle style={{fontSize:28}}><strong>Note!</strong></AlertTitle>
                    Something went wrong!<br/>
                    We couldn't add you to our system. Please try again!
                </Alert>
                <Button onClick={handleReset} style={{alignSelf:"center"}}>reset registration</Button>
            </div>}
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
            {!(id || err || errEmailExists) && <div style={{display:"flex", justifyContent: "center", alignItems: "center", height:350}}><CircularProgress/></div>}
        </>
    )
}
