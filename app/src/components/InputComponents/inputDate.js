import React from "react";
import {TextField} from "@material-ui/core";
import PropTypes from 'prop-types'

InputDate.propTypes = {
    val: PropTypes.exact({
        getter: PropTypes.object,
        setter: PropTypes.func
    }).isRequired,
    info: PropTypes.exact({
        id: PropTypes.string,
        label: PropTypes.string,
        name: PropTypes.string
    }).isRequired
}

export default function InputDate(props) {
    function handleInputChange(e) {
        props.val.setter({
            ...props.val.getter,
            [e.target.name]: e.target.value
        })
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
            id={props.info.id}
            label={props.info.label}
            fullWidth
            name={props.info.name}
            type="date"
            InputLabelProps={{
                shrink: true,
            }}
            value={props.val.getter[props.info.name]}
            onChange={handleInputChange}
            onClick={onInputClick}
            error={props.err.getter[props.info.name+'Err']}
            helperText={props.err.getter[props.info.name+'Msg']}
        />
    );
}
