import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Layout from "./components/layout";
import Chip from '@material-ui/core/Chip';
import PersonIcon from '@material-ui/icons/Person'
import BusinessIcon from '@material-ui/icons/Business'
import StepperAccountInfo from './components/newAccountSteps'
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import {FormControl, Input, InputLabel} from "@material-ui/core";
import './styles/globals.css'
import {Link} from "react-router-dom";
import styles from "./styles/Home.module.css";

export default function SignUp() {
    const required_txt = 'This field is required'
    const [values, setValues] = React.useState({
        email: '',
        pass: '',
        passV: '',
        showPass: false
    })
    const [err, setErr] = React.useState({
        emailErr: false,
        passErr: false,
        passVErr:false,
        emailMsg: '',
        passMsg: '',
        passVMsg: ''
    })

    // chips
    const [chipValue, setChipValue] = React.useState(1)
    const [variantInfluencerValue, setVariantInfluencerValue] = React.useState('default')
    const [variantCompanyValue, setVariantCompanyValue] = React.useState('outlined')

    const [registered, setRegistered] = React.useState(false)

    const values_obj = {
        emailVal: values.email,
        passVal: values.pass
    }

    function handleInfluencerClick() {
        setChipValue(1)
        setVariantInfluencerValue('default')
        setVariantCompanyValue('outlined')
    }

    function handleCompanyClick() {
        setChipValue(2)
        setVariantInfluencerValue('outlined')
        setVariantCompanyValue('default')
    }

    function SignUpClicked() {
        let passEmpty, passVEmpty, emailEmpty, badEmail

        passEmpty = values.pass === ''
        passVEmpty = values.passV === ''
        emailEmpty = values.email === ''
        badEmail = !ValidateEmail(values.email)
        if (passEmpty || passVEmpty || emailEmpty || badEmail || (values.pass.length < 6) || (values.pass !== values.passV)) {
            setErr({
                passMsg: passEmpty ? (required_txt) : (values.pass.length < 6 ? 'Minimum length for a password is 6 characters' : ''),
                passErr: passEmpty || values.pass.length < 6,
                passVErr: passVEmpty || values.pass !== values.passV,
                passVMsg: passVEmpty ? (required_txt) : (values.pass !== values.passV ? 'The passwords don\'t match' : ''),
                emailErr: badEmail,
                emailMsg: emailEmpty ? (required_txt) : (badEmail ? 'The email entered is not in the correct format' : '')
            })
        } else {
            setRegistered(true)
        }
    }

    function removeEmailError() {
        setErr({
            ...err,
            emailMsg: '',
            emailErr: false
        })
    }

    function removePassError() {
        setErr({
            ...err,
            passMsg: '',
            passErr: false
        })
    }

    function removePassVError() {
        setErr({
            ...err,
            passVMsg: '',
            passVErr: false
        })
    }

    const handleClickShowPassword = () => {
        setValues({ ...values, showPass: !values.showPass});
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
        <Layout pageOption={1}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={2}>

                </Grid>
                <Grid item xs={12} sm={8}>
                    {/* needs to know when we are talking about influencer and a company*/}
                    {!registered ? (
                        <div style={{marginTop: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                            <Typography color={"secondary"} component={'h1'} variant={'h3'} style={{margin:0}}>
                                Sign Up
                            </Typography>
                            <form style={{width: '100%', marginTop: '5%'}} noValidate>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} style={{height: 70}}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            value={values.email}
                                            onChange={handleChange('email')}
                                            error={err.emailErr}
                                            helperText={err.emailMsg}
                                            onClick={removeEmailError}
                                        />
                                    </Grid>
                                    <Grid item xs={12} style={{height: 70}}>
                                        <TextField
                                            required
                                            error={err.passErr}
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type={values.showPass ? 'text' : 'password'}
                                            id="password"
                                            helperText={err.passMsg}
                                            value={values.pass}
                                            onChange={handleChange('pass')}
                                            onClick={removePassError}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                        >
                                                            {values.showPass ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} style={{height: 100}}>
                                        <TextField
                                            required
                                            error={err.passVErr}
                                            fullWidth
                                            name="passwordV"
                                            label="Password Verification"
                                            type={values.showPass ? 'text' : 'password'}
                                            id="passwordV"
                                            helperText={err.passVMsg}
                                            value={values.passV}
                                            onChange={handleChange('passV')}
                                            onClick={removePassVError}
                                            InputProps={{
                                                endAdornment: (
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password verification visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                        >
                                                            {values.showPass ? <Visibility /> : <VisibilityOff />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                ),
                                            }}
                                        />
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Chip variant={variantInfluencerValue} color="secondary" icon={<PersonIcon />} label={'Influencer'}
                                              style={{width: '100%', fontSize: '1em'}} onClick={handleInfluencerClick}/>
                                    </Grid>
                                    <Grid item xs={12} sm={6}>
                                        <Chip variant={variantCompanyValue} color={"secondary"} icon={<BusinessIcon />} label={'Company'}
                                              style={{width: '100%', fontSize: '1em'}} onClick={handleCompanyClick}/>
                                    </Grid>
                                </Grid>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    color="primary"
                                    style={{fontWeight: 300, marginTop: '5%', marginBottom: '2%'}}
                                    onClick={() => SignUpClicked()}
                                >
                                    Sign Up
                                </Button>
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link to='/' className={styles.link}>
                                            Back to Log in
                                        </Link>
                                    </Grid>
                                </Grid>
                            </form>
                        </div>
                    ):(
                        <StepperAccountInfo register={setRegistered} values={values_obj}/>
                    )}
                </Grid>
                <Grid item xs={12} sm={2}>

                </Grid>
            </Grid>
        </Layout>
    );
}

function ValidateEmail(email)
{
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}