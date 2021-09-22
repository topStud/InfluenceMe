import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import {Avatar, CardContent} from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PropTypes from "prop-types";
import PeopleIcon from '@material-ui/icons/People';
import {useLocation} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        width: 270,
        height: 240,
        marginTop:5,
        marginRight:20,
        display: "flex",
        flexDirection: "column"
    },
    big: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    collaborationsNumber: {
        paddingBottom:0,
        display: "flex",
        justifyContent: "flex-end",
        alignItems:"center"
    },
    header: {
        display: "flex",
        flexDirection:"column",
        textAlign: "center",
        alignItems: "center",
        justifyContent:"center",
        justifySelf: "center",
    },
    company: {
        paddingTop:0,
        marginTop: -20
    }
}));

GeneralCard.propTypes = {
    infoObj: PropTypes.object.isRequired,
    cardType: PropTypes.oneOf(['influencers', 'proposals'])
}

export default function GeneralCard({infoObj, cardType}) {
    const classes = useStyles();
    // gets user type from url
    const { pathname } = useLocation();
    const userType = pathname.split('/')[1]

    return (
        <Card className={classes.root}>
            {/*number of collaborations on specific proposal is shown to the company*/}
            {userType === 'companies' && cardType === 'proposals' && <CardContent className={classes.collaborationsNumber}>
                {infoObj.collaborationsNumber}
                <PeopleIcon style={{marginLeft: 7}}/>
            </CardContent>}
            <CardHeader
                avatar={
                    infoObj.photo !== null ?
                        <Avatar src={infoObj.photo} alt={infoObj.className} className={classes.big}/> :
                        <AccountCircle style={{color: 'black'}} className={classes.big}/>
                }
                className={`${classes.header} ${userType === 'companies' && cardType === 'proposals' ? classes.company : ''}`}
                title={cardType === 'proposals' ? infoObj.title : infoObj.instagramUser}
                subheader={cardType === 'proposals' ? infoObj.companyName: infoObj.followersAmount}
                subheaderTypographyProps={{style:{fontSize:'1em', fontFamily: 'Rubik', fontWeight: 200,
                        overflowWrap: "anywhere"}}}
                titleTypographyProps={{style:{fontSize:'1.2em', fontFamily: 'Rubik', fontWeight: 500, color: '#1F75A6',
                        overflowWrap: "anywhere"}}}
            />
        </Card>
    )
}
