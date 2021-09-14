import React from "react";
import {TextField} from "@material-ui/core";
import PropTypes from 'prop-types'

TextInput.propTypes = {
    val: PropTypes.exact({
        getter: PropTypes.object,
        setter: PropTypes.func
    }).isRequired,
    info: PropTypes.exact({
        id: PropTypes.string,
        required: PropTypes.bool,
        label: PropTypes.string,
        name: PropTypes.string
    }).isRequired,
    err: PropTypes.exact({
        getter: PropTypes.object,
        setter: PropTypes.func
    }).isRequired,
}

export default function TextInput(props) {
    function handleInputChange(e) {
        if (e) {
            props.val.setter({
                ...props.val.getter,
                [e.target.name]: e.target.value
            })
        }
    }

    function onInputClick(e) {
        props.err.setter({
            ...props.err.getter,
            [e.target.name+'Err']: false,
            [e.target.name+'Msg']: ''
        })
    }

    return (
        <TextField
            required={props.info.required}
            fullWidth
            name={props.info.name}
            label={props.info.label}
            id={props.info.id}
            value={props.val.getter[props.info.name]}
            onChange={handleInputChange}
            error={props.err.getter[props.info.name+'Err']}
            helperText={props.err.getter[props.info.name+'Msg']}
            onClick={onInputClick}
     />
    );
}
