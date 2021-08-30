import {Route, Switch, useParams} from 'react-router-dom';
import AppBar from "../components/appBar";
import React, {useEffect} from "react";
import {MuiThemeProvider} from "@material-ui/core";
import {createTheme} from "@material-ui/core/styles";
import ProposalsOfCompany from "../components/Cards/proposalsOfCompany";
import {Alert, AlertTitle} from "@material-ui/lab";
import Footer from "../components/footer";
import Grid from "@material-ui/core/Grid";
import CardsDisplay from "../components/Cards/cardsDisplay";

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

export default function CompanyPage() {
    const {id} = useParams()
    const [imageUpdated, setImageUpdated] = React.useState(null)
    const imgUpdater = {
        getter: imageUpdated,
        setter: setImageUpdated
    }
    const [companyInfo, setCompanyInfo] = React.useState(null)
    const [errFetchCompanyData, setErrFetchCompanyData] = React.useState(false)

    const [influencersList, setInfluencersList] = React.useState(null)

    useEffect(()=>{
        fetch(`/api/companies/${id}`).then(res => {
            if (!res.ok) {
                setErrFetchCompanyData(true)
            }
            return res.json()
        }).then(companyData => {
            if ('status' in companyData) {
                setErrFetchCompanyData(true)
            } else {
                setCompanyInfo(companyData.response)
            }
        })
        fetch('/api/influencers').then(res => {
            if (!res.ok) {
                setErrFetchCompanyData(true)
            }
            return res.json()
        }).then(influencers => {
            if ('status' in influencers) {
                setErrFetchCompanyData(true)
            } else {
                console.log(influencers.response)
                setInfluencersList(influencers.response)
            }
        })
    },[])

    return(
            <MuiThemeProvider theme={theme}>
                {companyInfo !== null &&
                    <>
                        <AppBar userType={'companies'} data={companyInfo} img={imageUpdated}/>
                        <Switch>
                            <Route exact path={`/companies/${id}`}>
                                {influencersList !== null &&
                                    <Grid container spacing={0}>
                                        <CardsDisplay objList={influencersList} display={'influencers'}/>
                                    </Grid>
                                }
                            </Route>
                            <Route path={`/companies/${id}/proposals`}>
                                <ProposalsOfCompany companyInfo={companyInfo}/>
                            </Route>
                        </Switch>
                    </>
                }
                { errFetchCompanyData &&
                <Alert severity="error" style={{margin:50, fontFamily: 'Rubik'}}>
                    <AlertTitle><span style={{fontFamily: 'Rubik', fontSize: '1.2em'}}>Error</span></AlertTitle>
                    Something went wrong, The company's data couldn't be reached — <strong>try again!</strong>
                </Alert>
                }
                <Footer/>
            </MuiThemeProvider>
    )
}