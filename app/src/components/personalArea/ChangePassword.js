import {makeStyles} from "@material-ui/core/styles";
import InputPassword from "../InputComponents/inputPassword";
import Button from "@material-ui/core/Button";
import React, {useEffect} from 'react'
import Typography from "@material-ui/core/Typography";
import {Divider} from "@material-ui/core";
import {AnswerOfServer} from "../../utils";
import PropTypes from 'prop-types'

const useStyles = makeStyles(() => ({
    container: {
        boxShadow: '1px 5px 10px #A68617',
        padding:20,
    },
}));

ChangePassword.propTypes = {
    userType: PropTypes.oneOf(['influencers', 'companies']).isRequired,
    infoObj: PropTypes.object.isRequired,
    setValue: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}

export default function ChangePassword({userType, infoObj, setValue, index}) {
    const classes = useStyles();
    const [callToServer, setCallToServer] = React.useState(false)

    const [changePasswordValues, setChangePasswordValues] = React.useState({
        currentPassword: '',
        newPassword: ''
    })
    const valuesObj = {
        getter: changePasswordValues,
        setter: setChangePasswordValues
    }
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
        let mayContinue = true
        let currShort = changePasswordValues.currentPassword.length < 6
        let newShort = changePasswordValues.newPassword.length < 6
        if (currShort || newShort) {
            mayContinue = false
            setErrChangePassword({
                currentPasswordErr: currShort,
                currentPasswordMsg: currShort ? 'Minimum length for a password is 6 characters' : '',
                newPasswordErr: newShort,
                newPasswordMsg: newShort ? 'Minimum length for a password is 6 characters' : '',
            })
        }
        if (mayContinue) {
            setCallToServer(true)
        }
    }

    useEffect(()=>{
      setValue(index)
    })

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
            <Button disabled={changePasswordValues.currentPassword === '' || changePasswordValues.newPassword === ''} color={"secondary"} style={{marginTop:20}} fullWidth variant={"contained"} onClick={onClickChange}>Change Password</Button>
            <AnswerOfServer callServerObj={{getter: callToServer, setter: setCallToServer}}
                            url={`/api/${userType}/change-password/${infoObj._id}`}
                            methodObj={{method: 'PUT', headers: {'Content-type': 'application/json; charset=UTF-8'}, body: JSON.stringify(changePasswordValues)}}
                            sucMsg={'Changes saved successfully'} errMsg={'Save Failed'}
                            sucFunc={()=>{setChangePasswordValues({currentPassword: '', newPassword: ''})}}/>
        </div>
    )
}