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

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
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
    const [callServerFilter, setCallServerFilter] = React.useState(false)

    const [checked, setChecked] = React.useState({
        Lifestyle: false,
        Travel: false,
        Games: false,
        Gadgets: false,
        Clothing: false,
        Beauty: false
    })
    console.log(objList.getter.filtered)
    function onClickClearAll() {
        setChecked({
            Lifestyle: false,
            Travel: false,
            Games: false,
            Gadgets: false,
            Clothing: false,
            Beauty: false
        })
        objList.setter({
            ...objList.getter,
            filtered: objList.getter.original
        })
    }

    function onClickClearSearchString() {
        searchStringObj.setter('')
        if (filterStringObj.getter !== '') {
            setCallServerFilter(true)
        } else {
            objList.setter({
                ...objList.getter,
                filtered: objList.getter.original
            })
        }
    }

    useEffect(()=>{
        if (filterStringObj.getter === '' && searchStringObj.getter === '') {
            objList.setter({
                ...objList.getter,
                filtered: objList.getter.original
            })
        } else {
            setCallServerFilter(true)
        }
    },[JSON.stringify(objList.getter.original)])

    function onCategoryClick(text) {
        let searchString, chosenCategories
        if(checked[text]){
            setChecked({
                ...checked,
                [text]: false
            })
            chosenCategories = Object.keys(checked).filter(o=>o!==text).filter(function(k){return checked[k]}).map(String)
        } else {
            setChecked({
                ...checked,
                [text]: true
            })
            chosenCategories = Object.keys(checked).filter(function(k){return checked[k]}).map(String)
            chosenCategories.push(text)
        }
        searchString = chosenCategories.join('  ')
        filterStringObj.setter(searchString)
        if (searchString === '' && searchStringObj.getter === '') {
            objList.setter({
                ...objList.getter,
                filtered: objList.getter.original
            })
        } else {
            setCallServerFilter(true)
        }
    }

    return (
        <Grid container>
            <Grid item xs={1}/>
            <Grid item xs={10}>
                <div className={classes.root}>
                    <div
                        className={classes.drawer}
                        style={{position:"relative !important", paddingLeft: 10}}
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
                    <main className={classes.content}>
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
                        <CardsDisplay display={display} backdrop={backdrop} setClickedCard={setClickedCard} objList={objList.getter.filtered}/>
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