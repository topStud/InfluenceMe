import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PersonalInfo from "../registrationComponents/personalInfo";
import {Divider} from "@material-ui/core";
import InstagramInfo from "../registrationComponents/instagramInfo";
import Bio from "../registrationComponents/bio";
import Button from "@material-ui/core/Button";
import isMobilePhone from "validator/es/lib/isMobilePhone";
import {AnswerOfServer, invalid_phone, invalid_url, required_txt, validateWebsiteUrl} from "../../utils";

const useStyles = makeStyles(() => ({
    container: {
        boxShadow: '1px 5px 10px #A68617',
        padding:30,
        minWidth:420
    },
}));

export default function MyDetailsInfluencer({setValue, influencerData, setInfluencerData, index}) {
    const classes = useStyles();
    // related to server
    const [callToServer, setCallToServer] = React.useState(false)
    const [objToServer, setObjToServer] = React.useState({})

    useEffect(()=>{
        // so the correct tab will be marked in personal area
        setValue(index)
    })

    // current values of user
    const [valuesMyDetails, setValuesMyDetails] = React.useState({
        firstName: influencerData.firstName,
        lastName: influencerData.lastName,
        date: influencerData.date === '' ? '' : influencerData.date.substring(0,influencerData.date.indexOf('T')),
        phone: influencerData.phone,
        photo: influencerData.photo,
        photoName: influencerData.photoName,
        instagramUser: influencerData.instagramUser,
        followersAmount: influencerData.followersAmount,
        instagramUrl: influencerData.instagramUrl,
        categories: influencerData.categories
    })
    const [bio, setBio] = React.useState(influencerData.bio)
    // exist for indicating bad input
    const [errMyDetails, setErrMyDetails] = React.useState({
        firstNameErr: false,
        lastNameErr: false,
        firstNameMsg: '',
        lastNameMsg: '',
        phoneErr: false,
        phoneMsg: '',
        instagramUserErr: false,
        followersErr: false,
        instagramUrlErr: false,
        categoryErr: false,
        instagramUserMsg: '',
        followersMsg: '',
        instagramUrlMsg: '',
    })
    const [errBio, setErrBio] = React.useState(influencerData.bio)
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
        },
        err: {
            getter: errBio,
            setter: setErrBio
        }
    }
    // saves previous data in case the user does not save changes.
    const [prevMyDetailsData, setPrevMyDetailsData] = React.useState(valuesMyDetails)
    const [prevBio, setPrevBio] = React.useState(bio)

    function onClickSave() {
        let mayContinue = true
        let phoneNumberErr = !(valuesMyDetails.phone === '' || (valuesMyDetails.phone.split(" ").length - 1) === 0 ||
            isMobilePhone(valuesMyDetails.phone.replace(/\s+/g, ''), 'any'))
        let fNameErr = valuesMyDetails.firstName === ''
        let lNameErr = valuesMyDetails.lastName === ''
        let instaUserErr = valuesMyDetails.instagramUser === ''
        let instaFollowersErr = valuesMyDetails.followersAmount === ''
        let linkErr = valuesMyDetails.instagramUrl !== '' && !validateWebsiteUrl(valuesMyDetails.instagramUrl)
        let categoryErr = valuesMyDetails.categories.length === 0
        // checks for bad input
        if (fNameErr || lNameErr || phoneNumberErr || linkErr || instaUserErr || instaFollowersErr || categoryErr) {
            mayContinue = false;
        }
        setErrMyDetails({
            firstNameErr: fNameErr,
            firstNameMsg: fNameErr ? required_txt : '',
            lastNameErr: lNameErr,
            lastNameMsg: lNameErr ? required_txt : '',
            phoneErr: phoneNumberErr,
            phoneMsg: phoneNumberErr ? invalid_phone : '',
            instagramUrlErr: linkErr,
            instagramUrlMsg: linkErr ? invalid_url : '',
            instagramUserErr: instaUserErr,
            instagramUserMsg: instaUserErr ? required_txt : '',
            followersErr: instaFollowersErr,
            followersMsg: instaFollowersErr ? required_txt : '',
            categoryErr: categoryErr
        })
        let bioEmpty = bio === ''
        // checks bio separately
        if (bioEmpty) {
            mayContinue = false
        }
        setErrBio({
            bioErr: bioEmpty,
            bioMsg: bioEmpty ? required_txt : ''
        })
        // call to server to update info
        if (mayContinue) {
            setObjToServer({...valuesMyDetails, bio:bio})
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
                color={"secondary"} style={{marginTop:20}} fullWidth variant={"contained"} onClick={onClickSave}>
                Save Changes
            </Button>
            <AnswerOfServer callServerObj={{getter: callToServer, setter: setCallToServer}}
                            url={`/api/influencers/${influencerData._id}`}
                            methodObj={{method: 'PUT', headers: {'Content-type': 'application/json; charset=UTF-8'},
                                body: JSON.stringify(objToServer)}} sucMsg={'Changes saved successfully'}
                            failMsg={'Save Failed'} sucFunc={()=>{
                                setPrevBio(bio);
                                setPrevMyDetailsData(valuesMyDetails);
                                setInfluencerData({...influencerData,...valuesMyDetails, bio: bio})
                            }}/>
        </>
    );
}
