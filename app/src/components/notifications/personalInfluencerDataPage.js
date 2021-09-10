import {Avatar} from "@material-ui/core";
import {useEffect} from "react";
import {AccountCircle} from "@material-ui/icons";
import {useParams} from "react-router-dom";
import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {Alert, AlertTitle} from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
    photo: {
        width: theme.spacing(20),
        height: theme.spacing(20),
    },
}))
export default function PersonalInfluencerDataPage() {
    const {influencerId} = useParams()
    const classes = useStyles()
    const [errFetchInfluencerData, setErrFetchInfluencerData] = React.useState(false)
    const [influencerInfo, setInfluencerData] = React.useState(null)

    useEffect(()=>{
        fetch(`/api/influencers/${influencerId}`).then(res => {
            if (!res.ok) {
                setErrFetchInfluencerData(true)
            }
            return res.json()
        }).then(influencerData => {
            if ('status' in influencerData) {
                setErrFetchInfluencerData(true)
            } else {
                setInfluencerData(influencerData.response)
            }
        })
    },[])

    return (
        <div style={{display:"flex", flexDirection: "column", alignItems: 'center', width:'100%'}}>
            {influencerInfo !== null &&
            <>
                {influencerInfo.photo !== null ? <Avatar src={influencerInfo.photo} className={classes.photo}/>
                    : <AccountCircle className={classes.photo}/>}

            </>
            }
            { errFetchInfluencerData &&
            <Alert severity="error" style={{margin:50, fontFamily: 'Rubik'}}>
                <AlertTitle><span style={{fontFamily: 'Rubik', fontSize: '1.2em'}}>Error</span></AlertTitle>
                Something went wrong, The Influencer's data couldn't be reached — <strong>try again!</strong>
            </Alert>
            }
        </div>

    )
}