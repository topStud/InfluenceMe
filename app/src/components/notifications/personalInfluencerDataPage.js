import {Avatar, Button, Divider} from "@material-ui/core";
import {useEffect} from "react";
import {AccountCircle} from "@material-ui/icons";
import {useLocation, useParams} from "react-router-dom";
import React from 'react'
import {makeStyles} from "@material-ui/core/styles";
import {AnswerOfServer, calculateAge, FetchError, parseJwt} from "../../utils";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import CreateContractDialog from "./createContract";

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
        marginBottom:30,
        whiteSpace: "pre-line"
    },
    contact: {
        display: "flex",
        flexDirection: "column",
        alignItems:"center",
        fontSize: '0.8em',
        marginTop: 70,
    },
    identity: {
        marginLeft: 30,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center"
    },
    mainTitle: {
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
        justifyContent: 'center',
        marginTop: 50,
        alignItems: "flex-start",
        paddingRight: '2%'
    },
    container: {
        boxShadow: '1px 10px 10px gray',
        backgroundColor: 'white',
        padding: 30
    }
}))

export default function PersonalInfluencerDataPage({company}) {
    // gets id of proposal from url
    const { search } = useLocation();
    const match = search.match(/id=(.*)/);
    const itemID = match?.[1];

    // gets id of influencer from url
    const {influencerId} = useParams()

    const classes = useStyles()
    // related to data fetch
    const [errFetchData, setErrFetchData] = React.useState(false)
    const [influencerData, setInfluencerData] = React.useState(null)

    // when true, calls to server
    const [callServerCreateContract, setCallServerCreateContract] = React.useState(false)
    const [callServerSendNotification, setCallServerSendNotification] = React.useState(false)

    // when true dialog window opens
    const [contractBackdrop, setContractBackdrop] = React.useState(false)
    // saves the id of the created contract - knows to send notification when id exists.
    const [createdContractID, setCreatedContractID] = React.useState('')

    // values for creating a new contract
    const [contractValues, setContractValues] = React.useState({
        companyID: '',
        title: '',
        companyName: '',
        companyPhone: '',
        companyEmail: '',
        influencerName: '',
        influencerPhone: '',
        influencerEmail: '',
        categories: [],
        details: '',
        payment: '',
        startDay: '',
        endDay: ''
    })
    const values = {
        getter: contractValues,
        setter: setContractValues
    }

    // fetches data of influencer and proposal
    useEffect(()=>{
        let influencer, proposal
        fetch(`/api/influencers/${influencerId}`).then(res => {
            if (!res.ok) {
                throw new Error('Couldn\'t get influencer\'s data');
            }
            return res.json()
        }).then(influencerInfo => {
            if ('status' in influencerInfo) {
                throw new Error('Couldn\'t get influencer\'s data');
            } else {
                influencer = influencerInfo.response
                setInfluencerData(influencer)
                return fetch(`/api/collaboration_proposals/${itemID}`)
            }
        }).then(res => {
            if (!res.ok) {
                throw new Error('Couldn\'t get proposal\'s data');
            }
            return res.json()
        }).then(proposalInfo => {
            if ('status' in proposalInfo) {
                throw new Error('Couldn\'t get proposal\'s data');
            } else {
                proposal = proposalInfo.response
                setContractValues({
                    ...contractValues,
                    influencerName: influencer.firstName + ' ' + influencer.lastName,
                    influencerPhone: influencer.phone,
                    influencerEmail: influencer.email,
                    companyID: proposal.companyID,
                    companyName: company.name,
                    companyEmail: proposal.email === null ? '' : proposal.email,
                    companyPhone: proposal.phone === null ? '' : proposal.phone,
                    categories: proposal.categories,
                    title: proposal.title
                })
            }
        }).catch((error) => {
            setErrFetchData(true)
            console.log(error)
        });
    },[itemID, influencerId])

    function onClickCreate() {
        // opens create contract dialog
        setContractBackdrop(true)
    }

    return (
        <div style={{display:"flex", flexDirection: "column", alignItems: 'center', width:'100%'}}>
            {influencerData !== null &&
            <Grid container>
                <Grid item xs={3}/>
                <Grid item xs={6} className={classes.container}>
                    <div className={classes.header}>
                        {influencerData.photo !== null ? <Avatar src={influencerData.photo} className={classes.photo}/>
                            : <AccountCircle className={classes.photo}/>}
                        <div className={classes.identity}>
                            <Typography className={classes.mainTitle}>
                                {influencerData.firstName} {influencerData.lastName}
                            </Typography>
                            <Typography className={classes.subTitle}>
                                {influencerData.instagramUser}
                            </Typography>
                            <div style={{display: "flex", color:'#747474'}}>
                                <Typography style={{fontSize:'0.9em'}}>
                                    Followers: {influencerData.followersAmount}
                                </Typography>
                                {influencerData.date !== '' &&
                                <>
                                    <Divider orientation="vertical" className={classes.divider}/>
                                    <Typography style={{fontSize:'0.9em'}}>
                                        Age: {calculateAge(influencerData.date.substring(0,influencerData.date.indexOf('T')))}
                                    </Typography>
                                </>}
                            </div>
                        </div>
                    </div>
                    <p className={classes.body}>
                        {influencerData.bio}
                    </p>
                    <div className={classes.contact}>
                        My email address is
                        <span className={classes.selectable}>
                            {influencerData.email}
                        </span><br/>
                        {(influencerData.phone !== '' && influencerData.phone !== null) &&
                        <>
                            You may give me a call to
                            <span className={classes.selectable}>
                                {influencerData.phone}
                            </span><br/>
                        </>}
                        {influencerData.instagramUrl !== '' &&
                        <>
                            Check out my instagram account
                            <span className={classes.selectable}>
                                {influencerData.instagramUrl}
                            </span>
                        </>}
                    </div>
                    <div className={classes.contract}>
                        <Button variant={'contained'} color={"primary"} onClick={onClickCreate}>Create Contract</Button>
                    </div>
                </Grid>
            </Grid>
            }
            {contractValues.title !== '' && <CreateContractDialog
                backdrop={{getter: contractBackdrop, setter: setContractBackdrop}}
                contractValues={values} setCallServer={setCallServerCreateContract}/>}
            <AnswerOfServer failMsg={"Couldn't save the contract"} methodObj={{method: 'POST',
                headers: {'Accept': 'application/json', 'Content-Type': 'application/json'},
                body: JSON.stringify({...contractValues})
            }}  sucMsg={''} url={`/api/contracts`}
                callServerObj={{getter: callServerCreateContract, setter: setCallServerCreateContract}}
                sucFunc={(response)=>{
                    setCallServerSendNotification(true)
                    setCreatedContractID(parseJwt(response.data).id)
                }}/>
            {createdContractID !== '' &&
            <AnswerOfServer failMsg={"Saved Contract but couldn't notify the influencer of the new contract"}
                            methodObj={{method: 'POST', headers: {'Accept': 'application/json',
                                    'Content-type': 'application/json'},
                                    body: JSON.stringify({itemID: createdContractID, itemName: contractValues.title,
                                        receiverID: influencerId, senderID: contractValues.companyID,
                                        senderName: contractValues.companyName, messageType: 2, photo: company.photo})}}
                            sucMsg={'Contract created successfully and sent to use'} url={`/api/notifications`}
                            callServerObj={{getter: callServerSendNotification, setter: setCallServerSendNotification}}
            />}
            {errFetchData && <FetchError name={''}/>}
        </div>
    )
}