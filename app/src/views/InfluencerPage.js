import AppBar from "../components/appBar";
import React, {useEffect} from "react";
import {MuiThemeProvider} from "@material-ui/core";
import {createTheme} from "@material-ui/core/styles";
import {Route, Switch, useParams} from "react-router-dom";
import Footer from "../components/footer";
import FilteringCards from '../components/Cards/filteringCards'
import '../styles/globals.css'
import PersonalArea from "../components/personalArea/personalArea";
import FullInfoProposal from "../components/Cards/fullInfoProposal";
import {AnswerOfServer, FetchError} from "../utils";
import ContractView from "../components/notifications/ContractView";

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
    // gets influencer's id from url
    const {id} = useParams()

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

    // fetching data for proposals
    const [errFetchProposalsData, setErrFetchProposalsData] = React.useState(false)
    const [proposalsList, setProposalsList] = React.useState({
        original: null,
        filtered: null
    })

    // user clicked on 'interested' button
    const [callServerInterested, setCallServerInterested] = React.useState(false)

    useEffect(()=>{
        // temps - for accessing the data
        let companiesList, influencerTempData
        // fetching data of current influencer
        fetch(`/api/influencers/${id}`).then(res => {
            if (!res.ok) {
                setErrFetchInfluencerData(true)
                throw new Error('Couldn\'t get influencer\'s data');
            }
            return res.json()
        }).then(influencerData => {
            if ('status' in influencerData) {
                setErrFetchInfluencerData(true)
                throw new Error('Couldn\'t get influencer\'s data');
            } else {
                influencerTempData = influencerData.response
                setInfluencerData(influencerTempData)
                // fetching all companies
                return fetch('/api/companies')
            }
        }).then(res => {
            if (!res.ok) {
                setErrFetchProposalsData(true)
                throw new Error('Couldn\'t get companies\' data');
            }
            return res.json()
        }).then(companiesData => {
            if ('status' in companiesData) {
                setErrFetchProposalsData(true)
                throw new Error('Couldn\'t get companies\' data');
            } else {
                companiesList = companiesData.response
                // fetching all proposals
                return fetch('/api/collaboration_proposals')
            }
        }).then(res => {
            if (!res.ok) {
                setErrFetchProposalsData(true)
                throw new Error('Couldn\'t get proposals\' data');
            }
            return res.json()
        }).then(proposalsData => {
            if ('status' in proposalsData) {
                setErrFetchProposalsData(true)
                throw new Error('Couldn\'t get proposals\' data');
            } else {
                let tempProposalsList = proposalsData.response.reverse().map((proposal)=> {
                    // creating a proposal
                    let company = companiesList.find(company => company._id === proposal.companyID)
                    proposal.companyName = company.name
                    proposal.companySite = company.siteUrl
                    proposal.photo = company.photo
                    proposal.bio = company.bio
                    proposal.disabled = influencerTempData.clickedCollaborations.includes(proposal._id)
                    return proposal
                })
                setProposalsList({
                    original: tempProposalsList,
                    filtered: tempProposalsList
                })
            }
        }).catch((error) => {
            console.log(error)
        });
    }, [])

    return (
        <MuiThemeProvider theme={theme}>
            <div style={{minHeight: 'calc(100vh - 121px)', marginBottom: 40}}>
                {influencerData &&
                <>
                    <AppBar data={influencerData} filtersString={{proposals: filterStringObj.getter, influencers: null}}
                            searchesString={{proposals: searchStringObj, influencers: null}} itemsLists={{proposals:
                            {getter: proposalsList, setter: setProposalsList}, influencers: null}} setData={setInfluencerData}/>
                    <Switch>
                        <Route exact path={`/influencers/${id}`}>
                            {proposalsList.original !== null &&
                            <FilteringCards display={'proposals'} objList={{getter: proposalsList, setter: setProposalsList}}
                                            backdrop={backdropObj} setClickedCard={setProposalClickedForInfo}
                                            filterStringObj={filterStringObj} searchStringObj={searchStringObj}/>

                            }
                            {proposalClickedForInfo !== null &&
                            <FullInfoProposal setCallToServer={setCallServerInterested} backdrop={backdropObj}
                                              proposalObj={{getter: proposalClickedForInfo,
                                                  setter: setProposalClickedForInfo}} disabled={influencerData.disabled}/>}
                            {proposalClickedForInfo !== null &&
                            <AnswerOfServer callServerObj={{getter: callServerInterested, setter: setCallServerInterested}}
                                            url={`/api/notifications`} methodObj={{method: 'POST', headers:
                                    {'Accept': 'application/json', 'Content-type': 'application/json'},
                                body: JSON.stringify({itemID: proposalClickedForInfo._id, photo: influencerData.photo,
                                    itemName: proposalClickedForInfo.title, receiverID: proposalClickedForInfo.companyID,
                                    senderID: influencerData._id, senderName: influencerData.firstName + ' ' +
                                        influencerData.lastName, messageType: 1})}} sucMsg={'Request sent successfully'}
                                            failMsg={'Failed sending the request'} sucFunc={()=>{
                                                proposalClickedForInfo.disabled = true
                                            }}/>}
                        </Route>
                        <Route path={`/influencers/${id}/personal`}>
                            <PersonalArea objData={influencerData} setObjData={setInfluencerData} />
                        </Route>
                        <Route path={`/influencers/${id}/contract/:contractID`}>
                            <ContractView influencer={influencerData} updateInfluencer={setInfluencerData}/>
                        </Route>
                    </Switch>
                </>
                }
                { errFetchInfluencerData && <FetchError name={'influencer\'s'}/>}
                { errFetchProposalsData && <FetchError name={'proposals\''}/>}
            </div>
            <Footer/>
        </MuiThemeProvider>
    )
}