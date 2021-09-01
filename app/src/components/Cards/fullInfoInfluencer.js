import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import {Zoom} from "@material-ui/core";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import React from "react";
import PropTypes from 'prop-types'
import {calculateAge} from "../../utils";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Zoom ref={ref} {...props} />;
});

FullInfoProposal.propTypes = {
    userType: PropTypes.oneOf(['influencers', 'companies'])
}

export default function FullInfoProposal({backdrop, influencerObj}) {
    function onClickCancelFinish() {
        backdrop.setter(false)
    }

    return(
        <Dialog
            open={backdrop.getter}
            TransitionComponent={Transition}
            keepMounted
            fullWidth
            maxWidth={'md'}
            aria-labelledby="alert-dialog-slide-title"
            aria-describedby="alert-dialog-slide-description"
        >
            <DialogTitle id="influencer-dialog-slide-title">
                <span style={{fontFamily:'Rubik', fontWeight:800, color: '#1F75A6', fontSize:'1.7em'}}>
                    {influencerObj.instagramUser} <small style={{fontSize:'0.5em', color: '#F27746'}}>({influencerObj.firstName} {influencerObj.lastName})</small>
                </span>
            </DialogTitle>
            <DialogContent>
                <div style={{display:"flex",justifyContent: 'flex-start', fontSize: '1em', marginTop:-10}}>
                    {influencerObj.categories.map((category, i)=>(
                        i < influencerObj.categories.length - 1 ?
                            <div key={i} style={{display:"inline"}}>
                                <span>{category}</span>
                                <span style={{marginRight: 15, marginLeft: 15}}>•</span>
                            </div>
                            :
                            <span key={i}>{category}</span>
                    ))}
                </div>
                <h3 style={{color: '#A68617'}}>About Me</h3>
                {influencerObj.date !== undefined && <p>Age: {calculateAge(influencerObj.date.substring(0,influencerObj.date.indexOf('T')))}</p>}
                <p>Number of followers: {influencerObj.followersAmount}</p>
                <p style={{whiteSpace: "pre-line"}}>{influencerObj.bio}</p>
                <div style={{display:"flex", flexDirection: "column", alignItems:"center"}}>
                    {influencerObj.email !== null &&
                    <>
                        You can send me emails to <span style={{textDecoration: "underline", userSelect: 'text', msUserSelect: 'text'}}>{influencerObj.email}</span><br/>
                    </>}
                    {(influencerObj.phone !== '' && influencerObj.phone !== null) &&
                    <>
                        For any need please call to <span style={{textDecoration: "underline", userSelect: 'text', msUserSelect: 'text'}}>{influencerObj.phone}</span><br/>
                    </>}
                    {influencerObj.instagramUrl !== '' &&
                    <>
                        Check out my instagram account <span style={{textDecoration: "underline", userSelect: 'text', msUserSelect: 'text'}}>{influencerObj.instagramUrl}</span>
                    </>}
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