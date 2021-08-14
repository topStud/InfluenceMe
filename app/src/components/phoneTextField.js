import React from "react";
import MuiPhoneNumber from "material-ui-phone-number";


export default class CreateUserDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
    }
    
    handlePhoneChange(value) {
        if (value) {
            this.props.val.setter({
                ...this.props.val.getter,
                phoneNum: value
            })
        }
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
            />
        );
    }
}
