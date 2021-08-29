import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import MyDetailsInfluencer from "./myDetailsInfluencer";
import {Link, Route, Switch} from "react-router-dom";
import {Avatar} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";

function TabPanel(props) {
    const { children, setValue, ...other } = props;

    return (
        <div
            role="tabpanel"
            {...other}
            style={{height: '100%'}}
        >
            <Box style={{marginLeft: 60, marginRight: 60, marginBottom: 40}}>
                <div>{children}</div>
            </Box>
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    // setValue: PropTypes.func.isRequired
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
    },
    tabs: {
        minWidth: '250px',
        height: "285px",
    },
    small: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
    container: {
        boxShadow: '1px 5px 10px #A68617',
        padding:20
    },
}));

export default function PersonalArea({userType,influencerData,  img}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <div style={{display: "flex", flexDirection: "column", width: 250}}>
                <div style={{padding:10, boxShadow: '-5px 3px 5px #A68617', marginBottom:5, width: '100%', display: "flex"}}>
                    {img.getter !== null ? <Avatar src={img.getter} className={classes.small}/> : <AccountCircle style={{color: 'black'}} className={classes.small}/>}
                    <div style={{display: "flex", flexDirection: "column"}}>
                        <h1 style={{marginBottom:0, marginTop:10, marginLeft:10}}>Hello,</h1><h2 style={{marginTop:0, marginLeft:10}}>{influencerData.firstName} {influencerData.lastName}</h2>
                    </div>
                </div>
                <Tabs
                    orientation="vertical"
                    value={value}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                >
                    <Tab onClick={()=>handleChange(0)} style={{boxShadow: '1px 3px 5px #A68617', marginBottom:5, width: '100%'}} component={Link} to={`/${userType}/${influencerData._id}/personal/pastCollaborations`} label="Past Collaborations" {...a11yProps(0)} />
                    <Tab onClick={()=>handleChange(1)} style={{boxShadow: '1px 3px 5px #A68617', marginBottom:5, width: '100%'}} component={Link} to={`/${userType}/${influencerData._id}/personal/currentCollaborations`} label="Current Collaborations" {...a11yProps(1)} />
                    <Tab onClick={()=>handleChange(2)} style={{boxShadow: '1px 3px 5px #A68617', marginBottom:5, width: '100%'}} component={Link} to={`/${userType}/${influencerData._id}/personal/myDetails`} label="My Details" {...a11yProps(2)} />
                    <Tab onClick={()=>handleChange(3)} style={{boxShadow: '1px 3px 5px #A68617', marginBottom:5, width: '100%'}} component={Link} to={`/${userType}/${influencerData._id}/personal/myAccount`} label="My account" {...a11yProps(3)} />
                    <Tab onClick={()=>handleChange(4)} style={{boxShadow: '1px 3px 5px #A68617', marginBottom:5, width: '100%'}} component={Link} to={`/${userType}/${influencerData._id}/personal/logOut`} label="Log out" {...a11yProps(4)} />
                </Tabs>
            </div>
            <Switch>
                <Route path={`/${userType}/${influencerData._id}/personal/myDetails`}>
                    <TabPanel>
                        <MyDetailsInfluencer influencerData={influencerData} setValue={setValue} setImage={img.setter}/>
                    </TabPanel>
                </Route>
                <Route path={`/${userType}/${influencerData._id}/personal/pastCollaborations`}>
                    <TabPanel>
                        Item One
                    </TabPanel>
                </Route>
                <Route path={`/${userType}/${influencerData._id}/personal/currentCollaborations`}>
                    <TabPanel>
                        Item Two
                    </TabPanel>
                </Route>
                <Route path={`/${userType}/${influencerData._id}/personal/myAccount`}>
                    <TabPanel>
                        Item Four
                    </TabPanel>
                </Route>
                <Route path={`/${userType}/${influencerData._id}/personal/logOut`}>
                    <TabPanel>
                        Item Five
                    </TabPanel>
                </Route>
            </Switch>
        </div>
    );
}