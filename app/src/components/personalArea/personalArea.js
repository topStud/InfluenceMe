import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import MyDetailsInfluencer from "./myDetailsInfluencer";
import {Link, Route, Switch, useLocation} from "react-router-dom";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import {Avatar} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import BusinessIcon from '@material-ui/icons/Business';
import MyDetailsCompany from "./myDetailsComapny";
import Grid from "@material-ui/core/Grid";
import ChangePassword from "./ChangePassword";
import CurrentCollaborations from './currentCollaborations'
import PastCollaborations from "./pastCollaborations";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from "@material-ui/icons/Person";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import DisableAccount from "./disableAccount";
import Badge from "@mui/material/Badge";
import SwitchLeftRoundedIcon from '@mui/icons-material/SwitchLeftRounded';

function TabPanel(props) {
    const { children, ...other } = props;

    return (
        <div
            role="tabpanel"
            {...other}
            style={{height: 'inherit', width: '100%'}}
        >
            <Box style={{marginLeft: 60, marginRight: 60, marginBottom: 40, height:'100%'}}>
                <div style={{height: '100%'}}>{children}</div>
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
        minWidth: '264px',
        height: "340px",
    },
    small: {
        width: theme.spacing(12),
        height: theme.spacing(12),
    },
    iconLabelWrapper: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: 'center'
    },
    icon: {
        marginBottom:0,
        marginRight:10
    },
    tabStyle: {
        boxShadow: '1px 3px 5px #A68617',
        marginBottom:5,
        width: '100%',
        minHeight: '50px',
    }
}));

PersonalArea.propTypes = {
    objData: PropTypes.object.isRequired,
    setObjData: PropTypes.func.isRequired
}

export default function PersonalArea({objData, setObjData}) {
    const classes = useStyles();

    // gets user type of url - influencers/companies
    const { pathname } = useLocation();
    const userType = pathname.split('/')[1]

    // value of current tab
    const [value, setValue] = React.useState(0);

    // handles current tab change
    const handleChange = (newValue) => {
        setValue(newValue);
    };

    return (
        <Grid container >
            <Grid item sm={1}/>
            <Grid item sm={10}>
                <div className={classes.root}>
                    <div style={{display: "flex", flexDirection: "column",marginLeft:20, width: 300}}>
                        {/*picture of user with a greeting*/}
                        <div style={{padding:10, marginBottom:5, width: '100%', display: "flex"}}>
                            {objData.photo !== null ?
                                <Avatar src={objData.photo} className={classes.small}/> :
                                userType === 'influencers' ?
                                    <AccountCircle style={{color: 'black'}} className={classes.small}/> :
                                    <BusinessIcon style={{color: 'black'}} className={classes.small}/>
                            }
                            <div style={{height: '100%', display: "flex", alignItems: "flex-end", marginLeft: -20}}>
                                <Badge
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    style={{backgroundColor: objData.disabled ? '#c4c4c4' : '#7dca7d', width:25,
                                        height:25, borderRadius: '50%'}}
                                    badgeContent=" "
                                >
                                </Badge>
                            </div>
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
                            <Tab icon={<AccessTimeIcon fontSize={'small'} className={classes.icon}/>}
                                 classes={{wrapper: classes.iconLabelWrapper}} onClick={()=>handleChange(0)}
                                 className={classes.tabStyle} component={Link}
                                 to={`/${userType}/${objData._id}/personal/pastCollaborations`}
                                 label="Past Collaborations" {...a11yProps(0)} />
                            <Tab icon={<img src="https://img.icons8.com/ios-glyphs/480/handshake.png"
                                            alt="InfluenceMe Logo" width={20} height={20} className={classes.icon}/>}
                                 classes={{wrapper: classes.iconLabelWrapper}} onClick={()=>handleChange(1)}
                                 className={classes.tabStyle} component={Link}
                                 to={`/${userType}/${objData._id}/personal/currentCollaborations`}
                                 label="My Collaborations" {...a11yProps(1)} />
                            <Tab icon={<PersonIcon fontSize={'small'} className={classes.icon}/>}
                                 classes={{wrapper: classes.iconLabelWrapper}} onClick={()=>handleChange(2)}
                                 className={classes.tabStyle} component={Link}
                                 to={`/${userType}/${objData._id}/personal/myDetails`}
                                 label="My Details" {...a11yProps(2)} />
                            <Tab icon={<LockOutlinedIcon fontSize={'small'} className={classes.icon}/>}
                                 classes={{wrapper: classes.iconLabelWrapper}} onClick={()=>handleChange(3)}
                                 className={classes.tabStyle} component={Link}
                                 to={`/${userType}/${objData._id}/personal/changePassword`} label="Change Password"
                                 {...a11yProps(3)} />
                            <Tab icon={<SwitchLeftRoundedIcon fontSize={'small'} className={classes.icon}/>}
                                 classes={{wrapper: classes.iconLabelWrapper}} onClick={()=>handleChange(4)}
                                 className={classes.tabStyle} component={Link}
                                 to={`/${userType}/${objData._id}/personal/disable`} label="Disable account"
                                 {...a11yProps(4)} />
                            <Tab icon={<ExitToAppIcon fontSize={'small'} className={classes.icon}/>}
                                 classes={{wrapper: classes.iconLabelWrapper}} onClick={()=>handleChange(5)}
                                 className={classes.tabStyle} component={Link}
                                 to={`/`} label="Sign out" {...a11yProps(5)} />
                        </Tabs>
                    </div>
                    <Switch>
                        <Route path={`/${userType}/${objData._id}/personal/myDetails`}>
                            <TabPanel>
                                {userType === 'influencers' ?
                                    <MyDetailsInfluencer influencerData={objData} setInfluencerData={setObjData}
                                                         setValue={setValue} index={2}/> :
                                    <MyDetailsCompany companyData={objData} setCompanyData={setObjData}
                                                      setValue={setValue} index={2}/>
                                }
                            </TabPanel>
                        </Route>
                        <Route path={`/${userType}/${objData._id}/personal/pastCollaborations`}>
                            <TabPanel>
                                <PastCollaborations index={0} setValue={setValue} id={objData._id}/>
                            </TabPanel>
                        </Route>
                        <Route path={`/${userType}/${objData._id}/personal/currentCollaborations`}>
                            <TabPanel>
                                <CurrentCollaborations setValue={setValue} index={1} objData={{getter: objData,
                                    setter: setObjData}}/>
                            </TabPanel>
                        </Route>
                        <Route path={`/${userType}/${objData._id}/personal/changePassword`}>
                            <TabPanel>
                                <ChangePassword userType={userType} infoObj={objData}/>
                            </TabPanel>
                        </Route>
                        <Route path={`/${userType}/${objData._id}/personal/disable`}>
                            <TabPanel>
                                <DisableAccount userData={objData} setUserData={setObjData}/>
                            </TabPanel>
                        </Route>
                    </Switch>
                </div>
            </Grid>
            <Grid item sm={1}/>
        </Grid>
    );
}