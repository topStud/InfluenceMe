import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Chip from "@material-ui/core/Chip";
import {Link} from 'react-router-dom';
import {Avatar} from "@material-ui/core";
import BusinessIcon from '@material-ui/icons/Business';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {GetFilteredList} from "../utils";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
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

export default function PrimarySearchAppBar({userType, data, filterString, setFilteredList, searchObj}) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [searchValue, setSearchValue] = React.useState('')
    const [callServerSearch, setCallServerSearch] = React.useState(false)
    const isMenuOpen = Boolean(anchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const onChangeSearchContent = (event) => {
        setSearchValue(event.target.value)
    }

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

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
            transitionDuration={700}
            open={isMenuOpen}
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
        <div className={classes.grow} style={{marginBottom: 20}}>
            <AppBar position="static">
                <Toolbar style={{backgroundColor: "white", boxShadow: '1px 5px 10px #A68617'}}>
                    <Link to={`/${userType}/${data._id}`}>
                        <Typography className={classes.title} component={'h2'} variant="h2" noWrap
                                    style={{fontFamily: 'Rubik', fontWeight:800, color:'#1F75A6',cursor: "pointer"}}>
                            Influence<span style={{color:'#F27746'}}>Me</span>
                        </Typography>
                    </Link>
                    <div className={classes.grow} />
                    <div className={classes.search}>
                        <InputBase
                            placeholder="Key words…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            value={searchValue}
                            onChange={onChangeSearchContent}
                            style={{color: '#1F75A6', border:'1px solid #F27746', backgroundColor:'rgba(242,119,70,0.05)', borderRadius: '20px'}}
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
                                <Chip label="My Proposals" clickable variant="outlined"
                                      style={{color: "black", fontFamily: 'Rubik', fontWeight: 300, fontSize:'1.1em', border:'1px solid transparent'}}/>
                            </Link>
                        }
                        <IconButton aria-label="show 17 new notifications" color="inherit" style={{height: '80%', alignSelf:"center"}}>
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon style={{color: 'black'}}/>
                            </Badge>
                        </IconButton>
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
                                 filterString={filterString+' '+searchObj.getter} setFilteredList={setFilteredList}/>
            </AppBar>
            {renderMenu}
        </div>
    );
}
