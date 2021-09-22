import React from 'react';
import Grid from '@material-ui/core/Grid';
import Layout from "../components/layout";
import '../styles/globals.css'
import Register from '../components/registrationComponents/accountIinfo'
import ProfileData from '../components/registrationComponents/newAccountSteps'

export default function Registration() {
    // registration values
    const [registrationValues, setRegistrationValues] = React.useState({
        email: '',
        password: '',
        passwordV: '',
    })
    const values = {
        getter: registrationValues,
        setter: setRegistrationValues,
    }

    // profile values - influencer
    const [valuesPersonalInfo, setValuesPersonalInfo] = React.useState({
        firstName: '',
        lastName: '',
        date: '',
        phone: '',
        photo: null,
        photoName: ''
    })
    const [valuesInstaAccount, setValuesInstaAccount] = React.useState({
        instagramUser: '',
        followersAmount: '',
        instagramUrl: '',
        categories: []
    })
    const [bioInfluencer, setBioInfluencer] = React.useState('')

    // profile values - company
    const [valuesCompany, setValuesCompany] = React.useState({
        name: '',
        siteUrl: '',
        phone: '',
        photoName: '',
        photo: null,
    })
    const [bioCompany, setBioCompany] = React.useState('')

    const objProfileInfo = {
        influencers: {
            personal: {
                getter: valuesPersonalInfo,
                setter: setValuesPersonalInfo
            },
            instagram: {
                getter: valuesInstaAccount,
                setter: setValuesInstaAccount
            },
            bio: {
                getter: bioInfluencer,
                setter: setBioInfluencer
            }
        },
        companies: {
            info: {
                getter: valuesCompany,
                setter: setValuesCompany
            },
            bio: {
                getter: bioCompany,
                setter: setBioCompany
            }
        }
    }

    // helps us know in what stage we are
    const [filledRegistrationData, setFilledRegistrationData] = React.useState(false)
    // user decides what type of user he wants to be
    const [userType, setUserType] = React.useState('influencers')

    return (
        <Layout pageOption={1}>
            <Grid container spacing={0}>
                <Grid item  xs={2}/>
                <Grid item  xs={8}>
                    {!filledRegistrationData ?
                        (<Register filled={setFilledRegistrationData} values={values} setUserType={setUserType}/>) :
                        (<ProfileData profileValues={objProfileInfo} regValues={registrationValues}
                                      userType={userType} filledCorrectly={setFilledRegistrationData}/>)}
                </Grid>
                <Grid item  xs={2}/>
            </Grid>
        </Layout>
    );
}