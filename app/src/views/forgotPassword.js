import Typography from "@material-ui/core/Typography";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import React from "react";
import {createTheme, MuiThemeProvider} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {TextField} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {AnswerOfServer, email_bad_format, required_txt, ValidateEmail} from "../utils";
import Footer from "../components/footer";

const theme = createTheme({
    palette: {
        primary: {
            main: '#A68617'
        },
        secondary: {
            main: '#1F75A6'
        }
    }
});

export default function ForgotPassword() {
    const [callServer, setCallServer] = React.useState(false)
    const [emailSent, setEmailSent] = React.useState(false)

    const [email, setEmail] = React.useState('')
    const [errEmail, setErrEmail] = React.useState({
        err: false,
        msg: ''
    })

    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const onInputClick = () => {
        setErrEmail({
            err: false,
            msg: ''
        })
    }

    const sendEmailClicked = () => {
        if (!ValidateEmail(email)) {
            setErrEmail({
                err: true,
                msg: email === '' ? required_txt : email_bad_format
            })
        } else {
            setCallServer(true)
        }
    }

    return (
        <MuiThemeProvider theme={theme}>
            <div style={{minHeight: 'calc(100vh - 121px)', marginBottom:40}}>
                <Typography component="h1" variant={"h4"} style={{textAlign:'center',fontFamily: 'Rubik',fontWeight: 800, marginBottom: 10,color: '#1F75A6', margin:20}}>
                    <Link to={'/'}>
                        Influence<span style={{color: '#A64B28'}}>Me</span>
                    </Link>
                </Typography>
                <Grid container>
                    <Grid item xs={3}/>
                    <Grid item xs={6}>
                        <Container component="div" maxWidth="sm" style={{
                            boxShadow: '1px 10px 10px gray',
                            backgroundColor: 'white',
                            padding: 30
                        }}>
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                <Typography color={"secondary"} component={'h1'} variant={'h4'} style={{margin:0}}>
                                    Forgot Password?
                                </Typography>
                                <form noValidate style={{borderTop: '1px solid #F2C116'}}>
                                    <p style={{marginTop: 30}}>
                                        Please enter the email address you used for registration.<br/>
                                        An email will be sent to your address with a link for password reset.
                                    </p>
                                    <TextField
                                        style={{height: 50}}
                                        required={true}
                                        fullWidth
                                        name={'email'}
                                        label={'Email Address'}
                                        id={'email-for-reset'}
                                        value={email}
                                        onChange={onChangeEmail}
                                        error={errEmail.err}
                                        helperText={errEmail.msg}
                                        onClick={onInputClick}
                                    />
                                    {!emailSent ? <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        style={{fontWeight: 300, marginTop: '10%', marginBottom: '2%'}}
                                        onClick={() => sendEmailClicked()}
                                    >
                                        Send
                                    </Button> :
                                        <Typography style={{textAlign:"center", marginTop:'10%', color: '#A68617'}}>Email has been sent to your email address successfully!</Typography>
                                    }
                                </form>
                            </div>
                        </Container>
                    </Grid>
                </Grid>
            </div>
            <AnswerOfServer failMsg={"Email couldn't be sent"} methodObj={{method: 'POST',
                headers: {'Accept': 'application/json', 'Content-type': 'application/json'},
                body: JSON.stringify({email:email})}} sucMsg={''} url={'/api/forgot-password'}
                            callServerObj={{getter: callServer, setter: setCallServer}}
                            sucFunc={()=>{
                                setEmailSent(true)
                            }}/>
            <Footer/>
        </MuiThemeProvider>
    )
}