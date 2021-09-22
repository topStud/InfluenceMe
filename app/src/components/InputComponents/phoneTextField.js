import React from "react";
import MuiPhoneNumber from "material-ui-phone-number";
import PropTypes from 'prop-types'

export default class InputPhone extends React.Component {
    constructor(props) {
        super(props);
        // binds functions to class
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.onClick = this.onClick.bind(this)
    }
    
    handlePhoneChange(value) {
        if (value) {
            this.props.val.setter({
                ...this.props.val.getter,
                [this.props.info.name]: value
            })
        }
    }

    onClick() {
        this.props.err.setter({
            ...this.props.err.getter,
            [this.props.info.name+'Err']: false,
            [this.props.info.name+'Msg']: ''
        })
    }

    render() {
        return (
            <MuiPhoneNumber
                style={{width: '100%'}}
                name={this.props.info.name}
                label="Phone Number"
                data-cy="user-phone"
                defaultCountry={"il"}
                value={this.props.val.getter[this.props.info.name]}
                onChange={this.handlePhoneChange}
                error={this.props.err.getter[this.props.info.name+'Err']}
                helperText={this.props.err.getter[this.props.info.name+'Msg']}
                onClick={this.onClick}
            />
        );
    }
}

InputPhone.propTypes = {
    val: PropTypes.exact({
        getter: PropTypes.object,
        setter: PropTypes.func
    }).isRequired,
    err: PropTypes.exact({
        getter: PropTypes.object,
        setter: PropTypes.func
    }).isRequired,
    info: PropTypes.exact({
        name: PropTypes.string
    }).isRequired,
}
