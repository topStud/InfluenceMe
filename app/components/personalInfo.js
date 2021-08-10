import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import React from "react";
import {Fab} from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import {blue} from "@material-ui/core/colors";
import PhoneTextField from './phoneTextField'

export default function PersonalInfo(props) {
    // values
    const values = props.personalInfoValues.val
    const firstName = values.fName
    const lastName = values.lName
    const date = values.dateValue
    const phone = values.phoneNum
    // values - setters
    const setFirstName = values.setFName
    const setLastName = values.setLName
    const setDate = values.setDateValue
    const setPhoto = values.setPhoto
    const setPhone = values.setPhone
    // error marks
    const errors = props.personalInfoValues.err
    const firstNameErr = errors.fName
    const lastNameErr = errors.lName
    // error marks - setters
    const setFirstNameErr = errors.setFName
    const setLastNameErr = errors.setLName
    // error message
    const msg = props.personalInfoValues.errMsg
    const firstNameMsg = msg.fName
    const lastNameMsg = msg.lName
    // error message - setters
    const setFirstNameMsg = msg.setFName
    const setLastNameMsg = msg.setLName

    const [imageName, setImageName] = React.useState('')

    const handleUploadClick = event => {
        let file = event.target.files[0];
        setImageName(file.name)
        setPhoto(file)
        // const reader = new FileReader();
        // reader.readAsDataURL(file);
        //
        // reader.onloadend = function() {
        //     setPhoto(reader.result)
        // }
    };

    function onFirstNameChange(e) {
        setFirstName(e.target.value)
    }

    function onLastNameChange(e) {
        setLastName(e.target.value)
    }

    function onDateChange(e) {
        setDate(e.target.value)
    }

    function onFirstNameClick() {
        setFirstNameMsg('')
        setFirstNameErr(false)
    }

    function onLastNameClick() {
        setLastNameMsg('')
        setLastNameErr(false)
    }

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} style={{height: 90}}>
                <TextField
                    id="firstName"
                    label="First Name"
                    type="text"
                    fullWidth
                    error={firstNameErr}
                    helperText={firstNameMsg}
                    required
                    value={firstName}
                    onClick={onFirstNameClick}
                    onChange={onFirstNameChange}
                />
            </Grid>
            <Grid item xs={12} sm={6} style={{height: 90}}>
                <TextField
                    id="lastName"
                    label="Last Name"
                    type="text"
                    fullWidth
                    error={lastNameErr}
                    helperText={lastNameMsg}
                    onClick={onLastNameClick}
                    required
                    value={lastName}
                    onChange={onLastNameChange}
                />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={date}
                    onChange={onDateChange}
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <input
                    accept="image/*"
                    style={{display:"none"}}
                    id="contained-button-file"
                    multiple
                    type="file"
                    onChange={handleUploadClick}
                />
                <label htmlFor="contained-button-file">
                    <Fab component="span" style={{color: blue[900], margin: 10}}>
                        <AddPhotoAlternateIcon />
                    </Fab>
                    {imageName !== '' ? (<span>{imageName}</span>) : (<span>Add a profile picture</span>)}
                </label>
            </Grid>
            <Grid item xs={12} sm={6}>
                <PhoneTextField val={phone} setter={setPhone}/>
            </Grid>
        </Grid>
    )
}