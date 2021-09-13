import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import PersonIcon from '@material-ui/icons/Person'
import BusinessIcon from '@material-ui/icons/Business'
import '../../styles/globals.css'
import {Link} from "react-router-dom";
import styles from "../../styles/Home.module.css";
import InputText from '../InputComponents/inputText';
import InputPassword from '../InputComponents/inputPassword'
import {required_txt, ValidateEmail} from "../../utils";

export default function SignUp(props) {
    const values = props.values
    const [err, setErr] = React.useState({
        emailErr: false,
        passwordErr: false,
        passwordVErr:false,
        emailMsg: '',
        passwordMsg: '',
        passwordVMsg: ''
    })
    const errors = {
        getter: err,
        setter: setErr,
    }

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
        passEmpty = values.getter.password === ''
        passVEmpty = values.getter.passwordV === ''
        emailEmpty = values.getter.email === ''
        badEmail = !ValidateEmail(values.getter.email)
        if (passEmpty || passVEmpty || emailEmpty || badEmail || (values.getter.password.length < 6) || (values.getter.password !== values.getter.passwordV)) {
            setErr({
                passwordMsg: passEmpty ? required_txt : values.getter.password.length < 6 ? 'Minimum length for a password is 6 characters' : '',
                passwordErr: passEmpty || values.getter.password.length < 6,
                passwordVErr: passVEmpty || values.getter.password !== values.getter.passwordV,
                passwordVMsg: passVEmpty ? required_txt : values.getter.password !== values.getter.passwordV ? 'The passwords don\'t match' : '',
                emailErr: badEmail,
                emailMsg: emailEmpty ? required_txt : badEmail ? 'The email entered is not in the correct format' : ''
            })
        } else {
            props.filled(true)
        }
    }

    const emailObj = {
        required: true,
        id: 'email',
        label: 'Email Address',
        name: 'email',
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
        <div style={{marginTop: '3%', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <Typography color={"secondary"} component={'h1'} variant={'h3'} style={{margin:0}}>
                Sign Up
            </Typography>
            <form style={{width: '100%', marginTop: '5%'}} noValidate>
                <Grid container spacing={2}>
                    <Grid item xs={12} style={{height: 70}}>
                        <InputText val={values} err={errors} info={emailObj}/>
                    </Grid>
                    <Grid item xs={12} style={{height: 70}}>
                        <InputPassword val={values} err={errors} info={passObj}/>
                    </Grid>
                    <Grid item xs={12} style={{height: 100}}>
                        <InputPassword val={values} err={errors} info={passVObj}/>
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