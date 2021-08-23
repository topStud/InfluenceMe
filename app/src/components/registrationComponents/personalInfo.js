import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import React from "react";
import PhoneTextField from '../InputComponents/phoneTextField'
import InputText from '../InputComponents/inputText'
import InputImage from "../InputComponents/inputImage";

export default function PersonalInfo(props) {
    // values
    const values = props.personalInfoValues.val
    const errors = props.personalInfoValues.err

    function onDateChange(e) {
        values.setter({
            ...values.getter,
            date: e.target.value
        })
    }

    const fNameObj = {
        required: true,
        id: 'firstName',
        label: 'First Name',
        name: 'firstName'
    }

    const lNameObj = {
        required: true,
        id: 'lastName',
        label: 'Last Name',
        name: 'lastName'
    }

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} style={{height: 90, marginTop:10}}>
                <InputText val={values} err={errors} info={fNameObj}/>
            </Grid>
            <Grid item xs={12} sm={6} style={{height: 90, marginTop:10}}>
                <InputText val={values} err={errors} info={lNameObj}/>
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
                <InputImage val={values} info={{label: 'Add a profile picture'}}/>
            </Grid>
            <Grid item xs={12} sm={6} style={{height:110}}>
                <PhoneTextField val={values} err={errors}/>
            </Grid>
        </Grid>
    )
}
