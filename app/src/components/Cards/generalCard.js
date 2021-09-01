import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import {Avatar} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 250,
        height: 220,
        marginTop:5,
        marginRight:20,
        display: "flex",
        flexDirection: "column"
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
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff',
    },
}));

GeneralCard.propTypes = {
    infoObj: PropTypes.object.isRequired,
    cardType: PropTypes.oneOf(['influencers', 'proposals'])
}

export default function GeneralCard({infoObj, cardType}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    infoObj.photo !== null ?
                        <Avatar src={infoObj.photo} alt={infoObj.className} className={classes.big}/> : <AccountCircle style={{color: 'black'}} className={classes.big}/>
                }
                style={{display: "flex", flexDirection:"column", textAlign: "center", alignItems: "center", justifyContent:"center", justifySelf: "center"}}
                title={cardType === 'proposals' ? infoObj.title : infoObj.instagramUser}
                subheader={cardType === 'proposals' ? infoObj.companyName: infoObj.followersAmount}
                subheaderTypographyProps={{style:{fontSize:'1em', fontFamily: 'Rubik', fontWeight: 200}}}
                titleTypographyProps={{style:{fontSize:'1.2em', fontFamily: 'Rubik', fontWeight: 500, color: '#1F75A6'}}}
            />
        </Card>
    )
}
