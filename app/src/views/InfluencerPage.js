import AppBar from "../components/appBar";
import React, {useEffect} from "react";
import {MuiThemeProvider} from "@material-ui/core";
import {createTheme} from "@material-ui/core/styles";
import {Route, Switch, useParams} from "react-router-dom";
import {Alert, AlertTitle} from "@material-ui/lab";
import Footer from "../components/footer";
import Grid from "@material-ui/core/Grid";
import Proposals from "../components/proposals/proposals";
import ProposalsOfCompany from "../components/proposals/proposalsOfCompany";
import '../styles/globals.css'
import PersonalArea from "../components/personalArea/personalArea";

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

export default function InfluencerPage() {
    const {id} = useParams()
    const [imageUpdated, setImageUpdated] = React.useState(null)
    const imgUpdater = {
        getter: imageUpdated,
        setter: setImageUpdated
    }

    // current influencer data
    const [errFetchInfluencerData, setErrFetchInfluencerData] = React.useState(false)
    const [influencerData, setInfluencerData] = React.useState(null)

    const [companiesList, setCompaniesList] = React.useState(null)
    const [proposalsList, setProposalsList] = React.useState(null)

    useEffect(()=>{
        fetch(`/api/influencers/${id}`).then(res => {
            if (!res.ok) {
                setErrFetchInfluencerData(true)
            }
            return res.json()
        }).then(influencerData => {
            if ('status' in influencerData) {
                setErrFetchInfluencerData(true)
            } else {
                setInfluencerData(influencerData.response)
                setImageUpdated(influencerData.response.photo)
                console.log(influencerData.response)
            }
        })
        fetch('/api/companies').then(res => {
            if (!res.ok) {
                console.log('connection problem')
            }
            return res.json()
        }).then(companiesData => {
            if ('status' in companiesData) {
                console.log('couldn\'t get all companies')
            } else {
                setCompaniesList(companiesData.response)
                fetch('/api/collaboration_proposals').then(res => {
                    if (!res.ok) {
                        console.log('connection problem')
                    }
                    return res.json()
                }).then(proposalsData => {
                    if ('status' in proposalsData) {
                        console.log('couldn\'t get all proposals')
                    } else {
                        // setProposalsList(proposalsList.response)
                        let proposalsList = proposalsData.response.map((proposal)=> {
                            let company = companiesData.response.find(company => company._id === proposal.companyID)
                            proposal.companyName = company.name
                            proposal.companySite = company.siteUrl
                            proposal.logo = company.photo
                            proposal.bio = company.bio
                            return proposal
                        })
                        setProposalsList(proposalsList)
                    }
                })
            }
        })
    }, [])

    return (
        <MuiThemeProvider theme={theme}>
            {influencerData &&
                <>
                    <AppBar userType={'influencers'} data={influencerData} img={imageUpdated}/>
                    <Switch>
                        <Route exact path={`/influencers/${id}`}>
                            {proposalsList !== null &&
                                <Grid container spacing={0}>
                                    <Proposals proposalsList={proposalsList} options={{}} userType={'influencers'}/>
                                </Grid>
                            }
                        </Route>
                        <Route path={`/influencers/${id}/personal`}>
                            <PersonalArea userType={'influencers'} influencerData={influencerData} img={imgUpdater}/>
                        </Route>
                    </Switch>
                </>
            }
            { errFetchInfluencerData &&
            <Alert severity="error" style={{margin:50, fontFamily: 'Rubik'}}>
                <AlertTitle><span style={{fontFamily: 'Rubik', fontSize: '1.2em'}}>Error</span></AlertTitle>
                Something went wrong, The influencer's data couldn't be reached — <strong>try again!</strong>
            </Alert>
            }
            <Footer/>
        </MuiThemeProvider>
    )
}