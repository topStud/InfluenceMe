import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import styles from '../styles/Home.module.css'
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import {Snackbar} from "@material-ui/core";
import {Alert} from "@material-ui/lab";

export default function SignIn() {
    const [emailValue, setEmailValue] = React.useState('')
    const [passValue, setPassValue] = React.useState('')
    const [emailError, setEmailError] = React.useState(false)
    const [passError, setPassError] = React.useState(false)
    const [emailMes, setEmailMes] = React.useState('')
    const [passMes, setPassMes] = React.useState('')
    const [showPass, setShowPass] = React.useState(false)

    const [callServer, setCallServer] = React.useState(false)

    function logInClicked() {
        setCallServer(false)
        if (!ValidateEmail(emailValue) || passValue === '') {
            if (emailValue === '') {
                setEmailError(true)
                setEmailMes('This field is required')
            } else if (!ValidateEmail(emailValue)) {
                setEmailError(true)
                setEmailMes('The email entered is not in the correct format')
            }
            if (passValue === '') {
                setPassError(true)
                setPassMes('This field is required')
            }
        } else {
            // removes the error annotation
            setEmailMes('')
            setPassMes('')
            setCallServer(true)
        }
    }

    const handleClickShowPassword = () => {
        setShowPass(!showPass)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    function emailChange(e) {
        setEmailValue(e.target.value)
    }

    function passChange(e) {
        setPassValue(e.target.value)
    }

    function onClickEmail() {
        setEmailError(false)
        setEmailMes('')
        setCallServer(false)
    }

    function onClickPass() {
        setPassError(false)
        setPassMes('')
        setCallServer(false)
    }

    return (
        <div className={"App"}>
            <Container component="div" maxWidth="xs">
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Typography color={"secondary"} component={'h1'} variant={'h5'} style={{margin:0}}>
                        Log in
                    </Typography>
                    <form noValidate style={{borderTop: '1px solid #F2C116', width: '100%', marginTop: '10px'}}>
                        <TextField
                            style={{height: 50}}
                            margin="normal"
                            required
                            fullWidth
                            error={emailError}
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            helperText={emailMes}
                            value={emailValue}
                            onChange={emailChange}
                            onClick={onClickEmail}
                        />
                        <TextField
                            style={{height: 50}}
                            margin={"normal"}
                            required
                            error={passError}
                            fullWidth
                            name="password"
                            label="Password"
                            type={showPass ? 'text' : 'password'}
                            id="password"
                            helperText={passMes}
                            value={passValue}
                            onChange={passChange}
                            onClick={onClickPass}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPass ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Button
                            fullWidth
                            variant="contained"
                            color="primary"
                            style={{fontWeight: 300, marginTop: '10%', marginBottom: '2%'}}
                            onClick={() => logInClicked()}
                        >
                            Log In
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link to='/newAccount' className={styles.link}>
                                    Create an account
                                </Link>
                            </Grid>
                        </Grid>
                        {/*{callServer && <AnswerOfServer obj={{email: emailValue, password: passValue}}/>}*/}
                        { callServer &&
                            <>
                                <AnswerOfServer setCallServer={setCallServer} obj={{email: emailValue, password: passValue}}/>
                            </>
                        }
                    </form>
                </div>
            </Container>
        </div>
    );
}

function ValidateEmail(email)
{
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}


const AnswerOfServer = ({ setCallServer,obj }) => {
    const [err, setErr] = React.useState(false)
    const [open, setOpen] = React.useState(false)
    const [errNotFound, setErrNotFound] = React.useState(false)

    useEffect(() => {
        fetch('api/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj)
        }).then(res => {
            if (res.status !== 200 && res.status !== 304) {
                if (res.status === 404) {
                    setErrNotFound(true)
                } else {
                    setErr(true)
                }
                setOpen(true)
                throw Error(res.statusText);
            }
            return res.json()
        }).then(data => {
            // moves to correct window
            console.log('logged in successfully')
        }).catch(function (error) {
            console.log(error);
        });
    },[])

    const handleClose = () => {
        setOpen(false)
        setCallServer(false)
    };

    return (
      <>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose} anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}>
              <Alert onClose={handleClose} severity="error">
                  {err ? 'Something went wrong, try again' : errNotFound ? 'A user with this email does not exist' : ''}
              </Alert>
          </Snackbar>
      </>
    )
}
