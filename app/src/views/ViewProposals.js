import React, {useEffect} from "react";
import FilteringCards from "../components/Cards/filteringCards";
import BackDrop from "@material-ui/core/Backdrop";
import FullInfoProposal from "../components/Cards/fullInfoProposal";
import {createTheme, makeStyles, MuiThemeProvider} from "@material-ui/core/styles";
import {FetchError} from "../utils";
import {Link} from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Footer from "../components/footer";
import SearchField from "../components/InputComponents/searchField";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

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

export default function ViewProposals() {
    const classes = useStyles()
    const [proposals, setProposals] = React.useState({
        original: null,
        filtered: null
    })
    const [errFetch, setErrFetch] = React.useState(false)

    const [openBackdrop, setOpenBackdrop] = React.useState(false)
    const backdropObj = {
        getter: openBackdrop,
        setter: setOpenBackdrop
    }

    const [proposalClicked, setProposalClicked] = React.useState(null)

    // search
    const [filterString, setFilterString] = React.useState('')
    const [searchString, setSearchString] = React.useState('')

    useEffect(()=>{
        let companiesList
        fetch('/api/companies').then(res=>{
            if (!res.ok) {
                throw new Error('Couldn\'t get companies\' data');
            }
            return res.json()
        }).then(companiesData => {
            if ('status' in companiesData) {
                throw new Error('Couldn\'t get companies\' data');
            } else {
                companiesList = companiesData.response
                return fetch('/api/collaboration_proposals')
            }
        }).then(res => {
            if (!res.ok) {
                throw new Error('Couldn\'t get proposals\' data');
            }
            return res.json()
        }).then(proposalsList => {
            if ('status' in proposalsList) {
                throw new Error('Couldn\'t get proposals\' data');
            } else {
                let tempProposalsList = proposalsList.response.map((proposal)=> {
                    let company = companiesList.find(company => company._id === proposal.companyID)
                    proposal.companyName = company.name
                    proposal.companySite = company.siteUrl
                    proposal.photo = company.photo
                    proposal.bio = company.bio
                    return proposal
                })
                setProposals({
                    original: tempProposalsList,
                    filtered: tempProposalsList
                })
            }
        }).catch((error) => {
            setErrFetch(true)
            console.log(error)
        });
    },[])

    return (
        <MuiThemeProvider theme={theme}>
            <Typography component="h1" variant={"h2"} style={{textAlign:'left',fontFamily: 'Rubik',fontWeight: 800, marginBottom: 30,color: '#1F75A6', margin:20}}>
                <Link to={'/'}>
                    Influence<span style={{color: '#A64B28'}}>Me</span>
                </Link>
            </Typography>
            <Grid container>
                <Grid item xs={4}/>
                <Grid item xs={6}>
                    <SearchField objList={{getter: proposals, setter: setProposals}} filterString={filterString}
                                 searchObj={{getter: searchString, setter: setSearchString}} urlType={'collaboration_proposals'}/>
                </Grid>
            </Grid>
            {proposals.original !== null && <FilteringCards display={'proposals'}
                                                            objList={{getter: proposals, setter: setProposals}}
                                                            backdrop={backdropObj} setClickedCard={setProposalClicked}
                                                            filterStringObj={{getter:filterString, setter: setFilterString}}
                                                            searchStringObj={{getter:searchString, setter: setSearchString}}/>
            }
            <BackDrop className={classes.backdrop} open={openBackdrop}>
                {proposalClicked !== null &&
                <FullInfoProposal backdrop={backdropObj} proposalObj={{getter: proposalClicked, setter: setProposalClicked}}/>}
            </BackDrop>
            { errFetch && <FetchError name={'proposals\''}/>}
            <Footer/>
        </MuiThemeProvider>
    )
}