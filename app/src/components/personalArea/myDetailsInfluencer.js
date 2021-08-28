import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PersonalInfo from "../registrationComponents/personalInfo";
import {Divider} from "@material-ui/core";
import InstagramInfo from "../registrationComponents/instagramInfo";
import Bio from "../registrationComponents/bio";
import Button from "@material-ui/core/Button";
import isMobilePhone from "validator/es/lib/isMobilePhone";
import {AnswerOfServer, required_txt, validateWebsiteUrl} from "../../utils";

const useStyles = makeStyles(() => ({
    container: {
        boxShadow: '1px 5px 10px #A68617',
        padding:20
    },
}));

export default function MyDetailsInfluencer({setValue, influencerData}) {
    const classes = useStyles();
    const [callToServer, setCallToServer] = React.useState(false)
    let objToServer

    // so the correct tab will be marked
    useEffect(()=>{
        setValue(2)
    })
    
    const [valuesMyDetails, setValuesMyDetails] = React.useState({
        firstName: influencerData.firstName,
        lastName: influencerData.lastName,
        date: influencerData.date.substring(0,influencerData.date.indexOf('T')),
        phone: influencerData.phone,
        photo: influencerData.photo,
        instagramUser: influencerData.instagramUser,
        followersAmount: influencerData.followersAmount,
        instagramUrl: influencerData.instagramUrl,
        categories: influencerData.categories
    })
    const [bio, setBio] = React.useState(influencerData.bio)
    const [errMyDetails, setErrMyDetails] = React.useState({
        firstNameErr: false,
        lastNameErr: false,
        firstNameMsg: '',
        lastNameMsg: '',
        phoneErr: false,
        phoneMsg: '',
        userErr: false,
        followersErr: false,
        urlErr: false,
        categoryErr: false,
        userMsg: '',
        followersMsg: '',
        urlMsg: '',
    })
    const myDetailsObj={
        val:{
            getter: valuesMyDetails,
            setter: setValuesMyDetails
        },
        err:{
            getter: errMyDetails,
            setter: setErrMyDetails
        }
    }
    const bioMyDetails= {
        val:{
            getter: bio,
            setter: setBio
        }
    }
    const [prevMyDetailsData, setPrevMyDetailsData] = React.useState(valuesMyDetails)
    const [prevBio, setPrevBio] = React.useState(bio)

    function onClickSave() {
        let mayContinue = true
        // check input
        let phoneNumberErr = !(valuesMyDetails.phone === '' || (valuesMyDetails.phone.split(" ").length - 1) === 0 || isMobilePhone(valuesMyDetails.phone.replace(/\s+/g, ''), 'any'))
        let fNameErr = valuesMyDetails.firstName === ''
        let lNameErr = valuesMyDetails.lastName === ''
        let instaUserErr = valuesMyDetails.instagramUser === ''
        let instaFollowersErr = valuesMyDetails.followersAmount === ''
        let linkErr = valuesMyDetails.instagramUrl !== '' && !validateWebsiteUrl(valuesMyDetails.instagramUrl)
        let categoryErr = valuesMyDetails.categories.length === 0
        if (fNameErr || lNameErr || phoneNumberErr || linkErr || instaUserErr || instaFollowersErr || categoryErr) {
            mayContinue = false;
        }
        setErrMyDetails({
            firstNameErr: fNameErr,
            firstNameMsg: fNameErr ? required_txt : '',
            lastNameErr: lNameErr,
            lastNameMsg: lNameErr ? required_txt : '',
            phoneErr: phoneNumberErr,
            phoneMsg: phoneNumberErr ? 'Phone number is not valid' : '',
            instagramUrlErr: linkErr,
            urlMsg: linkErr ? 'Url format is invalid' : '',
            instagramUserErr: instaUserErr,
            userMsg: instaUserErr ? required_txt : '',
            followersErr: instaFollowersErr,
            followersMsg: instaFollowersErr ? required_txt : '',
            categoryErr: categoryErr
        })
        // call to server to update info
        if (mayContinue) {
            // objToServer = {...valuesMyDetails, bio:bio}
            objToServer = {firstName: 'RONI'}
            console.log(objToServer)
            setCallToServer(true)
        }
    }

    return (
        <>
            <div className={classes.container}>
                <Typography component={'h3'} variant={"h4"} style={{fontFamily: 'Rubik', fontWeight:200, color: '#A68617'}}>
                    Personal Information
                </Typography>
                <Divider style={{marginBottom: 20}}/>
                <PersonalInfo values={myDetailsObj}/>
            </div>
            <div className={classes.container} style={{ marginTop:20}}>
                <Typography component={'h3'} variant={"h4"} style={{fontFamily: 'Rubik', fontWeight:200, color: '#A68617'}}>
                    Instagram Account
                </Typography>
                <Divider style={{marginBottom: 20}}/>
                <InstagramInfo values={myDetailsObj}/>
            </div>
            <div className={classes.container} style={{ marginTop:20}}>
                <Typography component={'h3'} variant={"h4"} style={{fontFamily: 'Rubik', fontWeight:200, color: '#A68617'}}>
                    Bio
                </Typography>
                <Divider style={{marginBottom: 20}}/>
                <Bio values={bioMyDetails}/>
            </div>
            <Button 
                disabled={(JSON.stringify(prevMyDetailsData) === JSON.stringify(valuesMyDetails)) && prevBio === bio}
                color={"secondary"} style={{marginTop:20}} fullWidth variant={"contained"} onClick={onClickSave}>Save Changes</Button>
            <AnswerOfServer callServerObj={{getter: callToServer, setter: setCallToServer}}
                            url={`/api/influencers/${influencerData._id}`}
                            methodObj={{method: 'PUT', headers: {'Content-type': 'application/json; charset=UTF-8'}, body: JSON.stringify(objToServer)}}
                            sucMsg={'Changes saved successfully'} errMsg={'Save Failed'}
                            sucFunc={()=>{setPrevBio(bio); setPrevMyDetailsData(valuesMyDetails)}}/>
        </>
    );
}
