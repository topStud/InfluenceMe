import React, {useEffect} from "react";
import {Snackbar} from "@material-ui/core";
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

export const validateWebsiteUrl = websiteUrl => {
    const urlRegEx = new RegExp(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www\.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w\-_]*)?\??#?)?)/);
    return urlRegEx.test(String(websiteUrl).toLowerCase());
};

export const TransitionSlide = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export const AnswerOfServer = ({callServerObj, url, methodObj, sucMsg, failMsg, sucFunc}) => {
    const [open, setOpen] = React.useState(false)
    const [errMsg, setErrMsg] = React.useState('')
    const [severity, setSeverity] = React.useState('error')

    useEffect(() => {
        if(callServerObj.getter) {
            fetch(url, methodObj).then(res => {
                if (!res.ok) {
                    setOpen(true)
                    setSeverity('error')
                    setErrMsg('Connection problem')
                }
                return res.json()
            }).then(response => {
                if (response.status === 'ok' && sucMsg !== '') {
                    setSeverity('success')
                    setErrMsg(sucMsg)
                    sucFunc(response)
                    callServerObj.setter(false)
                    setOpen(true)
                } else if (response.status === 'ok'){
                    sucFunc(response)
                } else {
                    setSeverity('error')
                    setOpen(true)
                    if ('error' in response) {
                        setErrMsg(response.error)
                    } else {
                        setErrMsg(failMsg)
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

export function ErrorSnackbar({open, setOpen}) {
    const handleClose = () => {
        setOpen(false)
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
            <Alert onClose={handleClose} severity={'error'} style={{fontSize:14, fontFamily:'Rubik'}}>
                <div>Bad input entered</div>
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
                    tempList = tempList.map(item => itemsList.getter.original.find(i=> i._id === item._id))
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

AnswerOfServer.propTypes = {
    callServerObj: PropTypes.object.isRequired,
    url: PropTypes.string.isRequired,
    methodObj: PropTypes.object.isRequired,
    sucMsg: PropTypes.string.isRequired,
    failMsg: PropTypes.string.isRequired,
    sucFunc: PropTypes.func
}

export function calculateAge(birthday) { // birthday is a date
    birthday = new Date(birthday)
    let ageDifMs = Date.now() - birthday.getTime();
    let ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
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