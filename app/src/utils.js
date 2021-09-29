import React, {useEffect} from "react";
import {Snackbar, Zoom} from "@material-ui/core";
import {Alert, AlertTitle} from "@material-ui/lab";
import PropTypes from 'prop-types'
import Slide from "@material-ui/core/Slide";


export function parseJwt (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
}

export const required_txt = 'This field is required'
export const short_pass = 'Minimum length for a password is 8 characters'
export const without_digit = 'The password must contain at least one digit'
export const without_small_letter = 'The password must contain at least one small letter a-z'
export const without_big_letter = 'The password must contain at least one big letter A-Z'
export const email_bad_format = 'The email entered is not in the correct format'
export const invalid_phone = 'Phone number is not valid'
export const invalid_url = 'Url format is invalid'

export function stringContainsNumber(_string) {
    return /\d/.test(_string);
}

export function stringContainsSmallLetter(_string) {
    return /[a-z]/.test(_string);
}

export function stringContainsBigLetter(_string) {
    return /[A-Z]/.test(_string);
}

export const validateWebsiteUrl = websiteUrl => {
    const urlRegEx = new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??#?)?)/);
    return urlRegEx.test(String(websiteUrl).toLowerCase());
};

export const TransitionSlide = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const TransitionZoom = React.forwardRef(function Transition(props, ref) {
    return <Zoom ref={ref} {...props} />;
});

export const AnswerOfServer = ({callServerObj, url, methodObj, sucMsg, failMsg, sucFunc, failFunc}) => {
    const [open, setOpen] = React.useState(false)
    const [errMsg, setErrMsg] = React.useState('')
    const [severity, setSeverity] = React.useState('error')

    useEffect(() => {
        if(callServerObj.getter) {
            fetch(url, methodObj).then(res => {
                return res.json()
            }).then(response => {
                if (response.status === 'ok' && sucMsg !== '') {
                    setSeverity('success')
                    setErrMsg(sucMsg)
                    if (typeof sucFunc === 'function') {
                        sucFunc(response)
                    }
                    callServerObj.setter(false)
                    setOpen(true)
                } else if (response.status === 'ok'){
                    if (typeof sucFunc === 'function') {
                        sucFunc(response)
                    }
                    callServerObj.setter(false)
                } else {
                    if (failMsg === '' && typeof failFunc === 'function') {
                        failFunc()
                    } else {
                        setSeverity('error')
                        setOpen(true)
                        if ('error' in response) {
                            setErrMsg(response.error)
                        } else {
                            setErrMsg(failMsg)
                        }
                    }
                }
            }).catch((error) => {
                console.log(error)
            });
        }
    },[callServerObj.getter])

    const handleClose = () => {
        setOpen(false)
        callServerObj.setter(false)
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
            <Alert onClose={handleClose} severity={severity} style={{fontSize:14, fontFamily:'Rubik'}}>
                <div>{errMsg}</div>
            </Alert>
        </Snackbar>
    )
}

ErrorSnackbar.propTypes = {
    open: PropTypes.bool.isRequired,
    setOpen: PropTypes.func.isRequired
}

export function ErrorSnackbar({open, setOpen}) {
    const handleClose = () => {
        setOpen(false)
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
            <Alert onClose={handleClose} severity={'error'} style={{fontSize:14, fontFamily:'Rubik'}}>
                <div>Please check your input and ensure all required fields are filled</div>
            </Alert>
        </Snackbar>
    )
}

export const GetFilteredList = ({callServerObj, url, itemsList}) => {
    const [open, setOpen] = React.useState(false)
    const [errMsg, setErrMsg] = React.useState('')
    useEffect(() => {
        if(callServerObj.getter) {
            fetch(url).then(res => {
                if (!res.ok) {
                    setOpen(true)
                    setErrMsg('Connection problem')
                }
                return res.json()
            }).then(response => {
                if ('status' in response) {
                    setOpen(true)
                    setErrMsg('The search failed')
                } else {
                    callServerObj.setter(false)
                    let tempList = response.docs
                    tempList = tempList.reverse().map(item => itemsList.getter.original.find(i=> i._id === item._id))
                    tempList = tempList.filter(x=> x !== undefined)
                    itemsList.setter({
                        ...itemsList.getter,
                        filtered: tempList
                    })
                }
            }).catch((error) => {
                console.log(error)
            });
        }
    },[callServerObj.getter])

    const handleClose = () => {
        setOpen(false)
        callServerObj.setter(false)
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
            <Alert onClose={handleClose} severity={'error'} style={{fontSize:14, fontFamily:'Rubik'}}>
                <div>{errMsg}</div>
            </Alert>
        </Snackbar>
    )
}

GetFilteredList.propTypes = {
    callServerObj: PropTypes.exact({
        getter: PropTypes.bool,
        setter: PropTypes.func
    }).isRequired,
    url: PropTypes.string.isRequired,
    itemsList: PropTypes.exact({
        getter: PropTypes.object,
        setter: PropTypes.func
    }).isRequired
}

AnswerOfServer.propTypes = {
    callServerObj: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired,
    methodObj: PropTypes.object.isRequired,
    sucMsg: PropTypes.string.isRequired,
    failMsg: PropTypes.string.isRequired,
    sucFunc: PropTypes.func,
    failFunc: PropTypes.func
}

export function calculateAge(birthday) { // birthday is a date
    birthday = new Date(birthday)
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

FetchError.propTypes = {
    name: PropTypes.string.isRequired
}

export function FetchError({name}) {
    return(
        <Alert severity="error" style={{margin:50, fontFamily: 'Rubik'}}>
            <AlertTitle><span style={{fontFamily: 'Rubik', fontSize: '1.2em'}}>Error</span></AlertTitle>
            Something went wrong, The {name} data couldn't be reached — <strong>try again!</strong>
        </Alert>
    )
}

export function ValidateEmail(email)
{
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}