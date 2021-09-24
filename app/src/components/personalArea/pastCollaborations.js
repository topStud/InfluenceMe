import React, {useEffect} from "react";
import CollaborationDisplay from "./collaborationDisplay";
import PropTypes from 'prop-types';
import {FetchError} from "../../utils";
import Typography from "@material-ui/core/Typography";
import {Divider} from "@material-ui/core";

PastCollaborations.proppTypes = {
    setValue: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
}

export default function PastCollaborations({setValue, index, id}) {
    // related to fetching the data of past contracts
    const [contracts, setContracts] = React.useState(null)
    const [errFetch, setErrFetch] = React.useState(false)

    // fetched data of past contract of current user
    useEffect(()=> {
        setValue(index)
        fetch(`/api/contracts/past/${id}`).then(res => {
            if (!res.ok) {
                throw new Error("Couldn't get contracts info")
            }
            return res.json()
        }).then(contractData => {
            if ('error' in contractData) {
                throw new Error("Couldn't get contracts info")
            } else {
                setContracts(contractData.pastContracts)
            }
        }).catch((error) => {
            setErrFetch(true)
            console.log(error)
        });
    },[])

    return (
        <div style={{minWidth:420}}>
            <Typography component={'h3'} variant={"h4"} style={{fontFamily: 'Rubik', fontWeight:200, color: '#A68617',
                padding:30, paddingBottom:0}}>
                Past Collaborations
            </Typography>
            <Divider style={{marginBottom: 20}}/>
            {contracts !== null && <CollaborationDisplay contracts={contracts} type={'exists'}/>}
            {errFetch && <FetchError name={'contracts\''}/>}
        </div>
    )
}