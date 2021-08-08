import React from "react";
import MuiPhoneNumber from "material-ui-phone-number";


export default class CreateUserDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultValues: {
                phone: ""
            }
        };

        this.handlePhoneChange = this.handlePhoneChange.bind(this);
    }
    handlePhoneChange(value) {
        if (value) {
            this.setState({ phone: value });
            console.log(value)
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
                value={this.state.phone}
                onChange={this.handlePhoneChange}
            />
        );
    }
}
