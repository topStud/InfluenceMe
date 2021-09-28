import React, {useEffect} from 'react'
import {useLocation, useParams} from "react-router-dom";
import {AnswerOfServer, FetchError} from "../../utils";
import {makeStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import {Divider} from "@material-ui/core";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import Contract from "./contract";
import {Alert, AlertTitle} from "@material-ui/lab";

const useStyles = makeStyles(() => ({
    actionButtons: {
        display: "flex",
        justifyContent: "center",
        marginTop:30
    },
    container: {
        boxShadow: '1px 10px 10px gray',
        backgroundColor:"white",
        padding:30
    }
}));

ContractView.propTypes = {
    influencer: PropTypes.object
}

export default function ContractView({influencer}) {
    // gets contract id from url
    const {contractID} = useParams()
    const classes = useStyles()

    const { pathname } = useLocation();
    const userType = pathname.split('/')[1]

    // the answer can be accept / decline
    const [answerOfInfluencer, setAnswerOfInfluencer] = React.useState('')
    // related to server calling
    const [callServer, setCallServer] = React.useState(false)
    const [serverUpdatedSuccessfully, setServerUpdatedSuccessfully] = React.useState(false)

    // checks if user accepted the contract in the past
    const contractExists = influencer !== undefined ? influencer.currentContracts.includes(contractID) : null
    // if the contract was previously declined by the user - true
    const [contractDeleted, setContractDeleted] = React.useState(false)

    // related to fetching the contract's info
    const [contractInfo, setContractInfo] = React.useState(null)
    const [errFetch, setErrFetch] = React.useState(false)

    // fetch contract's info each time the contract id changes in url
    useEffect(()=> {
        setContractInfo(null)
        setErrFetch(false)
        setContractDeleted(false)
        fetch(`/api/contracts/${contractID}`).then(res => {
            if (!res.ok) {
                throw new Error("Couldn't get contract info")
            }
            return res.json()
        }).then(contractData => {
            if ('status' in contractData) {
                throw new Error("Couldn't get contract info")
            } else {
                let data = contractData.response
                // when null, contract does not exist
                if (data === null) {
                    setContractDeleted(true)
                } else {
                    setContractInfo(data)
                }
            }
        }).catch((error) => {
            setErrFetch(true)
            console.log(error)
        });
    },[contractID])

    // calls server to decline the contract
    const onClickDecline = () => {
        setAnswerOfInfluencer('decline')
        setCallServer(true)
    }

    // calls the server to accepts the contract
    const onClickAccept = () => {
        setAnswerOfInfluencer('accept')
        setCallServer(true)
    }

    return (
        <>
            {contractInfo !== null &&
                <>
                    <Grid container>
                        <Grid item xs={3}/>
                        <Grid item xs={6}>
                            <div className={classes.container}>
                                {/*The contract*/}
                                <Contract contractInfo={contractInfo}/>
                                {userType === 'influencers' && <>
                                    {/*Action buttons and messages to user*/}
                                    {answerOfInfluencer === 'accept' && serverUpdatedSuccessfully ?
                                        <div style={{display:"flex", flexDirection:"column", width:'100%'}}>
                                            <div className={classes.actionButtons}>
                                                <Link to={`/influencers/${influencer._id}`}>
                                                    <Button color={"primary"} style={{marginRight: 10}}>
                                                        Home Page
                                                    </Button>
                                                </Link>
                                                <Link to={`/influencers/${influencer._id}/personal/currentCollaborations`}>
                                                    <Button color={"primary"} variant={"contained"}>
                                                        My Collaborations
                                                    </Button>
                                                </Link>
                                            </div>
                                            <div style={{display:"flex", marginTop: 20, alignItems: "center"}}>
                                                <Divider style={{width:'20%', paddingRight:10}}/>
                                                <p style={{textAlign: "center", color: '#1F75A6', marginBottom:0,
                                                    width: '60%', paddingLeft:10, paddingRight:10}}>
                                                    The collaboration between you and {contractInfo.companyName} was created Successfully!
                                                </p>
                                                <Divider style={{width:'20%', paddingLeft:10}}/>
                                            </div>
                                        </div> : answerOfInfluencer === 'decline' && serverUpdatedSuccessfully ?
                                            <div style={{display:"flex", flexDirection:"column", width:'100%'}}>
                                                <div className={classes.actionButtons}>
                                                    <Link to={`/influencers/${influencer._id}`}>
                                                        <Button color={'primary'}>
                                                            Home Page
                                                        </Button>
                                                    </Link>
                                                </div>
                                                <div style={{display:"flex", marginTop: 20, alignItems: "center"}}>
                                                    <Divider style={{width:'20%', paddingRight:10}}/>
                                                    <p style={{textAlign: "center", color: '#1F75A6', marginBottom:0, width: '60%',
                                                        paddingLeft:10, paddingRight:10}}>
                                                        You declined to collaborate with {contractInfo.companyName} with the current contract
                                                    </p>
                                                    <Divider style={{width:'20%', paddingLeft:10}}/>
                                                </div>
                                            </div> : !contractExists ? <div className={classes.actionButtons}>
                                                    <Button onClick={onClickDecline}>
                                                        Decline
                                                    </Button>
                                                    <Button onClick={onClickAccept} variant={"contained"} color={"primary"}
                                                            style={{marginLeft:10}}>
                                                        Accept
                                                    </Button>
                                                </div>:
                                                <div style={{display:"flex", marginTop: 20, alignItems: "center"}}>
                                                    <Divider style={{width:'20%', paddingRight:10}}/>
                                                    <p style={{textAlign: "center", color: '#1F75A6', marginBottom:0, width: '60%',
                                                        paddingLeft:10, paddingRight:10}}>
                                                        The collaboration between you and {contractInfo.companyName} has already been created!
                                                    </p>
                                                    <Divider style={{width:'20%', paddingLeft:10}}/>
                                                </div>
                                    }
                                </>}
                            </div>
                        </Grid>
                    </Grid>
                    {/*sends notification*/}
                    {answerOfInfluencer !== '' &&
                    <AnswerOfServer failMsg={"Couldn't notify the company"} methodObj={{method: 'POST', headers:
                            {'Accept': 'application/json', 'Content-type': 'application/json'},
                        body: JSON.stringify({itemID: contractID, itemName: contractInfo.title,
                            receiverID: contractInfo.companyID, senderID: influencer._id,
                            senderName: contractInfo.influencerName, photo: influencer.photo,
                            messageType: answerOfInfluencer === 'decline' ? 4 : 3})}} sucMsg={''}
                                    url={`/api/notifications`} callServerObj={{getter: callServer, setter: setCallServer}}
                            sucFunc={()=>{
                                setServerUpdatedSuccessfully(true)
                    }}/>}
                </>}
            {/*A message shown to the user if contract does not exists*/}
            {contractDeleted && <Alert severity="error" style={{margin:50, fontFamily: 'Rubik'}}>
                <AlertTitle><span style={{fontFamily: 'Rubik', fontSize: '1.2em'}}>Error</span></AlertTitle>
                The contract you are looking for does not exist. Either you declined it, or never existed.
            </Alert>}
            { errFetch && <FetchError name={'contract\'s'}/>}
        </>
    )
}