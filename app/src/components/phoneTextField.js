import React from "react";
import MuiPhoneNumber from "material-ui-phone-number";


export default class CreateUserDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
        this.onClick = this.onClick.bind(this)
    }
    
    handlePhoneChange(value) {
        if (value) {
            this.props.val.setter({
                ...this.props.val.getter,
                phoneNum: value
            })
        }
    }

    onClick() {
        this.props.err.setter({
            ...this.props.err.getter,
            phoneErr: false,
            phoneMsg: ''
        })
    }

    render() {
        return (
            <MuiPhoneNumber
                style={{width: '100%'}}
                name="phone"
                label="Phone Number"
                data-cy="user-phone"
                defaultCountry={"il"}
                value={this.props.val.getter.phoneNum}
                onChange={this.handlePhoneChange}
                error={this.props.err.getter.phoneErr}
                helperText={this.props.err.getter.phoneMsg}
                onClick={this.onClick}
            />
        );
    }
}
