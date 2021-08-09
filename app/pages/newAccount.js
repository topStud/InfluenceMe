import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Layout from "../components/layout";
import Chip from '@material-ui/core/Chip';
import PersonIcon from '@material-ui/icons/Person'
import BusinessIcon from '@material-ui/icons/Business'
import StepperAccountInfo from '../components/newAccountSteps'

export default function SignUp() {
    const required_txt = 'This field is required'
    // values
    const [emailValue, setEmailValue] = React.useState('')
    const [passValue, setPassValue] = React.useState('')
    const [passVValue, setPassVValue] = React.useState('')
    // set error
    const [emailError, setEmailError] = React.useState(false)
    const [passError, setPassError] = React.useState(false)
    const [passVError, setPassVError] = React.useState(false)
    // set message error
    const [emailMes, setEmailMes] = React.useState('')
    const [passMes, setPassMes] = React.useState('')
    const [passVMes, setPassVMes] = React.useState('')
    // chips
    const [chipValue, setChipValue] = React.useState(1)
    const [variantInfluencerValue, setVariantInfluencerValue] = React.useState('default')
    const [variantCompanyValue, setVariantCompanyValue] = React.useState('outlined')

    const [registered, setRegistered] = React.useState(false)

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

    function emailChange(e) {
        setEmailValue(e.target.value)
    }

    function passChange(e) {
        setPassValue(e.target.value)
    }

    function passVChange(e) {
        setPassVValue(e.target.value)
    }

    function SignUpClicked() {
        let valid = true
        if (passValue === '') {
            setPassMes(required_txt)
            setPassError(true)
            valid = false
        } else if (passValue !== passVValue) {
            setPassVError(true)
            setPassVMes('The passwords don\'t match')
            valid = false
            setPassVValue('')
        }
        if (passVValue === '') {
            setPassVMes(required_txt)
            setPassVError(true)
            valid = false
        }
        if (!ValidateEmail(emailValue)) {
            valid = false
            setEmailError(true)
            if (emailValue === '') {
                setEmailMes(required_txt)
            } else {
                setEmailMes("The email entered is not in the correct format")
                setEmailValue('')
            }
        }
        // sends values to server for registration
        if (valid) {
            setRegistered(true)
        }
    }

    function removeEmailError() {
        setEmailError(false)
        setEmailMes('')
    }

    function removePassError() {
        setPassError(false)
        setPassMes('')
    }

    function removePassVError() {
        setPassVError(false)
        setPassVMes('')
    }

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
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            autoComplete="email"
                                            value={emailValue}
                                            onChange={emailChange}
                                            error={emailError}
                                            helperText={emailMes}
                                            onClick={removeEmailError}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            value={passValue}
                                            onChange={passChange}
                                            error={passError}
                                            helperText={passMes}
                                            onClick={removePassError}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            required
                                            fullWidth
                                            name="password_v"
                                            label="Password Verification"
                                            type="password"
                                            id="password_v"
                                            value={passVValue}
                                            onChange={passVChange}
                                            error={passVError}
                                            helperText={passVMes}
                                            onClick={removePassVError}
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
                            </form>
                        </div>
                    ):(
                        <StepperAccountInfo register={setRegistered}/>
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