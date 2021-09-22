import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CardsDisplay from "./cardsDisplay";
import {AppBar} from "@material-ui/core";
import {GetFilteredList} from "../../utils";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import PropTypes from 'prop-types'
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {useTheme} from "@mui/material";
import {useLocation} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: 240,
        flexShrink: 0,
    },
    toolbar: {
        fontSize:'1.5em',
        fontWeight:400,
        display:"flex",
        alignItems: "flex-end",
        justifyContent: "space-between",
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    clearAll: {
        "&:hover": {
            textDecoration: 'underline',
        },
        cursor: "pointer",
        backgroundColor: "transparent",
        border: '1px solid transparent',
        alignSelf: "flex-end"
    },
    formControl: {
        height: 50,
        minWidth: 120,
        display:"flex",
        flexDirection:'row!important',
        alignItems: "center",
        justifyContent:"flex-start",
        marginBottom:'15px!important'
    },
    select: {
        marginTop: '0 !important',
        width: 200
    }
}));

FilteringCards.propTypes = {
    display: PropTypes.oneOf(['proposals','influencers']).isRequired,
    backdrop: PropTypes.exact({
        getter: PropTypes.bool,
        setter: PropTypes.func
    }).isRequired,
    setClickedCard: PropTypes.func.isRequired,
    filterStringObj: PropTypes.exact({
        getter: PropTypes.string,
        setter: PropTypes.func
    }).isRequired,
    searchStringObj: PropTypes.exact({
        getter: PropTypes.string,
        setter: PropTypes.func
    }).isRequired,
    objList: PropTypes.exact({
        getter: PropTypes.object,
        setter: PropTypes.func
    }).isRequired
}

export default function FilteringCards({objList, display, backdrop, setClickedCard, filterStringObj, searchStringObj}) {
    const classes = useStyles();
    const theme = useTheme()

    // calls server for filtering content
    const [callServerFilter, setCallServerFilter] = React.useState(false)

    // related to sorting the content
    const [sortOption, setSortOption] = React.useState('')
    const [filteredWithoutSort, setFilteredWithoutSort] = React.useState([...objList.getter.filtered])

    // gets the type of page view/influencers/companies
    const { pathname } = useLocation();
    const type = pathname.split('/')[1]

    // tracking the categories that are checked and unchecked
    const [checked, setChecked] = React.useState({
        Lifestyle: false,
        Travel: false,
        Games: false,
        Gadgets: false,
        Clothing: false,
        Beauty: false
    })

    function onClickClearAll() {
        setChecked({
            Lifestyle: false,
            Travel: false,
            Games: false,
            Gadgets: false,
            Clothing: false,
            Beauty: false
        })
        filterStringObj.setter('')
        // sets filtered list to be the original list.
        if (searchStringObj.getter === '') {
            objList.setter({
                ...objList.getter,
                filtered: [...objList.getter.original]
            })
        } else  {
            setCallServerFilter(true)
        }
    }

    function onClickClearSearchString() {
        searchStringObj.setter('')
        // if some categories are marked, calls server for new filtered content
        if (filterStringObj.getter !== '') {
            setCallServerFilter(true)
        } else {
            // no categories checked and empty search string
            objList.setter({
                ...objList.getter,
                filtered: [...objList.getter.original]
            })
        }
        setSortOption('')
    }

    // every time the original list is bing modified (edit, addition, deletion), we want to update the filtered list
    useEffect(()=>{
        if (filterStringObj.getter === '' && searchStringObj.getter === '') {
            objList.setter({
                ...objList.getter,
                filtered: [...objList.getter.original]
            })
        } else {
            setCallServerFilter(true)
        }
    },[JSON.stringify(objList.getter.original)])

    function onCategoryClick(text) {
        let searchString, chosenCategories
        // checks if category is checked
        if(checked[text]){
            setChecked({
                ...checked,
                [text]: false
            })
            // removes it from the list of chosen categories
            chosenCategories = Object.keys(checked).filter(o=>o!==text).filter(function(k){return checked[k]}).map(String)
        } else {
            setChecked({
                ...checked,
                [text]: true
            })
            // adds the category to the list of chosen categories
            chosenCategories = Object.keys(checked).filter(function(k){return checked[k]}).map(String)
            chosenCategories.push(text)
        }
        searchString = chosenCategories.join('  ')
        filterStringObj.setter(searchString)
        // checks values to decide if to call server or not.
        if (searchString === '' && searchStringObj.getter === '') {
            objList.setter({
                ...objList.getter,
                filtered: [...objList.getter.original]
            })
        } else {
            setCallServerFilter(true)
        }
        setSortOption('')
    }

    // change in sort value
    const handleChange = (event) => {
        setSortOption(event.target.value);
        // the value is field in objects that are in objList
        let field = event.target.value
        // the sort is not none
        if (field !== '') {
            // saves the unsorted version in case the user will choose the option none.
            setFilteredWithoutSort([...objList.getter.filtered])
            objList.setter({
                ...objList.getter,
                filtered: objList.getter.filtered.sort((a,b)=>{
                    // sort for numeric values
                    if (field === 'followersAmount' || field === 'collaborationsNumber') {
                        if (a[field] === b[field]) {
                            return 0
                        } else if (a[field] > b[field]) {
                            return -1
                        } else {
                            return 1
                        }
                    } else {
                        // sort with strings
                        return a[field].localeCompare(b[field])
                    }
                })
            })
        } else {
            objList.setter({
                ...objList.getter,
                filtered: filteredWithoutSort
            })
        }
    };

    return (
        <Grid container>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <div className={classes.root}>
                    {/*categories section*/}
                    <div
                        className={classes.drawer}
                        style={{paddingLeft: 10, position: "sticky", top: type === 'view' ? 20:70, height: 300}}
                    >
                        <div className={classes.toolbar}>
                            Categories
                            <button onClick={onClickClearAll} className={classes.clearAll}>clear all</button>
                        </div>
                        <Divider style={{marginTop: 5}} />
                        <List style={{display: "flex", flexDirection:"column"}}>
                            {['Lifestyle', 'Travel', 'Games','Gadgets', 'Clothing', 'Beauty'].map((text) => (
                                <ListItem button key={text} style={{height: 40}} onClick={()=>onCategoryClick(text)}>
                                    <ListItemText style={{textDecorationLine: checked[text] ? "underline" : 'none',
                                        textDecorationColor: '#F27746', textDecorationThickness: '0.4em'}} primary={text} />
                                </ListItem>
                            ))}
                        </List>
                    </div>
                    {/*cards section with sort option and display of search string*/}
                    <main className={classes.content}>
                        {/*sort by*/}
                        <FormControl variant="standard" className={classes.formControl} style={{position: "sticky", top: type === 'view' ? 0 : 79.5, height:60, zIndex: theme.zIndex.drawer, backgroundColor: '#fafafa', width: '100%'}}>
                            <label style={{fontSize: '1.2em', width: 90}}>Sort By:</label>
                            <Select
                                value={sortOption}
                                onChange={handleChange}
                                displayEmpty
                                className={classes.select}
                                MenuProps={{
                                    anchorOrigin:{ vertical: 'bottom', horizontal: 'right' },
                                    transformOrigin:{ vertical: 'top', horizontal: 'right' }
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={display === 'influencers' ? 'followersAmount':type === 'companies'? 'collaborationsNumber':'companyName'}>
                                    {display === 'influencers' ? 'Followers Number' : type === 'companies' ? 'Collaborations Number':'Company Name'}
                                </MenuItem>
                                <MenuItem value={display === 'influencers' ? 'instagramUser':'title'}>
                                    {display === 'influencers' ? 'Instagram Username' : 'Title of Proposal'}
                                </MenuItem>

                            </Select>
                        </FormControl>
                        {/*search string display*/}
                        {searchStringObj.getter !== '' &&
                        <AppBar variant={"outlined"} position={"relative"} style={{padding:0,backgroundColor: "transparent", borderBottom:'3px solid #F27746'}}>
                            <Toolbar style={{display: "flex", justifyContent: "space-between"}}>
                                <Typography variant="h6" style={{padding:0, color: '#1F75A6'}}>
                                    You searched for: {searchStringObj.getter}
                                </Typography>
                                <button onClick={onClickClearSearchString} className={classes.clearAll} style={{fontSize: '0.9em', color: "#1F75A6"}}>clear search text</button>
                            </Toolbar>
                        </AppBar>
                        }
                        {/*cards display*/}
                        {objList.getter.filtered.length !== 0 ? <CardsDisplay display={display} backdrop={backdrop}
                                                                              setClickedCard={setClickedCard}
                                                                              objList={objList.getter.filtered}/> :
                            <div style={{display: "flex", justifyContent: "center", alignItems:"center", height: '100%'}}>
                                <Divider style={{width: '20%', backgroundColor: '#F27746'}}/>
                                <Typography style={{fontSize: '1em', padding:' 0px 10px', color: 'black'}}>No Results</Typography>
                                <Divider style={{width: '20%', backgroundColor: '#F27746'}}/>
                            </div>
                        }
                    </main>
                    <GetFilteredList cardType={display} callServerObj={{getter: callServerFilter, setter: setCallServerFilter}}
                                     filterString={filterStringObj.getter + ' ' + searchStringObj.getter} itemsList={objList}
                    url={getUrl(filterStringObj.getter, searchStringObj.getter, display)}/>
                </div>
            </Grid>
            <Grid item xs={1}/>
        </Grid>

    );
}

// setting url according to search string and filter string
function getUrl(filterStr, searchStr, cardType) {
    let url = '/api/'
    if (cardType === 'proposals') {
        url += 'collaboration_proposals/'
    } else {
        url += 'influencers/'
    }
    if (filterStr !== '' && searchStr !== '') {
        url += `search/${searchStr}/${filterStr}`
    } else if (filterStr !== '') {
        url += `search-categories/${filterStr}`
    } else {
        url += `search-bar/${searchStr}`
    }
    return url
}