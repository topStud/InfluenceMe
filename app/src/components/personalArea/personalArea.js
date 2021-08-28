import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import MyDetailsInfluencer from "./myDetailsInfluencer";
import {Link, Route, Switch, useRouteMatch} from "react-router-dom";

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
    container: {
        boxShadow: '1px 5px 10px #A68617',
        padding:20
    },
}));

export default function PersonalArea({userType,influencerData}) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
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
            <Switch>
                <Route path={`/${userType}/${influencerData._id}/personal/myDetails`}>
                    <TabPanel>
                        <MyDetailsInfluencer influencerData={influencerData} setValue={setValue}/>
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