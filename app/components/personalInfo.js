import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import React from "react";
import {Fab} from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import {blue} from "@material-ui/core/colors";
import PhoneTextField from './phoneTextField'

export default function PersonalInfo() {
    const [phoneValue, setPhoneValue] = React.useState('')
    const [selectedFile, setSelectedFile] = React.useState(null)
    const [imageName, setImageName] = React.useState('')

    const handleUploadClick = event => {
        let file = event.target.files[0];
        setImageName(file.name)
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = function(e) {
            setSelectedFile(reader.result)
        }
    };

    function onPhoneChange(e) {
        setPhoneValue(e.target.value)
    }

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="firstName"
                    label="First Name"
                    type="text"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={6}>
                <TextField
                    id="lastName"
                    label="Last Name"
                    type="text"
                    fullWidth
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
                <PhoneTextField />
            </Grid>
        </Grid>
    )
}