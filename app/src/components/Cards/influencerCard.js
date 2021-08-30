import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {Avatar} from "@material-ui/core";
import BackDrop from '@material-ui/core/Backdrop';
import AccountCircle from "@material-ui/icons/AccountCircle";

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

export default function InfluencerCard(props) {
    const classes = useStyles();
    const [openBackDrop, setOpenBackDrop] = React.useState(false);
    const infoObj = props.infoObj

    return (
        <>
            <Card className={classes.root}>
                <CardHeader
                    avatar={
                        infoObj.photo !== null ?
                        <Avatar src={infoObj.photo} alt={infoObj.className} className={classes.big}/> : <AccountCircle style={{color: 'black'}} className={classes.big}/>
                    }
                    title={infoObj.followersAmount}
                    subheader={infoObj.instagramUser}
                    subheaderTypographyProps={{style:{fontSize:'1em', fontFamily: 'Rubik', fontWeight: 200}}}
                    titleTypographyProps={{style:{fontSize:'1.2em', fontFamily: 'Rubik', fontWeight: 500, color: '#1F75A6'}}}
                />
                <CardContent style={{paddingTop:5, paddingBottom:10}}>
                    <Typography variant="body2" color="textSecondary" component="p" style={{height:70}}>
                        {infoObj.bio.substring(0,150)}
                        {infoObj.bio.length > 100 ? '...' : ''}
                    </Typography>
                    <div style={{marginTop:20, display:"flex",justifyContent: 'center', flexWrap: 'wrap', color: '#A68617', alignItems: "center", fontSize: '0.8em'}}>
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
            </Card>
            <BackDrop className={classes.backdrop} open={openBackDrop}>
                {/*<ConfirmationDialog popupObj={popupConfirmationObj} setCallServer={props.options.setCallServer} setDeleteProposal={props.options.setDeleteProposal}/>*/}
            </BackDrop>
        </>
    )
}
