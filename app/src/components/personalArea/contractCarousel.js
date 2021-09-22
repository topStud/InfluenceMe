import Carousel from "react-material-ui-carousel";
import {Divider} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Contract from "../notifications/contract";
import {useLocation} from "react-router-dom";
import Button from "@material-ui/core/Button";
import {AnswerOfServer} from "../../utils";
import PropTypes from 'prop-types'

const useStyles = makeStyles({
    carousel: {
        width: '100%'
    },
    actionButtons: {
        display: "flex",
        justifyContent: "center",
        marginTop:30
    },
});

ContractCarousel.propTypes = {
    contracts: PropTypes.array.isRequired,
    type: PropTypes.oneOf(['pending', 'exists']).isRequired,
    objData: PropTypes.exact({
        getter: PropTypes.object,
        setter: PropTypes.func
    }).isRequired
}

export default function ContractCarousel({contracts, type, objData}) {
    const classes = useStyles()

    // gets user type from url - influencers/companies
    const { pathname } = useLocation();
    const userType = pathname.split('/')[1]

    // related to server and influencer's decision
    const [answerOfInfluencer, setAnswerOfInfluencer] = React.useState('')
    const [callServer, setCallServer] = React.useState(false)
    const [serverUpdatedSuccessfully, setServerUpdatedSuccessfully] = React.useState(false)

    // calls server to decline the contract
    const onClickDecline = () => {
        setAnswerOfInfluencer('decline')
        setCallServer(true)
    }

    // calls server to accept the contract
    const onClickAccept = () => {
        setAnswerOfInfluencer('accept')
        setCallServer(true)
    }

    return (
        <Carousel className={classes.carousel} autoPlay={false}>
            {
                contracts.map( (item) =>
                    <div key={item}>
                        <Contract contractInfo={item}/>
                        {/*if the user is an influencer, and watched the pending contracts, he may accept/decline the contract.*/}
                        {type === 'pending' && userType === 'influencers' && !serverUpdatedSuccessfully &&
                            <div className={classes.actionButtons}>
                                <Button onClick={onClickDecline}>
                                    Decline
                                </Button>
                                <Button onClick={onClickAccept} variant={"contained"} color={"primary"}
                                        style={{marginLeft:10}}>
                                    Accept
                                </Button>
                            </div>
                        }
                        {/*shows success message to influencer*/}
                        {serverUpdatedSuccessfully &&
                            <div style={{display:"flex", marginTop: 20, alignItems: "center"}}>
                                <Divider style={{width:'20%', paddingRight:10}}/>
                                <p style={{textAlign: "center", color: '#1F75A6', marginBottom:0, width: '60%',
                                    paddingLeft:10, paddingRight:10}}>
                                    {answerOfInfluencer === 'accept' ? `The collaboration between you and 
                                    ${item.companyName} was created Successfully!`: `You declined to collaborate with 
                                    ${item.companyName} with the current contract`}
                                </p>
                                <Divider style={{width:'20%', paddingLeft:10}}/>
                            </div>
                        }
                        {/*calls server when influencer chose to decline/accept*/}
                        {answerOfInfluencer !== '' && <AnswerOfServer failMsg={"Couldn't notify the company"}
                                                                      methodObj={{method: 'POST', headers:
                                {'Accept': 'application/json', 'Content-type': 'application/json'},
                            body: JSON.stringify({itemID: item._id, itemName: item.title,
                                receiverID: item.companyID, senderID: objData.getter._id,
                                senderName: item.influencerName, photo: objData.getter.photo,
                                messageType: answerOfInfluencer === 'decline' ? 4 : 3})}} sucMsg={''}
                                url={`/api/notifications`} callServerObj={{getter: callServer, setter: setCallServer}}
                                sucFunc={()=>{
                                  setServerUpdatedSuccessfully(true)
                                  objData.setter({
                                      ...objData.getter,
                                      currentContracts: [...objData.getter.currentContracts, item._id]
                                  })
                              }}/>}
                    </div>
                )
            }
        </Carousel>
    )
}
