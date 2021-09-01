import {Route, Switch, useParams} from 'react-router-dom';
import AppBar from "../components/appBar";
import React, {useEffect} from "react";
import {MuiThemeProvider} from "@material-ui/core";
import {createTheme, makeStyles} from "@material-ui/core/styles";
import ProposalsOfCompany from "../components/Cards/proposalsOfCompany";
import {Alert, AlertTitle} from "@material-ui/lab";
import Footer from "../components/footer";
import CardsDisplay from "../components/Cards/cardsDisplay";
import PersonalArea from "../components/personalArea/personalArea";
import BackDrop from "@material-ui/core/Backdrop";
import FullInfoInfluencer from '../components/Cards/fullInfoInfluencer'

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

export default function CompanyPage() {
    const classes = useStyles()

    const {id} = useParams()
    const [imageUpdated, setImageUpdated] = React.useState(null)
    const imgUpdater = {
        getter: imageUpdated,
        setter: setImageUpdated
    }
    const [companyInfo, setCompanyInfo] = React.useState(null)
    const [errFetchCompanyData, setErrFetchCompanyData] = React.useState(false)

    const [influencersList, setInfluencersList] = React.useState(null)

    // for backdrop
    const [openBackDrop, setOpenBackDrop] = React.useState(false);
    const backdropObj = {
        getter: openBackDrop,
        setter: setOpenBackDrop
    }

    const [influencerClickedForInfo, setInfluencerClickedForInfo] = React.useState(null)

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
                        <AppBar userType={'companies'} data={companyInfo}/>
                        <Switch>
                            <Route exact path={`/companies/${id}`}>
                                {influencersList !== null &&
                                     <CardsDisplay objList={influencersList} display={'influencers'} backdrop={backdropObj} setClickedProposal={setInfluencerClickedForInfo}/>
                                }
                                <BackDrop className={classes.backdrop} open={openBackDrop}>
                                    {influencerClickedForInfo !== null && <FullInfoInfluencer backdrop={backdropObj} influencerObj={influencerClickedForInfo}/>}
                                </BackDrop>
                            </Route>
                            <Route path={`/companies/${id}/proposals`}>
                                <ProposalsOfCompany companyInfo={companyInfo}/>
                            </Route>
                            <Route path={`/companies/${id}/personal`}>
                                <PersonalArea userType={'companies'} objData={companyInfo} setObjData={setCompanyInfo} img={imgUpdater}/>
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