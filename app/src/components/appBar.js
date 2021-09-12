import React, {useEffect} from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Chip from "@material-ui/core/Chip";
import {Link, useLocation} from 'react-router-dom';
import {Avatar, Snackbar} from "@material-ui/core";
import BusinessIcon from '@material-ui/icons/Business';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {GetFilteredList} from "../utils";
import Notification from "./notifications/Notification";
import {Alert} from "@material-ui/lab";
import PropTypes from 'prop-types'

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    root: {
        zIndex: theme.zIndex.drawer
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    menuItem: {
      fontFamily: 'Rubik',
      fontWeight: 100,
        paddingLeft:20,
        paddingTop:2,
        paddingRight:8,
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        marginLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    small: {
        width: theme.spacing(5),
        height: theme.spacing(5),
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    searchIcon: {
        padding: theme.spacing(1, 1),
        height: 'inherit',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
    },
    search: {
        position: 'relative',
        borderRadius: '20px',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha('#A64B28', 0.05),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
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

export default function PrimarySearchAppBar({data, filtersString, searchesString, itemsLists}) {
    const classes = useStyles();
    const { pathname } = useLocation();
    const userType = pathname.split('/')[1]
    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const [errFetchNotifications, setErrFetchNotifications] = React.useState(false)
    const [notificationsList, setNotificationsList] = React.useState(null)

    // search related
    const proposalsOrInfluencers = userType === 'companies' && pathname.split('/')[3] === 'proposals' ?
        'collaboration_proposals' : 'influencers'
    const filterString = proposalsOrInfluencers === 'influencers' ? filtersString.influencers : filtersString.proposals
    const searchObj = proposalsOrInfluencers === 'influencers' ? searchesString.influencers : searchesString.proposals
    const currentList = proposalsOrInfluencers === 'influencers' ? itemsLists.influencers : itemsLists.proposals
    const [searchValue, setSearchValue] = React.useState('')
    const [callServerSearch, setCallServerSearch] = React.useState(false)

    useEffect(()=> {
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

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const onChangeSearchContent = (event) => {
        setSearchValue(event.target.value)
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const onKeyDownSearchInput = (e) => {
        if (e.key === 'Enter') {
            onClickSearch()
        }
    }

    const handleCloseSnackbar = () => {
        setErrFetchNotifications(false)
    }

    function onClickSearch() {
        if (searchValue !== '') {
            setCallServerSearch(true)
            // nullifies search string (displayed to user)
            setSearchValue('')
        }
        // saves search value of user
        searchObj.setter(searchValue)
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
                Hi,<br/><strong>{userType === 'influencers'? data.firstName : data.name}</strong>
            </Typography>
            <Link to={`/${userType}/${data._id}/personal/pastCollaborations`}>
                <MenuItem onClick={handleMenuClose} className={classes.menuItem}>Past Collaborations</MenuItem>
            </Link>
            <Link to={`/${userType}/${data._id}/personal/currentCollaborations`}>
                <MenuItem onClick={handleMenuClose} className={classes.menuItem}>Current Collaborations</MenuItem>
            </Link>
            <Link to={`/${userType}/${data._id}/personal/myDetails`}>
                <MenuItem onClick={handleMenuClose} className={classes.menuItem}>My Details</MenuItem>
            </Link>
            <Link to={`/${userType}/${data._id}/personal/logOut`}>
                <MenuItem onClick={handleMenuClose} className={classes.menuItem}>Log Out</MenuItem>
            </Link>
        </Menu>
    );

    return (
        <div className={`${classes.grow} ${classes.root}`} style={{marginBottom: 20, position:"sticky", top:0}}>
            <AppBar position="relative">
                <Toolbar style={{backgroundColor: "white", borderBottom: '8px solid #F27746'}}>
                    <Link to={`/${userType}/${data._id}`}>
                        <Typography className={classes.title} component={'h2'} variant="h2" noWrap
                                    style={{fontFamily: 'Rubik', fontWeight:800, color:'#1F75A6',cursor: "pointer"}}>
                            Influence<span style={{color:'#F27746'}}>Me</span>
                        </Typography>
                    </Link>
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <InputBase
                            onKeyDown={onKeyDownSearchInput}
                            id={'search-field'}
                            placeholder="Key words…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            value={searchValue}
                            onChange={onChangeSearchContent}
                            style={{color: '#1F75A6', border:'1px solid #F27746',
                                backgroundColor:'rgba(242,119,70,0.05)', borderRadius: '20px'}}
                            inputProps={{ 'aria-label': 'search' }}
                            startAdornment={<IconButton onClick={onClickSearch} className={classes.searchIcon}>
                                <SearchIcon style={{color:'#F27746', height:20, width:20}}/>
                            </IconButton>}
                        />
                    </div>
                    <div className={classes.grow} />
                    <div className={classes.sectionDesktop}>
                        {
                            userType === 'companies' &&
                            <Link to={`/companies/${data._id}/proposals`} style={{marginRight: 20, alignSelf: 'center'}}>
                                <Chip label="My Proposals" clickable variant="outlined" style={{color: "black",
                                    fontFamily: 'Rubik', fontWeight: 300, fontSize:'1.1em', border:'1px solid transparent'}}/>
                            </Link>
                        }
                        {notificationsList !== null &&
                        <Notification listItems={notificationsList} id={data._id} userType={userType}
                                      unseen={data.unseenNotification}/>}
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
                    </div>
                </Toolbar>
                <GetFilteredList callServerObj={{getter: callServerSearch, setter: setCallServerSearch}}
                                 url={`/api/${proposalsOrInfluencers}/${filterString.getter !== '' ? 'search/' : 
                                     'search-bar/'}/${searchObj.getter}${filterString.getter !== '' ? 
                                     `/${filterString.getter}`:''}`} itemsList={currentList}/>
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
