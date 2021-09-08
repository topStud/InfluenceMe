import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CardsDisplay from "./cardsDisplay";
import {Accordion, AccordionDetails, AppBar} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Slider from '@material-ui/core/Slider';
import AccordionSummary from "@material-ui/core/AccordionSummary";
import {GetFilteredList} from "../../utils";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const drawerWidth = 240;

function valuetext(value) {
    if (value > 1000000) {
        return `${value/1000000}M`;
    } else if (value > 1000) {
        return `${value/1000}K`;
    } else {
        return `${value}`;
    }
}

function RangeSlider() {
    const [value, setValue] = React.useState([0, 100000000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div style={{width: "90%"}}>
            <Slider
                max={500000}
                value={value}
                onChange={handleChange}
                valueLabelDisplay={"auto"}
                aria-labelledby="range-slider"
                getAriaValueText={valuetext}
                valueLabelFormat={(value) =>{
                    if (value >= 1000) {
                        return `${Math.floor(value/1000)}K`;
                    } else {
                        return `${value}`;
                    }
                }}
            />
        </div>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
    accordion: {
        "&::before": {
            content: `''`,
            opacity: 0
        }
    },
    clearAll: {
        "&:hover": {
            textDecoration: 'underline',
        }
    }
}));

export default function PermanentDrawerRight({objList, display, backdrop, setClickedCard, filterStringObj, filteredListObj, searchStringObj}) {
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

    function onClickClearAll() {
        setChecked({
            Lifestyle: false,
            Travel: false,
            Games: false,
            Gadgets: false,
            Clothing: false,
            Beauty: false
        })
        filteredListObj.setter(objList)
    }

    function onClickClearSearchString() {
        searchStringObj.setter('')
        if (filterStringObj.getter !== '') {
            setCallServerFilter(true)
        } else {
            filteredListObj.setter(objList)
        }
    }

    useEffect(()=>{
        if (filterStringObj.getter === '' && searchStringObj.getter === '') {
            filteredListObj.setter(objList)
        } else {
            setCallServerFilter(true)
        }
    },[JSON.stringify(objList)])

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
            filteredListObj.setter(objList)
        } else {
            setCallServerFilter(true)
        }
    }

    return (
        <div className={classes.root}>
            <div
                className={classes.drawer}
                style={{position:"relative !important", paddingLeft: 10}}
            >
                <div className={classes.toolbar} style={{fontSize:'1.5em',fontWeight:400, display:"flex", alignItems: "flex-end"}}>
                    Categories
                </div>
                <Divider style={{marginTop: 5}} />
                <List style={{display: "flex", flexDirection:"column"}}>
                    {['Lifestyle', 'Travel', 'Games','Gadgets', 'Clothing', 'Beauty'].map((text) => (
                        <ListItem button key={text} style={{height: 40}} onClick={()=>onCategoryClick(text)}>
                            <ListItemText style={{textDecorationLine: checked[text] ? "underline" : 'none',
                                textDecorationColor: '#F27746', textDecorationThickness: '0.4em'}} primary={text} />
                        </ListItem>
                    ))}
                    <button onClick={onClickClearAll} className={classes.clearAll} style={{alignSelf:"flex-end", backgroundColor: "transparent", border: '1px solid transparent', cursor: "pointer"}}>clear all</button>
                </List>
                {display === 'influencers' &&
                    <>
                        <div className={classes.toolbar}>
                            <span style={{fontSize:'1.5em',fontWeight:400}}>Filtering</span>
                        </div>
                        <Divider style={{marginTop: 5}}/>
                        <Accordion className={classes.accordion} style={{boxShadow: '0px 0px 0px transparent', marginTop: 5}}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                Followers Amount
                            </AccordionSummary>
                            <AccordionDetails >
                                <RangeSlider/>
                            </AccordionDetails>
                        </Accordion>
                    </>
                }

            </div>
            <main className={classes.content}>
                {searchStringObj.getter !== '' &&
                <AppBar position={"relative"} style={{padding:0}}>
                    <Toolbar style={{display: "flex", justifyContent: "space-between"}}>
                        <Typography variant="h6" style={{padding:0}}>
                            You searched for: {searchStringObj.getter}
                        </Typography>
                        <button onClick={onClickClearSearchString} className={classes.clearAll} style={{backgroundColor: "transparent", border: '1px solid transparent', cursor: "pointer", alignSelf: "flex-end", fontSize: '0.9em', color: "white"}}>clear search text</button>
                    </Toolbar>
                </AppBar>
                }
                <CardsDisplay display={display} backdrop={backdrop} setClickedCard={setClickedCard} objList={filteredListObj.getter}/>
            </main>
            <GetFilteredList callServerObj={{getter: callServerFilter, setter: setCallServerFilter}} filterString={filterStringObj.getter + ' ' + searchStringObj.getter} setFilteredList={filteredListObj.setter}/>
        </div>
    );
}