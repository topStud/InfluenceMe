import React from "react";
import MuiPhoneNumber from "material-ui-phone-number";


export default class CreateUserDialog extends React.Component {
    constructor(props) {
        super(props);
        this.handlePhoneChange = this.handlePhoneChange.bind(this);
    }
    handlePhoneChange(value) {
        if (value) {
            this.props.setter(value)
        }
    }
    render() {
        return (
            <MuiPhoneNumber
                style={{width: '100%'}}
                name="phone"
                label="Phone Number"
                data-cy="user-phone"
                defaultCountry={"us"}
                value={this.props.val}
                onChange={this.handlePhoneChange}
            />
        );
    }
}
