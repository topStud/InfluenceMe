import React from 'react';
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
import {AnswerOfServer, email_bad_format, parseJwt, required_txt, ValidateEmail} from '../utils'

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
                setEmailMes(required_txt)
            } else if (!ValidateEmail(emailValue)) {
                setEmailError(true)
                setEmailMes(email_bad_format)
            }
            if (passValue === '') {
                setPassError(true)
                setPassMes(required_txt)
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

    const onKeyDownSearchInput = (e) => {
        if (e.key === 'Enter') {
            logInClicked()
        }
    }

    return (
        <div className={"App"}>
            <Container component="div" maxWidth="xs">
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <Typography color={"secondary"} component={'h1'} variant={'h5'} style={{margin:0}}>
                        Sign In
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
                            onKeyDown={onKeyDownSearchInput}
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
                            Sign In
                        </Button>
                        <Grid container justifyContent="space-between">
                            <Grid item>
                                <Link to='/forgotPassword' className={styles.link}>
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link to='/register' className={styles.link}>
                                    Create an account
                                </Link>
                            </Grid>
                        </Grid>
                        { callServer &&
                            <AnswerOfServer failMsg={"Something went wrong"} methodObj={{method: 'POST',
                                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                                body: JSON.stringify({email: emailValue, password: passValue})
                            }} sucMsg={''} url={'api/login'} callServerObj={{getter: callServer, setter: setCallServer}}
                            sucFunc={(response)=>{
                                let dic = parseJwt(response.data)
                                window.location.href= `/${dic.type}/${dic.id}`
                            }}/>
                        }
                    </form>
                </div>
            </Container>
        </div>
    );
}