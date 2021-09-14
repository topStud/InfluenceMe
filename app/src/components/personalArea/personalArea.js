import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import MyDetailsInfluencer from "./myDetailsInfluencer";
import {Link, Route, Switch, useLocation} from "react-router-dom";
import {Avatar} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import BusinessIcon from '@material-ui/icons/Business';
import MyDetailsCompany from "./myDetailsComapny";
import Grid from "@material-ui/core/Grid";
import ChangePassword from "./ChangePassword";
import CurrentCollaborations from './currentCollaborations'

function TabPanel(props) {
    const { children, setValue, ...other } = props;

    return (
        <div
            role="tabpanel"
            {...other}
            style={{height: '100%', width: '100%'}}
        >
            <Box style={{marginLeft: 60, marginRight: 60, marginBottom: 40}}>
                <div>{children}</div>
            </Box>
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
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

PersonalArea.propTypes = {
    objData: PropTypes.object.isRequired,
    setObjData: PropTypes.func.isRequired
}

export default function PersonalArea({objData, setObjData}) {
    const classes = useStyles();
    const { pathname } = useLocation();
    const userType = pathname.split('/')[1]
    const [value, setValue] = React.useState(0);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <Grid container >
            <Grid item sm={1}/>
            <Grid item sm={10}>
                <div className={classes.root}>
                    <div style={{display: "flex", flexDirection: "column",marginLeft:20, width: 250}}>
                        <div style={{padding:10, marginBottom:5, width: '100%', display: "flex"}}>
                            {objData.photo !== null ?
                                <Avatar src={objData.photo} className={classes.small}/> :
                                userType === 'influencers' ?
                                    <AccountCircle style={{color: 'black'}} className={classes.small}/> :
                                    <BusinessIcon style={{color: 'black'}} className={classes.small}/>
                            }
                            <div style={{display: "flex", flexDirection: "column"}}>
                                <h1 style={{marginBottom:0, marginTop:10, marginLeft:10, fontSize:'1.5em'}}>Hello,</h1>
                                <h2 style={{marginTop:0, marginLeft:10, fontSize: '1em'}}>
                                    {userType === 'influencers' ? objData.firstName + ' ' + objData.lastName :
                                        objData.name}</h2>
                            </div>
                        </div>
                        <Tabs
                            orientation="vertical"
                            value={value}
                            aria-label="Vertical tabs example"
                            className={classes.tabs}
                        >
                            <Tab onClick={()=>handleChange(0)} style={{boxShadow: '1px 3px 5px #A68617', marginBottom:5, width: '100%'}} component={Link} to={`/${userType}/${objData._id}/personal/pastCollaborations`} label="Past Collaborations" {...a11yProps(0)} />
                            <Tab onClick={()=>handleChange(1)} style={{boxShadow: '1px 3px 5px #A68617', marginBottom:5, width: '100%'}} component={Link} to={`/${userType}/${objData._id}/personal/currentCollaborations`} label="Current Collaborations" {...a11yProps(1)} />
                            <Tab onClick={()=>handleChange(2)} style={{boxShadow: '1px 3px 5px #A68617', marginBottom:5, width: '100%'}} component={Link} to={`/${userType}/${objData._id}/personal/myDetails`} label="My Details" {...a11yProps(2)} />
                            <Tab onClick={()=>handleChange(3)} style={{boxShadow: '1px 3px 5px #A68617', marginBottom:5, width: '100%'}} component={Link} to={`/${userType}/${objData._id}/personal/changePassword`} label="Change Password" {...a11yProps(3)} />
                            <Tab onClick={()=>handleChange(4)} style={{boxShadow: '1px 3px 5px #A68617', marginBottom:5, width: '100%'}} component={Link} to={`/${userType}/${objData._id}/personal/logOut`} label="Log out" {...a11yProps(4)} />
                        </Tabs>
                    </div>
                    <Switch>
                        <Route path={`/${userType}/${objData._id}/personal/myDetails`}>
                            <TabPanel>
                                {userType === 'influencers' ?
                                    <MyDetailsInfluencer influencerData={objData} setInfluencerData={setObjData} setValue={setValue} index={2}/> :
                                    <MyDetailsCompany companyData={objData} setCompanyData={setObjData} setValue={setValue} index={2}/>
                                }
                            </TabPanel>
                        </Route>
                        <Route path={`/${userType}/${objData._id}/personal/pastCollaborations`}>
                            <TabPanel>
                                Item One
                            </TabPanel>
                        </Route>
                        <Route path={`/${userType}/${objData._id}/personal/currentCollaborations`}>
                            <TabPanel>
                                <CurrentCollaborations setValue={setValue} index={3}/>
                            </TabPanel>
                        </Route>
                        <Route path={`/${userType}/${objData._id}/personal/changePassword`}>
                            <TabPanel>
                                <ChangePassword userType={userType} infoObj={objData} setValue={setValue} index={3}/>
                            </TabPanel>
                        </Route>
                        <Route path={`/${userType}/${objData._id}/personal/logOut`}>
                            <TabPanel>
                                Item Five
                            </TabPanel>
                        </Route>
                    </Switch>
                </div>
            </Grid>
            <Grid item sm={1}/>
        </Grid>
    );
}