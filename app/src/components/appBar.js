import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Chip from "@material-ui/core/Chip";
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import PersonIcon from '@mui/icons-material/Person';
import {Link, useLocation} from 'react-router-dom';
import {Avatar, Snackbar} from "@material-ui/core";
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import BusinessIcon from '@material-ui/icons/Business';
import SearchField from './InputComponents/searchField'
import Notification from "./notifications/Notification";
import {Alert} from "@material-ui/lab";
import PropTypes from 'prop-types'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import Badge from '@mui/material/Badge';

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    root: {
        zIndex: theme.zIndex.drawer,
    },
    title: {
        display: 'block',
    },
    menuItem: {
        fontFamily: 'Rubik',
        fontWeight: 100,
        paddingLeft:20,
        paddingTop:2,
        paddingRight:8,
    },
    sectionDesktop: {
        marginRight: '5%',
        display: 'flex',
    },
    small: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
}));

PrimarySearchAppBar.propsType = {
    data: PropTypes.object.isRequired,
    filtersString: PropTypes.exact({
        proposals: PropTypes.object,
        influencers: PropTypes.object
    }).isRequired,
    searchesString: PropTypes.exact({
        proposals: PropTypes.object,
        influencers: PropTypes.object
    }).isRequired,
    itemsLists: PropTypes.exact({
        proposals: PropTypes.object,
        influencers: PropTypes.object
    }).isRequired
}

export default function PrimarySearchAppBar({data, filtersString, searchesString, itemsLists, setData}) {
    const classes = useStyles();
    // get user type by url - influencers/companies
    const { pathname } = useLocation();
    const userType = pathname.split('/')[1]
    // checks when search bar should appear
    const isSearch = pathname.split('/').length < 4 || pathname.split('/')[3] === 'proposals'
    // anchor for menu
    const [anchorEl, setAnchorEl] = React.useState(null);
    const isMenuOpen = Boolean(anchorEl);

    // notifications related
    const [errFetchNotifications, setErrFetchNotifications] = React.useState(false)
    const [notificationsList, setNotificationsList] = React.useState(null)
    const [unseen, setUnseen] = React.useState(data.unseenNotification)

    const [ listening, setListening ] = React.useState(false);

    // search related
    const proposalsOrInfluencers = (userType === 'companies' && pathname.split('/')[3] === 'proposals')
        || userType === 'influencers' ? 'collaboration_proposals' : 'influencers'
    const filterString = proposalsOrInfluencers === 'influencers' ? filtersString.influencers : filtersString.proposals
    const searchObj = proposalsOrInfluencers === 'influencers' ? searchesString.influencers : searchesString.proposals
    const currentList = proposalsOrInfluencers === 'influencers' ? itemsLists.influencers : itemsLists.proposals

    useEffect(()=> {
        // gets all notifications of user
        fetch(`/api/notifications/${data._id}`).then(res => {
            if (!res.ok) {
                throw new Error('Couldn\'t get user\'s notifications');
            }
            return res.json()
        }).then(notificationsData => {
            if ('status' in notificationsData) {
                throw new Error('Couldn\'t get user\'s notifications');
            } else {
                setNotificationsList(notificationsData.response)
            }
        }).catch((error) => {
            setErrFetchNotifications(true)
            console.log(error)
        });
    },[])

    useEffect(()=>{
        if(!listening) {
            const events = new EventSource(`http://localhost:5000/api/sse/events/${data._id}`);
            events.onmessage = (event) => {
                const parsedData = JSON.parse(event.data);
                if (parsedData.receiverID === data._id) {
                    setNotificationsList((notifications) => [parsedData,...notifications]);
                    setUnseen(prev=>prev+1)
                }
            };
            events.onerror = () => {
                console.log("An error occurred while attempting to connect.");
            };

            setListening(true);
        }
    }, [listening, notificationsList])

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleCloseSnackbar = () => {
        setErrFetchNotifications(false)
    }

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            getContentAnchorEl={null}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            transitionDuration={200}
            open={isMenuOpen}
            disableScrollLock={true}
            style={{position: 'fixed'}}
            onClose={handleMenuClose}
        >
            <Typography style={{marginLeft:10, marginBottom:10}}>
                Hi, <strong>{userType === 'influencers'? data.firstName : data.name}</strong>
            </Typography>
            <Link to={`/${userType}/${data._id}/personal/pastCollaborations`}>
                <MenuItem onClick={handleMenuClose} className={classes.menuItem}>
                    <ListItemIcon style={{minWidth: 30}}>
                        <AccessTimeIcon fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText>
                        Past Collaborations
                    </ListItemText>
                </MenuItem>
            </Link>
            <Link to={`/${userType}/${data._id}/personal/currentCollaborations`}>
                <MenuItem onClick={handleMenuClose} className={classes.menuItem}>
                    <ListItemIcon style={{minWidth: 30}}>
                        <img style={{filter: 'opacity(0.54)'}} src="https://img.icons8.com/ios-glyphs/480/handshake.png"
                             alt="InfluenceMe Logo" width={20} height={20} />
                    </ListItemIcon>
                    <ListItemText>
                        My Collaborations
                    </ListItemText>
                </MenuItem>
            </Link>
            <Link to={`/${userType}/${data._id}/personal/myDetails`}>
                <MenuItem onClick={handleMenuClose} className={classes.menuItem}>
                    <ListItemIcon style={{minWidth: 30}}>
                        <PersonIcon fontSize={"small"}/>
                    </ListItemIcon>
                    <ListItemText>
                        My Details
                    </ListItemText>
                </MenuItem>
            </Link>
            <Link to={`/`}>
                <MenuItem onClick={handleMenuClose} className={classes.menuItem}>
                    <ListItemIcon style={{minWidth: 30}}>
                        <ExitToAppIcon fontSize={'small'}/>
                    </ListItemIcon>
                    <ListItemText>
                        Sign Out
                    </ListItemText>
                </MenuItem>
            </Link>
        </Menu>
    );

    return (
        <div className={` ${classes.root}`} style={{marginBottom: 20, position:"sticky", top:0}}>
            <AppBar position="relative" style={{boxShadow: '0px 0px 0px transparent'}}>
                <Toolbar style={{backgroundColor: "white", borderBottom: '8px solid #F27746'}}>
                    <Link to={`/${userType}/${data._id}`} style={{marginLeft: '5%'}}>
                        <Typography className={classes.title} component={'h2'} variant="h2"
                                    style={{fontFamily: 'Rubik', fontWeight:800, color:'#1F75A6',cursor: "pointer",
                                        marginRight: 30}}>
                            Influence<span style={{color:'#F27746'}}>Me</span>
                        </Typography>
                    </Link>
                    <div className={classes.grow}/>
                    {isSearch && <SearchField searchObj={searchObj} filterString={filterString} objList={currentList}
                                                 urlType={proposalsOrInfluencers}/>}
                    <div className={classes.sectionDesktop} style={{height:'100%'}}>
                        {
                            userType === 'companies' &&
                            <Link to={`/companies/${data._id}/proposals`} style={{marginRight: 20, alignSelf: 'center'}}>
                                <Chip label="My Proposals" clickable variant="outlined" style={{color: "black",
                                    fontFamily: 'Rubik', fontWeight: 300, fontSize:'1.1em', border:'1px solid transparent'}}/>
                            </Link>
                        }
                        {notificationsList !== null &&
                        <Notification listItems={notificationsList} userType={userType}
                                      user={{getter: data, setter: setData}} unseen={unseen} setUnseen={setUnseen} setNotificationList={setNotificationsList}/>}
                        <div style={{display: "flex", flexDirection: "column"}}>
                            <IconButton
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                {
                                    data.photo !== null ?
                                        <Avatar src={data.photo} alt={'avatar of user'} className={classes.small}/> :
                                        userType === 'influencers' ? <AccountCircle style={{color: 'black'}}/> :
                                            <BusinessIcon style={{color: 'black'}}/>
                                }
                            </IconButton>
                            <div style={{width: '100%', display:"flex", justifyContent: "flex-end", marginTop:-20}}>
                                <Badge
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right',
                                    }}
                                    style={{backgroundColor: data.disabled ? '#c4c4c4' : '#7dca7d', width:15, height:15,
                                        borderRadius: '50%'}}
                                    badgeContent=" "
                                >
                                </Badge>
                            </div>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMenu}
            <Snackbar open={errFetchNotifications} autoHideDuration={6000} onClose={handleCloseSnackbar}
                      anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
                <Alert onClose={handleCloseSnackbar} severity={'error'} style={{fontSize:14, fontFamily:'Rubik'}}>
                    <div>Couldn't get notifications</div>
                </Alert>
            </Snackbar>
        </div>
    );
}
