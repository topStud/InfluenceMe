import {Route, Switch, useParams} from 'react-router-dom';
import AppBar from "../components/appBar";
import React, {useEffect} from "react";
import {MuiThemeProvider} from "@material-ui/core";
import {createTheme} from "@material-ui/core/styles";
import ProposalsOfCompany from "../components/Cards/proposalsOfCompany";
import Footer from "../components/footer";
import PersonalArea from "../components/personalArea/personalArea";
import FullInfoInfluencer from '../components/Cards/fullInfoInfluencer'
import FilteringCards from "../components/Cards/filteringCards";
import PersonalInfluencerDataPage from '../components/notifications/personalInfluencerDataPage'
import {FetchError} from "../utils";

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
    // gets id of company from url
    const {id} = useParams()

    // the data of the current company
    const [companyInfo, setCompanyInfo] = React.useState(null)
    const [errFetchCompanyData, setErrFetchCompanyData] = React.useState(false)
    const [errFetchInfluencersData, setErrFetchInfluencersData] = React.useState(false)

    // for backdrop
    const [openBackDrop, setOpenBackDrop] = React.useState(false);
    const backdropObj = {
        getter: openBackDrop,
        setter: setOpenBackDrop
    }

    // filtering string - influencers
    const [filterStringInfluencers, setFilterStringInfluencers] = React.useState('')
    const filterStringObjInfluencers = {
        getter: filterStringInfluencers,
        setter: setFilterStringInfluencers
    }

    // filtering string - proposals
    const [filterStringProposals, setFilterStringProposals] = React.useState('')
    const filterStringObjProposals = {
        getter: filterStringProposals,
        setter: setFilterStringProposals
    }

    // search string - proposals
    const [searchStringProposals, setSearchStringProposals] = React.useState('')
    const searchStringProposalsObj = {
        getter: searchStringProposals,
        setter: setSearchStringProposals
    }

    // search string - influencers
    const [searchStringInfluencers, setSearchStringInfluencers] = React.useState('')
    const searchStringInfluencersObj = {
        getter: searchStringInfluencers,
        setter: setSearchStringInfluencers
    }

    // proposal list - the original list and the filtered
    const [proposalsList, setProposalsList] = React.useState({
        original: null,
        filtered: null
    })

    // influencers list - the original list and the filtered
    const [influencersList, setInfluencersList] = React.useState({
        original: null,
        filtered: null
    })

    // an influencer that the company wants to get more information about
    const [influencerClickedForInfo, setInfluencerClickedForInfo] = React.useState(null)

    // at first render, we fetch the info of the current company and all the influencers in DB
    useEffect(()=>{
        // current company
        fetch(`/api/companies/${id}`).then(res => {
            if (!res.ok) {
                throw new Error('Couldn\'t get company\'s data');
            }
            return res.json()
        }).then(companyData => {
            if ('status' in companyData) {
                throw new Error('Couldn\'t get company\'s data');
            } else {
                setCompanyInfo(companyData.response)
            }
        }).catch((error) => {
            setErrFetchCompanyData(true)
            console.log(error)
        });
        // all influencers
        fetch('/api/influencers').then(res => {
            if (!res.ok) {
                throw new Error('Couldn\'t get influencers\' data');
            }
            return res.json()
        }).then(influencers => {
            if ('status' in influencers) {
                throw new Error('Couldn\'t get influencers\' data');
            } else {
                setInfluencersList({
                    original: influencers.response,
                    filtered: influencers.response
                })
            }
        }).catch((error) => {
            setErrFetchInfluencersData(true)
            console.log(error)
        });
    },[])

    return(
        <MuiThemeProvider theme={theme}>
            <div style={{minHeight: 'calc(100vh - 121px)', marginBottom:40}}>
                {companyInfo !== null &&
                <>
                    <AppBar data={companyInfo} setData={setCompanyInfo} filtersString={{proposals: filterStringObjProposals.getter,
                        influencers: filterStringObjInfluencers.getter}} searchesString={{proposals: searchStringProposalsObj,
                        influencers: searchStringInfluencersObj}} itemsLists={{proposals:{getter: proposalsList,
                            setter: setProposalsList}, influencers: {getter: influencersList, setter: setInfluencersList}}}/>
                    <Switch>
                        <Route exact path={`/companies/${id}`}>
                            {influencersList.original !== null &&
                            <FilteringCards display={'influencers'} objList={{getter: influencersList,
                                setter: setInfluencersList}} backdrop={backdropObj} setClickedCard={setInfluencerClickedForInfo}
                                            filterStringObj={filterStringObjInfluencers} searchStringObj={searchStringInfluencersObj}/>
                            }
                            {influencerClickedForInfo !== null &&
                                <FullInfoInfluencer backdrop={backdropObj} influencerObj={influencerClickedForInfo}/>
                            }
                        </Route>
                        <Route path={`/companies/${id}/proposals`}>
                            <ProposalsOfCompany companyInfo={companyInfo} searchStringObj={searchStringProposalsObj}
                                                filterStringObj={filterStringObjProposals}
                                                proposalsListObj={{getter: proposalsList, setter: setProposalsList}}/>
                        </Route>
                        <Route path={`/companies/${id}/personal`}>
                            <PersonalArea objData={companyInfo} setObjData={setCompanyInfo}/>
                        </Route>
                        <Route path='/companies/:id/:influencerId'>
                            <PersonalInfluencerDataPage company={companyInfo}/>
                        </Route>
                    </Switch>
                </>
                }
                {/*show fitting error*/}
                { errFetchCompanyData && errFetchInfluencersData && <FetchError name={'company\'s and influencers\''}/>}
                { errFetchCompanyData && !errFetchInfluencersData && <FetchError name={'company\'s'}/>}
                { errFetchInfluencersData && !errFetchCompanyData && <FetchError name={'influencers\''}/>}
            </div>
            <Footer/>
        </MuiThemeProvider>
    )
}