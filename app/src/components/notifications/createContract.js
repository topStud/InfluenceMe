import DialogTitle from "@material-ui/core/DialogTitle";
import React, {useEffect} from "react";
import {Dialog, DialogActions, DialogContent} from "@material-ui/core";
import {TransitionSlide} from "../../utils";
import Button from "@material-ui/core/Button";
import {useLocation} from "react-router-dom";
import Typography from "@material-ui/core/Typography";

export default function CreateContractDialog({backdrop, influencer}) {
    const { search } = useLocation();
    const match = search.match(/id=(.*)/);
    const itemID = match?.[1];

    const [proposalData, setProposalData] = React.useState(null)
    const [errFetchProposal, setErrFetchProposal] = React.useState(false)
    const [confirmationDialogOpen, setConfirmationDialogOpen] = React.useState(false)



    useEffect(()=>{
        // get proposal
        fetch(`/api/collaboration_proposals/${itemID}`).then(res => {
            if (!res.ok) {
                throw new Error('Couldn\'t get proposal\'s data');
            }
            return res.json()
        }).then(proposalData => {
            if ('status' in proposalData) {
                throw new Error('Couldn\'t get proposal\'s data');
            } else {
                setProposalData(proposalData.response)
            }
        }).catch((error) => {
            setErrFetchProposal(true)
            console.log(error)
        });
    },[])

    function onClickCancel() {
        backdrop.setter(false)
        // nullify the fields
    }

    function onClickCreate() {
        setConfirmationDialogOpen(true)
    }

    return(
        <>
            {proposalData !== null && <Dialog
                open={backdrop.getter}
                TransitionComponent={TransitionSlide}
                keepMounted
                fullWidth
                maxWidth={'sm'}
            >
                <DialogTitle>
                <span style={{fontFamily:'Rubik', fontWeight:800,
                    color: '#1F75A6', fontSize:'1.5em'}}>{'Contract for: '
                + proposalData.title}</span>
                </DialogTitle>
                <DialogContent>
                    <Typography>
                        Please fill all the fields. They will be useful for tracking your active and inactive collaborations.<br/>
                        On clicking the 'Create' button, the contract will be sent to the influencer. <br/>
                        Only when the influencer confirms the contract's content, the collaboration between you will be created.
                    </Typography>
                    {/*<Grid container>*/}
                    {/*    <Grid item xs={12} style={{height: 145, paddingLeft:0}}>*/}
                    {/*        <InputTextArea val={} err={} info={}/>*/}
                    {/*    </Grid>*/}
                    {/*    <Grid item xs={12} style={{height: 145, paddingLeft:0}}>*/}
                    {/*        <InputTextArea val={} err={} info={}/>*/}
                    {/*    </Grid>*/}
                    {/*</Grid>*/}
                </DialogContent>
                <DialogActions>
                    <Button color="primary" onClick={onClickCancel}>
                        Cancel
                    </Button>
                    <Button color="primary" name="create" onClick={onClickCreate}>
                        Create
                    </Button>
                </DialogActions>
            </Dialog>}
        </>
    )
}