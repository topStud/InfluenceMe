import AppBar from "../components/appBar";
import React, {useEffect} from "react";
import {MuiThemeProvider} from "@material-ui/core";
import {createTheme, makeStyles} from "@material-ui/core/styles";
import {Route, Switch, useParams} from "react-router-dom";
import {Alert, AlertTitle} from "@material-ui/lab";
import Footer from "../components/footer";
import Grid from "@material-ui/core/Grid";
import CardsDisplay from "../components/Cards/cardsDisplay";
import '../styles/globals.css'
import PersonalArea from "../components/personalArea/personalArea";
import FullInfoProposal from "../components/Cards/fullInfoProposal";
import BackDrop from "@material-ui/core/Backdrop";

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

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function InfluencerPage() {
    const {id} = useParams()
    const classes = useStyles()

    // for backdrop
    const [openBackDrop, setOpenBackDrop] = React.useState(false);
    const backdropObj = {
        getter: openBackDrop,
        setter: setOpenBackDrop
    }

    const [proposalClickedForInfo, setProposalClickedForInfo] = React.useState(null)

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
                        console.log('couldn\'t get all Cards')
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
                        console.log(proposalsList)
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
                    <AppBar userType={'influencers'} data={influencerData} />
                    <Switch>
                        <Route exact path={`/influencers/${id}`}>
                            {proposalsList !== null &&
                                <Grid container spacing={0}>
                                    <CardsDisplay display={'proposals'} objList={proposalsList} backdrop={backdropObj} setClickedProposal={setProposalClickedForInfo}/>
                                </Grid>
                            }
                            <BackDrop className={classes.backdrop} open={openBackDrop}>
                                {proposalClickedForInfo !== null && <FullInfoProposal backdrop={backdropObj} proposalObj={proposalClickedForInfo} userType={'influencers'}/>}
                            </BackDrop>
                        </Route>
                        <Route path={`/influencers/${id}/personal`}>
                            <PersonalArea userType={'influencers'} objData={influencerData} setObjData={setInfluencerData} />
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