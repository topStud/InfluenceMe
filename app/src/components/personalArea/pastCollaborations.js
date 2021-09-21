import React, {useEffect} from "react";
import CollaborationDisplay from "./collaborationDisplay";
import PropTypes from 'prop-types';
import {FetchError} from "../../utils";

PastCollaborations.proppTypes = {
    setValue: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired
}

export default function PastCollaborations({setValue, index, id}) {
    const [contracts, setContracts] = React.useState(null)
    const [errFetch, setErrFetch] = React.useState(false)

    useEffect(()=> {
        setValue(index)
        fetch(`/api/contracts/of/${id}`).then(res => {
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
            {contracts !== null && <CollaborationDisplay contracts={contracts} type={'exists'}/>}
            {errFetch && <FetchError name={'contracts\''}/>}
        </div>
    )
}