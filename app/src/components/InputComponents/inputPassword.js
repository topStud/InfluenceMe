import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import TextField from "@material-ui/core/TextField";
import React from "react";
import PropTypes from "prop-types";

InputPassword.propTypes = {
    val: PropTypes.exact({
        getter: PropTypes.object,
        setter: PropTypes.func
    }).isRequired,
    info: PropTypes.exact({
        id: PropTypes.string,
        label: PropTypes.string,
        name: PropTypes.string
    }).isRequired,
    err: PropTypes.exact({
        getter: PropTypes.object,
        setter: PropTypes.func
    }).isRequired,
}

export default function InputPassword(props) {
    const [showPass, setShowPass] = React.useState(false)

    function onPassChange(e) {
        props.val.setter({
            ...props.val.getter,
            [e.target.name]: e.target.value
        })
    }

    function onPassClick(e) {
        props.err.setter({
            ...props.err.getter,
            [e.target.name+'Err']: false,
            [e.target.name+'Msg']: ''
        })
    }

    const handleClickShowPassword = () => {
        setShowPass(!showPass)
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <TextField
            required
            error={props.err.getter[props.info.name+'Err']}
            fullWidth
            name= {props.info.name}
            label= {props.info.label}
            type={showPass ? 'text' : 'password'}
            id={props.info.id}
            helperText={props.err.getter[props.info.name+'Msg']}
            value={props.val.getter[props.info.name]}
            onChange={onPassChange}
            onClick={onPassClick}
            InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                        >
                            {showPass ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                ),
            }}
        />
    )
}