import {makeStyles} from "@material-ui/core/styles";
import React, {useEffect} from "react";
import isMobilePhone from "validator/es/lib/isMobilePhone";
import {AnswerOfServer, ErrorSnackbar, required_txt, validateWebsiteUrl} from "../../utils";
import Typography from "@material-ui/core/Typography";
import {Divider} from "@material-ui/core";
import Bio from "../registrationComponents/bio";
import Button from "@material-ui/core/Button";
import CompanyData from "../registrationComponents/companyData";


const useStyles = makeStyles(() => ({
    container: {
        boxShadow: '1px 5px 10px #A68617',
        padding:20
    },
}));

export default function MyDetailsCompany({companyData, setCompanyData,index, setValue}) {
    const classes = useStyles();
    useEffect(()=>{
        setValue(index)
    })
    const [myDetailsValues, setMyDetailsValues] = React.useState({
        name: companyData.name,
        siteUrl: companyData.siteUrl,
        photo: companyData.photo,
        photoName: companyData.photoName,
        phone: companyData.phone,
    })
    const [bio, setBio] = React.useState(companyData.bio)

    const [errMyDetails, setErrMyDetails] = React.useState({
        nameErr: false,
        siteUrlErr: false,
        phoneErr: false,
        nameMsg: '',
        siteUrlMsg: '',
        phoneMsg: ''
    })
    const [errBio, setErrBio] = React.useState(companyData.bio)

    const myDetailsObj={
        val:{
            getter: myDetailsValues,
            setter: setMyDetailsValues
        },
        err:{
            getter: errMyDetails,
            setter: setErrMyDetails
        }
    }
    const bioObj = {
        val: {
            getter: bio,
            setter: setBio
        },
        err: {
            getter: errBio,
            setter: setErrBio
        }
    }

    const [prevMyDetailsData, setPrevMyDetailsData] = React.useState(myDetailsValues)
    const [prevBio, setPrevBio] = React.useState(bio)

    const [callToServer, setCallToServer] = React.useState(false)
    const [objToServer, setObjToServer] = React.useState({})
    const [inputErr, setInputErr] = React.useState(false)

    function onClickSave() {
        let mayContinue = true
        let phoneNumberErr = !(myDetailsValues.phone === '' || (myDetailsValues.phone.split(" ").length - 1) === 0 || isMobilePhone(myDetailsValues.phone.replace(/\s+/g, ''), 'any'))
        let compNameErr = myDetailsValues.name === ''
        let linkErr = myDetailsValues.siteUrl !== '' && !validateWebsiteUrl(myDetailsValues.siteUrl)
        if (compNameErr || linkErr || phoneNumberErr) {
            mayContinue = false
        }
        setErrMyDetails({
            nameErr: compNameErr,
            nameMsg: compNameErr ? required_txt : '',
            siteUrlErr: linkErr,
            siteUrlMsg: linkErr ? 'Url format is invalid' : '',
            phoneErr: phoneNumberErr,
            phoneMsg: phoneNumberErr ? 'Phone number is not valid' : ''
        })
        let bioEmpty = bio === ''
        if (bioEmpty) {
            mayContinue = false
        }
        setErrBio({
            bioErr: bioEmpty,
            bioMsg: bioEmpty ? required_txt : ''
        })
        if (mayContinue) {
            setObjToServer({...myDetailsValues, bio:bio})
            setCallToServer(true)
        } else {
            setInputErr(true)
        }
    }
    return(
        <>
            <div className={classes.container}>
                <Typography component={'h3'} variant={"h4"} style={{fontFamily: 'Rubik', fontWeight:200, color: '#A68617'}}>
                    Company information
                </Typography>
                <Divider style={{marginBottom: 20}}/>
                <CompanyData values={myDetailsObj}/>
            </div>
            <div className={classes.container} style={{ marginTop:20}}>
                <Typography component={'h3'} variant={"h4"} style={{fontFamily: 'Rubik', fontWeight:200, color: '#A68617'}}>
                    Bio
                </Typography>
                <Divider style={{marginBottom: 20}}/>
                <Bio values={bioObj}/>
            </div>
            <Button
                disabled={(JSON.stringify(prevMyDetailsData) === JSON.stringify(myDetailsValues)) && prevBio === bio}
                color={"secondary"} style={{marginTop:20}} fullWidth variant={"contained"} onClick={onClickSave}>Save Changes</Button>
            <AnswerOfServer callServerObj={{getter: callToServer, setter: setCallToServer}}
                            url={`/api/companies/${companyData._id}`}
                            methodObj={{method: 'PUT', headers: {'Content-type': 'application/json; charset=UTF-8'}, body: JSON.stringify(objToServer)}}
                            sucMsg={'Changes saved successfully'} failMsg={'Save Failed'}
                            sucFunc={()=>{setPrevBio(bio); setPrevMyDetailsData(myDetailsValues); setCompanyData({...companyData,...myDetailsValues, bio: bio})}}/>
            <ErrorSnackbar open={inputErr} setOpen={setInputErr}/>
        </>
    )
}