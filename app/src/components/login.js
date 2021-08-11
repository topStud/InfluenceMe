import React, {useEffect} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import styles from '../styles/Home.module.css'

export default function SignIn() {
    const [emailValue, setEmailValue] = React.useState('')
    const [passValue, setPassValue] = React.useState('')
    const [emailError, setEmailError] = React.useState(false)
    const [passError, setPassError] = React.useState(false)
    const [emailMes, setEmailMes] = React.useState('')
    const [passMes, setPassMes] = React.useState('')

    const [callServer, setCallServer] = React.useState(false)

    function logInClicked() {
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
                            margin="normal"
                            required
                            error={passError}
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            helperText={passMes}
                            value={passValue}
                            onChange={passChange}
                            onClick={onClickPass}
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
                        {callServer && <AnswerOfServer obj={{email: emailValue, password: passValue}}/>}
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


const AnswerOfServer = ({ obj }) => {
    const [err, setErr] = React.useState(false)
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
            if (res.statusCode !== 200 && res.statusCode !== 304) {
                if (res.statusCode === 404) {
                    setErrNotFound(true)
                } else {
                    setErr(true)
                }
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

    return (
      <>
          {err && 'Something went wrong, try again'}
          {errNotFound && 'A user with this email does not exist'}
      </>
    )
}
