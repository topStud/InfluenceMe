import {makeStyles} from "@material-ui/core/styles";
import InputPassword from "../InputComponents/inputPassword";
import Button from "@material-ui/core/Button";
import React from 'react'
import Typography from "@material-ui/core/Typography";
import {Divider} from "@material-ui/core";
import {
    AnswerOfServer, required_txt,
    short_pass,
    stringContainsBigLetter,
    stringContainsNumber,
    stringContainsSmallLetter, without_big_letter, without_digit, without_small_letter
} from "../../utils";
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
    container: {
        boxShadow: '1px 5px 10px #A68617',
        padding:20,
        minWidth:420
    },
}));

ChangePassword.propTypes = {
    userType: PropTypes.oneOf(['influencers', 'companies']).isRequired,
    infoObj: PropTypes.object.isRequired,
}

export default function ChangePassword({userType, infoObj}) {
    const classes = useStyles();
    // when true calls to server for changing the password
    const [callToServer, setCallToServer] = React.useState(false)

    // saves the values the user enters
    const [changePasswordValues, setChangePasswordValues] = React.useState({
        currentPassword: '',
        newPassword: ''
    })
    const valuesObj = {
        getter: changePasswordValues,
        setter: setChangePasswordValues
    }
    // the fields may get bad input, those variables exist to indicate that.
    const [errChangePassword, setErrChangePassword] = React.useState({
        currentPasswordErr: false,
        newPasswordErr: false,
        currentPasswordMsg: '',
        newPasswordMsg: ''
    })
    const errObj = {
        getter: errChangePassword,
        setter: setErrChangePassword
    }

    const currPassInfo = {
        id: 'current-password',
        label: 'Current Password',
        name: 'currentPassword'
    }

    const newPassInfo = {
        id: 'new-password',
        label: 'New Password',
        name: 'newPassword'
    }

    function onClickChange() {
        let passCurrEmpty = changePasswordValues.currentPassword === ''
        let passNewEmpty = changePasswordValues.newPassword === ''
        let passCurrShort = false, currWithoutDigit = false, currWithoutSmallLetter = false, currWithoutBigLetter = false
        let passNewShort = false, newWithoutDigit = false, newWithoutSmallLetter = false, newWithoutBigLetter = false
        if (!passCurrEmpty) {
            passCurrShort = changePasswordValues.currentPassword.length < 8
            currWithoutDigit = !stringContainsNumber(changePasswordValues.currentPassword)
            currWithoutSmallLetter = !stringContainsSmallLetter(changePasswordValues.currentPassword)
            currWithoutBigLetter = !stringContainsBigLetter(changePasswordValues.currentPassword)
        }
        if (!passNewEmpty) {
            passNewShort = changePasswordValues.newPassword.length < 8
            newWithoutDigit = !stringContainsNumber(changePasswordValues.newPassword)
            newWithoutSmallLetter = !stringContainsSmallLetter(changePasswordValues.newPassword)
            newWithoutBigLetter = !stringContainsBigLetter(changePasswordValues.newPassword)
        }
        // checks if user entered bad input
        if (passCurrEmpty || passCurrShort || currWithoutDigit || currWithoutSmallLetter || currWithoutBigLetter
            || passNewEmpty || passNewShort || newWithoutDigit || newWithoutSmallLetter || newWithoutBigLetter) {
            setErrChangePassword({
                currentPasswordErr: passCurrEmpty || passCurrShort || currWithoutDigit || currWithoutSmallLetter
                    || newWithoutBigLetter,
                currentPasswordMsg: passCurrEmpty ? required_txt : (passCurrShort ? short_pass : (currWithoutDigit ?
                    without_digit : (currWithoutSmallLetter ? without_small_letter : (currWithoutBigLetter ?
                        without_big_letter : '')))),
                newPasswordErr: passNewEmpty || passNewShort || newWithoutDigit || newWithoutSmallLetter || newWithoutBigLetter,
                newPasswordMsg: passNewEmpty ? required_txt : (passNewShort ? short_pass : (newWithoutDigit ? without_digit :
                    (newWithoutSmallLetter ? without_small_letter : (newWithoutBigLetter ? without_big_letter : '')))),
            })
        } else{
            setCallToServer(true)
        }
    }

    return(
        <div className={classes.container}>
            <Typography component={'h3'} variant={"h4"} style={{fontFamily: 'Rubik', fontWeight:200, color: '#A68617'}}>
                Change Password
            </Typography>
            <Divider style={{marginBottom: 20}}/>
            <div style={{height: 80}}>
                <InputPassword val={valuesObj} err={errObj} info={currPassInfo}/>
            </div>
            <div style={{height: 80}}>
                <InputPassword val={valuesObj} err={errObj} info={newPassInfo}/>
            </div>
            <Button disabled={changePasswordValues.currentPassword === '' || changePasswordValues.newPassword === ''}
                    color={"secondary"} style={{marginTop:20}} fullWidth variant={"contained"} onClick={onClickChange}>
                Change Password
            </Button>
            <AnswerOfServer callServerObj={{getter: callToServer, setter: setCallToServer}}
                            url={`/api/${userType}/change-password/${infoObj._id}`}
                            methodObj={{method: 'PUT', headers: {'Content-type': 'application/json; charset=UTF-8'},
                                body: JSON.stringify(changePasswordValues)}}
                            sucMsg={'Changes saved successfully'} failMsg={'Save Failed'}
                            sucFunc={()=>{setChangePasswordValues({currentPassword: '', newPassword: ''})}}/>
        </div>
    )
}