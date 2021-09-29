import {Link, useLocation} from "react-router-dom";
import {createTheme, MuiThemeProvider} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Footer from "../components/footer";
import InputPassword from "../components/InputComponents/inputPassword";
import {
    AnswerOfServer,
    required_txt,
    short_pass,
    stringContainsBigLetter,
    stringContainsNumber,
    stringContainsSmallLetter, without_big_letter, without_digit, without_small_letter
} from "../utils";
import {Alert} from "@material-ui/lab";

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

export default function Reset() {
    // gets token from url
    const { search } = useLocation();
    const match = search.match(/token=(.*)/);
    const token = match?.[1];

    // calls server when true
    const [callServer, setCallServer] = React.useState(false)
    const [passUpdated, setPassUpdated] = React.useState(false)
    const [oldToken, setOldToken] = React.useState(false)
    const [errMsg, setErrMsg] = React.useState('')

    // values
    const [resetValues, setResetValues] = React.useState({
        password: '',
        passwordV: ''
    })
    const values = {
        getter: resetValues,
        setter: setResetValues
    }

    // exist to indicate errors to user
    const [errReset, setErrReset] = React.useState({
        passwordErr: false,
        passwordVErr: false,
        passwordMsg: '',
        passwordVMsg:''
    })
    const errors = {
        getter: errReset,
        setter: setErrReset
    }

    const sendPasswordClicked = () => {
        setErrMsg('')
        let passwordEmpty = resetValues.password === '',
            passwordVEmpty = resetValues.passwordV === '',
            differentPasswords = resetValues.password !== resetValues.passwordV,
            passShort = false, withoutDigit = false, withoutSmallLetter = false, withoutBigLetter = false
        if (!passwordEmpty) {
            passShort = resetValues.password.length < 8
            withoutDigit = !stringContainsNumber(resetValues.password)
            withoutSmallLetter = !stringContainsSmallLetter(resetValues.password)
            withoutBigLetter = !stringContainsBigLetter(resetValues.password)
        }
        // checks for bad input
        if (passwordVEmpty || passwordEmpty || passShort || withoutDigit || withoutSmallLetter || withoutBigLetter
            || differentPasswords) {
            setErrReset({
                passwordErr: passwordEmpty || passShort || withoutDigit || withoutSmallLetter || withoutBigLetter,
                passwordMsg: passwordEmpty ? required_txt : (passShort ? short_pass : (withoutDigit ? without_digit :
                    (withoutSmallLetter ? without_small_letter : (withoutBigLetter ? without_big_letter : '')))),
                passwordVErr: passwordVEmpty || differentPasswords,
                passwordVMsg: passwordVEmpty ? required_txt : differentPasswords ? "'The passwords don\'t match" : ''
            })
        } else {
            setCallServer(true)
        }
    }

    const passObj = {
        id: 'password',
        label: 'Password',
        name: 'password',
    }

    const passVObj = {
        id: 'password-verification',
        label: 'Password Verification',
        name: 'passwordV',
    }

    function onKeyDownReset (e) {
        if (e.key === 'Enter') {
            sendPasswordClicked()
        }
    }

    return (
        <MuiThemeProvider theme={theme}>
            <div style={{minHeight: 'calc(100vh - 121px)', marginBottom: 40}}>
                <Typography component="h1" variant={"h4"} style={{textAlign:'center',fontFamily: 'Rubik',
                    fontWeight: 800, marginBottom: 10,color: '#1F75A6', margin:20}}>
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
                            {errMsg !== '' && <Alert severity="error" style={{marginBottom:30, fontSize:'1em'}}>
                                {errMsg}<br/>
                                {oldToken && <Link to={'/forgotPassword'}>
                                    <Typography component={"a"} href={''} style={{fontSize: '0.9em',
                                        textDecoration: "underline"}}>Resend email</Typography>
                                </Link>}
                            </Alert>}
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center',
                                fontFamily: 'Rubik'}}>
                                <Typography color={"secondary"} component={'h1'} variant={'h4'} style={{margin:0}}>
                                    Reset Password
                                </Typography>
                                <form noValidate style={{borderTop: '1px solid #F2C116'}}>
                                    <Grid container style={{marginTop: 20}}>
                                        <Grid item xs={12} style={{height: 70}}>
                                            <InputPassword val={values} err={errors} info={passObj}/>
                                        </Grid>
                                        <Grid item xs={12} style={{height: 70}}>
                                            <InputPassword val={values} err={errors} info={passVObj} onKeyDown={(e)=>onKeyDownReset(e)}/>
                                        </Grid>
                                    </Grid>
                                    {!passUpdated ? <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        style={{fontWeight: 300, marginTop: '5%', marginBottom: '2%'}}
                                        onClick={() => sendPasswordClicked()}
                                    >
                                        Reset
                                    </Button> :
                                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                            <Typography style={{textAlign: "center", marginTop: '5%',
                                                marginBottom: '5%', color: '#1F75A6'}}>
                                                Your password has been successfully reseted!<br/>
                                                Click the button to go to home page and sign in there.
                                            </Typography>
                                            <Link to={'/'}>
                                                <Button variant="contained" color="primary">Main Page</Button>
                                            </Link>
                                        </div>
                                    }
                                </form>
                            </div>
                        </Container>
                    </Grid>
                </Grid>
            </div>
            <AnswerOfServer failMsg={''} methodObj={{method: 'PUT',
                headers: {'Content-type': 'application/json; charset=UTF-8'}, body: JSON.stringify({token:token,
                    newPassword:resetValues.password})}} sucMsg={''} url={'/api/reset-password'}
                            callServerObj={{getter: callServer, setter: setCallServer}} sucFunc={()=>{
                                setPassUpdated(true)
            }} failFunc={(response)=>{
                if (response.error === 'Sorry, this link has expired.') {
                    setOldToken(true);
                }
                setErrMsg(response.error)
            }}/>
            <Footer/>
        </MuiThemeProvider>
    )
}