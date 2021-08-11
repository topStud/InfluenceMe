import React from 'react';
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

            let url = '/api/login'

            // sends values to server for a check.
            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email: emailValue, pass: passValue})
            }).then(res => {
                if (!res.ok) {
                    throw Error(res.statusText);
                }
                return res.json()
            }).then(data => {
                // data = user id
                window.open("?uid="+data);
            }).catch(function (error) {
                console.log(error);
            });
        }
    }

    function emailChange(e) {
        setEmailValue(e.target.value)
    }

    function passChange(e) {
        setPassValue(e.target.value)
    }

    function removeErrorEmail() {
        setEmailError(false)
        setEmailMes('')
    }

    function removeErrorPass() {
        setPassError(false)
        setPassMes('')
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
                            onClick={removeErrorEmail}
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
                            onClick={removeErrorPass}
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