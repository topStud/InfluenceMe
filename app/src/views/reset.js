import {Link, useParams} from "react-router-dom";
import {createTheme, MuiThemeProvider} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Footer from "../components/footer";
import InputPassword from "../components/InputComponents/inputPassword";
import {AnswerOfServer, required_txt, short_pass} from "../utils";

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
    const {token} = useParams()

    const [callServer, setCallServer] = React.useState(false)
    const [passUpdated, setPassUpdated] = React.useState(false)

    // values
    const [resetValues, setResetValues] = React.useState({
        password: '',
        passwordV: ''
    })
    const values = {
        getter: resetValues,
        setter: setResetValues
    }

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
        let passwordEmpty = resetValues.password === '',
            passwordVEmpty = resetValues.passwordV === '',
            passwordShort = resetValues.password.length < 6,
            differentPasswords = resetValues.password !== resetValues.passwordV
        if (passwordVEmpty || passwordEmpty || passwordShort || differentPasswords) {
            setErrReset({
                passwordErr: passwordEmpty || passwordShort,
                passwordMsg: passwordEmpty ? required_txt : passwordShort ? short_pass : '',
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

    return (
        <MuiThemeProvider theme={theme}>
            <div style={{minHeight: 'calc(100vh - 121px)', marginBottom: 40}}>
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
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', fontFamily: 'Rubik'}}>
                                <Typography color={"secondary"} component={'h1'} variant={'h4'} style={{margin:0}}>
                                    Reset Password
                                </Typography>
                                <form noValidate style={{borderTop: '1px solid #F2C116'}}>
                                    <div style={{marginTop: 20}}>
                                        <InputPassword val={values} err={errors} info={passObj}/>
                                        <InputPassword val={values} err={errors} info={passVObj}/>
                                    </div>
                                    {!passUpdated ? <Button
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        style={{fontWeight: 300, marginTop: '10%', marginBottom: '2%'}}
                                        onClick={() => sendPasswordClicked()}
                                    >
                                        Reset
                                    </Button> :
                                        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
                                            <Typography style={{textAlign: "center", marginTop: '5%', marginBottom: '5%', color: '#1F75A6'}}>
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
            <AnswerOfServer failMsg={"Password couldn't be reset"} methodObj={{method: 'PUT',
                headers: {'Content-type': 'application/json; charset=UTF-8'}, body: JSON.stringify({token:token,
                    password:resetValues.password})}} sucMsg={''} url={'/api/reset-password'}
                            callServerObj={{getter: callServer, setter: setCallServer}} sucFunc={()=>{
                                setPassUpdated(true)
            }}/>
            <Footer/>
        </MuiThemeProvider>
    )
}