import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import React from "react";
import PropTypes from 'prop-types'
import {calculateAge, TransitionZoom} from "../../utils";

FullInfoInfluencer.propTypes = {
    backdrop: PropTypes.exact({
        getter: PropTypes.bool,
        setter: PropTypes.func
    }).isRequired,
    influencerObj: PropTypes.object.isRequired
}

export default function FullInfoInfluencer({backdrop, influencerObj}) {
    // closes dialog
    function onClickCancelFinish() {
        backdrop.setter(false)
    }

    return(
        <Dialog
            open={backdrop.getter}
            TransitionComponent={TransitionZoom}
            keepMounted
            fullWidth
            scroll={'body'}
            onClose={onClickCancelFinish}
            maxWidth={'sm'}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="influencer-dialog-slide-title">
                <span style={{fontFamily:'Rubik', fontWeight:800, color: '#1F75A6', fontSize:'1.7em'}}>
                    {influencerObj.instagramUser} <small style={{fontSize:'0.4em', color: '#F27746'}}>
                    {influencerObj.firstName} {influencerObj.lastName}</small>
                </span>
            </DialogTitle>
            <DialogContent>
                {/*categories*/}
                <div style={{display:"flex",justifyContent: 'flex-start', fontSize: '1em', marginTop:-10}}>
                    {influencerObj.categories.map((category, i)=>(
                        i < influencerObj.categories.length - 1 ?
                            <React.Fragment key={i}>
                                <span>{category}</span>
                                <span style={{marginRight: 15, marginLeft: 15}}>•</span>
                            </React.Fragment>
                            :
                            <span key={i}>{category}</span>
                    ))}
                </div>
                {/*info about user*/}
                <h3 style={{color: '#A68617'}}>About Me</h3>
                {influencerObj.date !== '' &&
                    <p style={{marginBottom: 0}}>
                        Age: {calculateAge(influencerObj.date.substring(0,influencerObj.date.indexOf('T')))}
                    </p>
                }
                <p style={{marginTop:0}}>Number of followers: {influencerObj.followersAmount}</p>
                <p style={{whiteSpace: "pre-line"}}>{influencerObj.bio}</p>
                {/*contact info*/}
                <div style={{display:"flex", flexDirection: "column", alignItems:"center"}}>
                    You can send me emails to <span style={{textDecoration: "underline", userSelect: 'text',
                    msUserSelect: 'text'}}>{influencerObj.email}</span><br/>
                    {(influencerObj.phone !== '' && influencerObj.phone !== null) &&
                        <>
                            For any need please call to <span style={{textDecoration: "underline", userSelect: 'text',
                            msUserSelect: 'text'}}>{influencerObj.phone}</span><br/>
                        </>
                    }
                    {influencerObj.instagramUrl !== '' &&
                        <a target={'_blank'}
                           href={(new RegExp('^([a-z]+://|//)', 'i').test(influencerObj.instagramUrl) ?'':'//')
                           +influencerObj.instagramUrl} style={{userSelect: 'text', msUserSelect: 'text', color: "blue"}}>
                            Check out my instagram account
                        </a>
                    }
                </div>
            </DialogContent>
            <DialogActions>
                <Button variant={"contained"} color="primary" onClick={onClickCancelFinish}>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}