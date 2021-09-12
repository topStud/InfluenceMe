import Grid from "@material-ui/core/Grid";
import React from "react";
import PhoneTextField from '../InputComponents/phoneTextField'
import InputImage from "../InputComponents/inputImage";
import InputText from '../InputComponents/inputText';

export default function CompanyData(props) {
    // values
    const values = props.values.val
    const errors = props.values.err

    const nameObj = {
        required: true,
        id: 'companyName',
        label: 'Company Name',
        name: 'name'
    }

    const urlObj = {
        required: false,
        id: 'siteUrl',
        label: 'Company\'s site URL',
        name: 'siteUrl'
    }

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} style={{height: 90, marginTop:10}}>
                <InputText val={values} err={errors} info={nameObj}/>
            </Grid>
            <Grid item xs={12} style={{height: 90}}>
                <InputText val={values} err={errors} info={urlObj}/>
            </Grid>
            <Grid item xs={12} sm={6} style={{height:10}}>
                <InputImage val={values} info={{label: 'Add company\'s logo here'}}/>
            </Grid>
            <Grid item xs={12} sm={6} style={{height:110}}>
                <PhoneTextField val={values} err={errors} info={{name: 'phone'}}/>
            </Grid>
        </Grid>
    )
}
