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

    const [filledRegistrationData, setFilledRegistrationData] = React.useState(false)
    const [userType, setUserType] = React.useState('influencers')
    const [markedChip, setMarkedChip] = React.useState({
        influencers: 'default',
        companies: 'outlined'
    })
    const chip = {
        getter: markedChip,
        setter: setMarkedChip
    }

    return (
        <Layout pageOption={1}>
            <Grid container spacing={0}>
                <Grid item xs={12} sm={2}>

                </Grid>
                <Grid item xs={12} sm={8}>
                    {!filledRegistrationData ?
                        (<Register filled={setFilledRegistrationData} values={values} setUserType={setUserType} chip={chip}/>) :
                        (<ProfileData profileValues={objProfileInfo} regValues={registrationValues}
                                      userType={userType} filledCorrectly={setFilledRegistrationData}/>)}
                </Grid>
                <Grid item xs={12} sm={2}>

                </Grid>
            </Grid>
        </Layout>
    );
}