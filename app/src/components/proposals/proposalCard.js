import React, {useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ConfirmationDialog from './confirmationDialog'
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import defaultCompanyLogo from '../../images/company_logo_default.jpg'
import {Avatar, Menu, MenuItem} from "@material-ui/core";
import GroupIcon from '@material-ui/icons/Group';
import BackDrop from '@material-ui/core/Backdrop';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        margin:20
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    media: {
        height: 150,
        paddingTop: '40%'
    },
    small: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

export default function ProposalCard(props) {
    const classes = useStyles();
    const [openBackDrop, setOpenBackDrop] = React.useState(false);
    const [openDialog, setOpenDialog] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const infoObj = props.infoObj

    const popupConfirmationObj = {
        openDialog: openDialog,
        setOpenDialog: setOpenDialog,
        setOpenBackDrop: setOpenBackDrop,
        nameOfProposal: props.infoObj.title,
        proposalId: infoObj._id
    }

    const handleOptionsClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    function handleDeleteClick() {
        setOpenBackDrop(true)
        setAnchorEl(null);
        setOpenDialog(true)
    }

    return (
        <>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        <Avatar src={defaultCompanyLogo} alt={infoObj.className} className={classes.small}/>
                    }
                    action={
                        <>
                            <IconButton aria-label="delete" onClick={handleOptionsClick}>
                                <MoreVertIcon/>
                            </IconButton>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                                <MenuItem onClick={handleClose}>Edit</MenuItem>
                                <MenuItem onClick={handleDeleteClick}>Delete</MenuItem>
                            </Menu>
                        </>
                    }
                    title={infoObj.title}
                    subheader={infoObj.companyName}
                    subheaderTypographyProps={{style:{fontSize:'0.7em', fontFamily: 'Rubik', fontWeight: 200}}}
                    titleTypographyProps={{style:{fontSize:'1em', fontFamily: 'Rubik', fontWeight: 500, color: '#1F75A6'}}}
                />
                <CardContent style={{paddingTop:0, marginTop:-30, paddingBottom:10}}>
                    <div style={{display:"flex", alignItems: "center", justifyContent: 'flex-end'}}>
                        <span style={{marginRight:5, fontSize:'0.8em'}}>0</span>
                        <GroupIcon fontSize={'small'}/>
                    </div>
                </CardContent>
                <CardContent style={{paddingTop:5, paddingBottom:10}}>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {infoObj.description.substring(0,150)}
                        {infoObj.description.length > 100 ? '...' : ''}
                    </Typography>
                    <div style={{marginTop:20, display:"flex",justifyContent: 'space-evenly', color: '#A68617'}}>
                        {infoObj.categories.map((category, i)=>(
                            i < infoObj.categories.length - 1 ?
                                <div key={i} style={{display:"flex", justifyContent: 'space-between', width:80}}>
                                    <span>{category}</span>
                                    <span>•</span>
                                </div>
                                :
                                <span key={i}>{category}</span>
                        ))}
                    </div>
                </CardContent>
            </Card>
            <BackDrop className={classes.backdrop} open={openBackDrop}>
                <ConfirmationDialog popupObj={popupConfirmationObj} setCallServer={props.setCallServer} setDeleteProposal={props.setDeleteProposal}/>
            </BackDrop>
        </>
    )
}
