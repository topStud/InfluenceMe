import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import PersonIcon from '@material-ui/icons/Person'
import BusinessIcon from '@material-ui/icons/Business'
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import '../styles/globals.css'
import {Link} from "react-router-dom";
import styles from "../styles/Home.module.css";

export default function SignUp(props) {
    const values = props.values
    const setValues = props.setValues
    const required_txt = 'This field is required'
    const [showPass, setShowPass] = React.useState(false)
    const [err, setErr] = React.useState({
        emailErr: false,
        passErr: false,
        passVErr:false,
        emailMsg: '',
        passMsg: '',
        passVMs: ''
    })

    // chips
    const variantValue = props.chip.getter
    const setVariantValue = props.chip.setter

    function handleInfluencerClick() {
        props.setUserType('influencers')
        setVariantValue({
            influencers: 'default',
            companies: 'outlined'
        })
    }

    function handleCompanyClick() {
        props.setUserType('companies')
        setVariantValue({
            influencers: 'outlined',
            companies: 'default'
        })
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
            props.filled(true)
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
        setShowPass(!showPass)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
    };

    return (
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
                            type={showPass ? 'text' : 'password'}
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
                                            {showPass ? <Visibility /> : <VisibilityOff />}
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
                            type={showPass ? 'text' : 'password'}
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
                                            {showPass ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Chip variant={variantValue.influencers} color="secondary" icon={<PersonIcon />} label={'Influencer'}
                              style={{width: '100%', fontSize: '1em'}} onClick={handleInfluencerClick}/>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Chip variant={variantValue.companies} color={"secondary"} icon={<BusinessIcon />} label={'Company'}
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
    );
}

function ValidateEmail(email)
{
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
}