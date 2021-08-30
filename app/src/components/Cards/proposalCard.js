import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import ConfirmationDialog from './confirmationDialog'
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import defaultCompanyLogo from '../../images/company_logo_default.jpg'
import {Avatar, CardActions, Menu, MenuItem} from "@material-ui/core";
import GroupIcon from '@material-ui/icons/Group';
import BackDrop from '@material-ui/core/Backdrop';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
        minHeight: 230,
        margin:20,
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
    big: {
        width: theme.spacing(8),
        height: theme.spacing(8),
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
                        <Avatar src={defaultCompanyLogo} alt={infoObj.className} className={classes.big}/>
                    }
                    action={
                        props.userType === 'companies' ? <>
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
                        </> : <></>
                    }
                    style={{height: 100}}
                    title={infoObj.title}
                    subheader={infoObj.companyName}
                    subheaderTypographyProps={{style:{fontSize:'1em', fontFamily: 'Rubik', fontWeight: 200}}}
                    titleTypographyProps={{style:{fontSize:'1.2em', fontFamily: 'Rubik', fontWeight: 500, color: '#1F75A6'}}}
                />
                {props.userType === 'companies' && <CardContent style={{paddingTop:0, marginTop:-30, paddingBottom:10}}>
                    <div style={{display:"flex", alignItems: "center", justifyContent: 'flex-end'}}>
                        <span style={{marginRight:5, fontSize:'0.8em'}}>0</span>
                        <GroupIcon fontSize={'small'}/>
                    </div>
                </CardContent>}
                <CardContent style={{paddingTop:5, paddingBottom:10}}>
                    <Typography variant="body2" color="textSecondary" component="p" style={{height:70}}>
                        {infoObj.description.substring(0,150)}
                        {infoObj.description.length > 100 ? '...' : ''}
                    </Typography>
                    <div style={{marginTop:20, display:"flex",justifyContent: 'center', flexWrap: 'wrap',
                        color: '#A68617', alignItems: "center", fontSize: '0.8em', height: 40}}>
                        {infoObj.categories.map((category, i)=>(
                            i < infoObj.categories.length - 1 ?
                                <div key={i} style={{display:"inline"}}>
                                    <span>{category}</span>
                                    <span style={{marginRight: 15, marginLeft: 15}}>•</span>
                                </div>
                                :
                                <span key={i}>{category}</span>
                        ))}
                    </div>
                </CardContent>
                {props.userType === 'influencers' ?
                    <CardActions style={{display: 'flex', justifyContent: 'flex-end', marginTop:-15}}>
                        <Button size="small" color={"secondary"}>Interested</Button>
                    </CardActions> : <></>
                }
            </Card>
            <BackDrop className={classes.backdrop} open={openBackDrop}>
                <ConfirmationDialog popupObj={popupConfirmationObj} setCallServer={props.options.setCallServer} setDeleteProposal={props.options.setDeleteProposal}/>
            </BackDrop>
        </>
    )
}
