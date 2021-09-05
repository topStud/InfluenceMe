import {Route, Switch, useParams} from 'react-router-dom';
import AppBar from "../components/appBar";
import React, {useEffect} from "react";
import {MuiThemeProvider} from "@material-ui/core";
import {createTheme, makeStyles} from "@material-ui/core/styles";
import ProposalsOfCompany from "../components/Cards/proposalsOfCompany";
import {Alert, AlertTitle} from "@material-ui/lab";
import Footer from "../components/footer";
import PersonalArea from "../components/personalArea/personalArea";
import BackDrop from "@material-ui/core/Backdrop";
import FullInfoInfluencer from '../components/Cards/fullInfoInfluencer'
import FilteringCards from "../components/Cards/filteringCards";

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
    // gets id of company from url
    const {id} = useParams()

    // the data of the current company
    const [companyInfo, setCompanyInfo] = React.useState(null)
    const [errFetchCompanyData, setErrFetchCompanyData] = React.useState(false)

    // influencers to display the company
    const [influencersList, setInfluencersList] = React.useState(null)

    // for backdrop
    const [openBackDrop, setOpenBackDrop] = React.useState(false);
    const backdropObj = {
        getter: openBackDrop,
        setter: setOpenBackDrop
    }

    // filtering string
    const [filterString, setFilterString] = React.useState('')
    const filterStringObj = {
        getter: filterString,
        setter: setFilterString
    }

    // search string
    const [searchString, setSearchString] = React.useState('')
    const searchStringObj = {
        getter: searchString,
        setter: setSearchString
    }

    // filtered proposal list according to search field, categories
    const [filteredProposalList, setFilteredProposalList] = React.useState([])
    // filtered proposal list according to search field, categories
    const [filteredInfluencersList, setFilteredInfluencersList] = React.useState([])
    // an influencer that the company wants to get more information about
    const [influencerClickedForInfo, setInfluencerClickedForInfo] = React.useState(null)

    // at first render, we fetch the info of the current company and all the influencers in DB
    useEffect(()=>{
        // current company
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
        // all influencers
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
                        <AppBar userType={'companies'} data={companyInfo} filterString={filterString} searchObj={searchStringObj} setFilteredList={setFilteredProposalList}/>
                        <Switch>
                            <Route exact path={`/companies/${id}`}>
                                {influencersList !== null &&
                                <FilteringCards display={'influencers'} objList={influencersList}
                                                backdrop={backdropObj} setClickedCard={setInfluencerClickedForInfo}
                                                filterStringObj={filterStringObj} filteredListObj={{getter: filteredInfluencersList, setter: setFilteredInfluencersList}}/>
                                     // <CardsDisplay objList={influencersList} display={'influencers'} backdrop={backdropObj} setClickedProposal={setInfluencerClickedForInfo}/>
                                }
                                <BackDrop className={classes.backdrop} open={openBackDrop}>
                                    {influencerClickedForInfo !== null && <FullInfoInfluencer backdrop={backdropObj} influencerObj={influencerClickedForInfo}/>}
                                </BackDrop>
                            </Route>
                            <Route path={`/companies/${id}/proposals`}>
                                <ProposalsOfCompany companyInfo={companyInfo} filterStringObj={filterStringObj} filteredListObj={{getter: filteredProposalList, setter: setFilteredProposalList}}/>
                            </Route>
                            <Route path={`/companies/${id}/personal`}>
                                <PersonalArea userType={'companies'} objData={companyInfo} setObjData={setCompanyInfo}/>
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