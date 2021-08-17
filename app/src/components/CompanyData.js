import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import React from "react";
import {Fab} from "@material-ui/core";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import {blue} from "@material-ui/core/colors";
import PhoneTextField from './phoneTextField'
import Resizer from "react-image-file-resizer";

export default function CompanyData(props) {
    // values
    const values = props.companyDataValues.val
    const errors = props.companyDataValues.err
    const [imageName, setImageName] = React.useState('')

    const handleUploadClick = async event => {
        let file = event.target.files[0];
        setImageName(file.name)

        // compress image
        Resizer.imageFileResizer(
            file,
            480,
            480,
            'JPEG',
            90,
            0,
            (uri) => {
                values.setter({
                    ...values.getter,
                    photo: uri
                })
            },
            'base64',
            200,
            200
        );
    };

    function onNameChange(e) {
        values.setter({
            ...values.getter,
            companyName: e.target.value
        })
    }

    function onURLClick() {
        errors.setter({
            ...errors.getter,
            urlErr: false,
            urlMsg: ''
        })
    }

    function onUrlChange(e) {
        values.setter({
            ...values.getter,
            siteUrl: e.target.value
        })
    }

    function onNameClick() {
        errors.setter({
            ...errors.getter,
            companyNameMsg: '',
            companyNameErr: false
        })
    }

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} style={{height: 90, marginTop:10}}>
                <TextField
                    id="companyName"
                    label="Company Name"
                    type="text"
                    fullWidth
                    error={errors.getter.companyNameErr}
                    helperText={errors.getter.companyNameMsg}
                    required
                    value={values.getter.companyName}
                    onClick={onNameClick}
                    onChange={onNameChange}
                />
            </Grid>
            <Grid item xs={12} style={{height: 90}}>
                <TextField
                    value={values.getter.siteUrl}
                    onChange={onUrlChange}
                    error={errors.getter.urlErr}
                    helperText={errors.getter.urlMsg}
                    fullWidth
                    label={'Company\'s site URL'}
                    onClick={onURLClick}
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
                    {imageName !== '' ? (<span>{imageName}</span>) : (<span>Add company's logo here</span>)}
                </label>
            </Grid>
            <Grid item xs={12} sm={6} style={{height:110}}>
                <PhoneTextField val={values}/>
            </Grid>
        </Grid>
    )
}
