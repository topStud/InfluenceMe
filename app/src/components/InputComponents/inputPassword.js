import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import TextField from "@material-ui/core/TextField";
import React from "react";
import PropTypes from "prop-types";
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import {Tooltip} from "@material-ui/core";

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
    const {val, err, info, ...otherProps} = props
    const [showPass, setShowPass] = React.useState(false)

    function onPassChange(e) {
        val.setter({
            ...val.getter,
            [e.target.name]: e.target.value
        })
    }

    function onPassClick(e) {
        err.setter({
            ...err.getter,
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
            {...otherProps}
            required
            error={err.getter[info.name+'Err']}
            fullWidth
            name= {info.name}
            label= {info.label}
            type={showPass ? 'text' : 'password'}
            id={info.id}
            helperText={err.getter[info.name+'Msg']}
            value={val.getter[info.name]}
            onChange={onPassChange}
            onClick={onPassClick}
            InputProps={{
                endAdornment: (
                    // adds option to show password
                    <InputAdornment position="end">
                        <Tooltip title={<span style={{fontSize:'1.2em'}}>Must contain at least one of A-Z, a-z and 0-9. Minimum length for' +
                            ' a password is 8 characters</span>} style={{marginRight: -10}} tabIndex={-1}>
                            <IconButton>
                                <HelpOutlineIcon style={{color: "gray"}}/>
                            </IconButton>
                        </Tooltip>
                        <IconButton
                            tabIndex={-1}
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