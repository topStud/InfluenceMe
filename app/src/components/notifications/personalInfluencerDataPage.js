import {Avatar, Button, Divider} from "@material-ui/core";
import {useEffect} from "react";
import {AccountCircle} from "@material-ui/icons";
import {useParams} from "react-router-dom";
import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {calculateAge, FetchError} from "../../utils";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    photo: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
    header: {
        display: "flex",
        justifyContent: "space-evenly",
        marginBottom: 30
    },
    body: {
        textAlign: "center",
        marginBottom:30
    },
    contact: {
        display: "flex",
        flexDirection: "column",
        alignItems:"center",
        fontSize: '0.8em'
    },
    identity: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    mainTile: {
        fontSize: '2.5em',
        fontFamily: 'Rubik',
        fontWeight: 800,
        color: '#1F75A6'
    },
    subTitle: {
        fontSize: '1.5em',
        fontFamily: 'Rubik',
        fontWeight: 400,
        color: '#A68617'
    },
    divider: {
        backgroundColor:'#747474',
        width:1,
        height: '80%',
        alignSelf: "center",
        margin: '0px 5px',
    },
    selectable: {
        textDecoration: "underline",
        userSelect: 'text',
        msUserSelect: 'text'
    },
    contract: {
        display: "flex",
        justifyContent: 'flex-end',
        alignItems: "flex-start",
        paddingRight: '2%'
    }
}))

export default function PersonalInfluencerDataPage() {
    const {influencerId} = useParams()
    const classes = useStyles()
    const [errFetchInfluencerData, setErrFetchInfluencerData] = React.useState(false)
    const [influencerInfo, setInfluencerData] = React.useState(null)

    useEffect(()=>{
        fetch(`/api/influencers/${influencerId}`).then(res => {
            if (!res.ok) {
                throw new Error('Couldn\'t get influencer\'s data');
            }
            return res.json()
        }).then(influencerData => {
            if ('status' in influencerData) {
                throw new Error('Couldn\'t get influencer\'s data');
            } else {
                setInfluencerData(influencerData.response)
            }
        }).catch((error) => {
            setErrFetchInfluencerData(true)
            console.log(error)
        });
    },[])

    return (
        <div style={{display:"flex", flexDirection: "column", alignItems: 'center', width:'100%'}}>
            {influencerInfo !== null &&
            <Grid container>
                <Grid item xs={3}/>
                <Grid item xs={6}>
                    <div className={classes.header}>
                        {influencerInfo.photo !== null ? <Avatar src={influencerInfo.photo} className={classes.photo}/>
                            : <AccountCircle className={classes.photo}/>}
                        <div className={classes.identity}>
                            <Typography className={classes.mainTile}>
                                {influencerInfo.firstName} {influencerInfo.lastName}
                            </Typography>
                            <Typography className={classes.subTitle}>
                                {influencerInfo.instagramUser}
                            </Typography>
                            <div style={{display: "flex", color:'#747474'}}>
                                <Typography style={{fontSize:'0.8em'}}>
                                    Followers: {influencerInfo.followersAmount}
                                </Typography>
                                {influencerInfo.date !== undefined &&
                                <>
                                    <Divider orientation="vertical" className={classes.divider}/>
                                    <Typography style={{fontSize:'0.8em'}}>
                                        Age: {calculateAge(influencerInfo.date.substring(0,influencerInfo.date.indexOf('T')))}
                                    </Typography>
                                </>}
                            </div>
                        </div>
                    </div>
                    <div className={classes.body}>
                        {influencerInfo.bio}
                    </div>
                    <div className={classes.contact}>
                        My email address is
                        <span className={classes.selectable}>
                            {influencerInfo.email}
                        </span><br/>
                        {(influencerInfo.phone !== '' && influencerInfo.phone !== null) &&
                        <>
                            You may give me a call to
                            <span className={classes.selectable}>
                                {influencerInfo.phone}
                            </span><br/>
                        </>}
                        {influencerInfo.instagramUrl !== '' &&
                        <>
                            Check out my instagram account
                            <span className={classes.selectable}>
                                {influencerInfo.instagramUrl}
                            </span>
                        </>}
                    </div>
                </Grid>
                <Grid item xs={3} className={classes.contract}>
                    <Button variant={'contained'} color={"primary"}>Create Contract</Button>
                </Grid>
            </Grid>
            }
            {errFetchInfluencerData && <FetchError name={'influencer\'s'}/>}
        </div>
    )
}