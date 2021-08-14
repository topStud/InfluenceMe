import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import React from "react";
import {Avatar, Fab} from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import {blue} from "@material-ui/core/colors";
import PhoneTextField from './phoneTextField'

export default function PersonalInfo(props) {
    // values
    const values = props.personalInfoValues.val
    const errors = props.personalInfoValues.err
    const [imageName, setImageName] = React.useState('')

    const handleUploadClick = event => {
        let file = event.target.files[0];
        setImageName(file.name)
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = function() {
            values.setter({
                ...values.getter,
                photo: reader.result
            })
            console.log(reader.result)
        }
    };

    function onFirstNameChange(e) {
        values.setter({
            ...values.getter,
            firstName: e.target.value
        })
    }

    function onLastNameChange(e) {
        values.setter({
            ...values.getter,
            lastName: e.target.value
        })
    }

    function onDateChange(e) {
        values.setter({
            ...values.getter,
            date: e.target.value
        })
    }

    function onFirstNameClick() {
        errors.setter({
            ...errors.getter,
            firstNameMsg: '',
            firstNameErr: false
        })
    }

    function onLastNameClick() {
        errors.setter({
            ...errors.getter,
            lastNameMsg: '',
            lastNameErr: false
        })
    }

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} style={{height: 90, marginTop:10}}>
                <TextField
                    id="firstName"
                    label="First Name"
                    type="text"
                    fullWidth
                    error={errors.getter.firstNameErr}
                    helperText={errors.getter.firstNameMsg}
                    required
                    value={values.getter.firstName}
                    onClick={onFirstNameClick}
                    onChange={onFirstNameChange}
                />
            </Grid>
            <Grid item xs={12} sm={6} style={{height: 90, marginTop:10}}>
                <TextField
                    id="lastName"
                    label="Last Name"
                    type="text"
                    fullWidth
                    error={errors.getter.lastNameErr}
                    helperText={errors.getter.lastNameMsg}
                    onClick={onLastNameClick}
                    required
                    value={values.getter.lastName}
                    onChange={onLastNameChange}
                />
            </Grid>
            <Grid item xs={12} style={{height:90}}>
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    fullWidth
                    InputLabelProps={{
                        shrink: true,
                    }}
                    value={values.getter.date}
                    onChange={onDateChange}
                />
            </Grid>
            <Grid item xs={12} sm={6} style={{height:10}}>
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
            <Grid item xs={12} sm={6} style={{height:110}}>
                <PhoneTextField val={values}/>
            </Grid>
        </Grid>
    )
}
