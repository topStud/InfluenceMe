import Grid from "@material-ui/core/Grid";
import React from "react";
import PhoneTextField from '../InputComponents/phoneTextField'
import InputText from '../InputComponents/inputText'
import InputImage from "../InputComponents/inputImage";
import InputDate from "../InputComponents/inputDate";
import PropTypes from 'prop-types'

PersonalInfo.propTypes = {
    values: PropTypes.exact({
        val: PropTypes.exact({
            getter: PropTypes.object,
            setter: PropTypes.func
        }),
        err: PropTypes.exact({
            getter: PropTypes.object,
            setter: PropTypes.func
        })
    })
}

export default function PersonalInfo(props) {
    // values
    const values = props.values.val
    const errors = props.values.err

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

    const dateObj = {
        id: 'date',
        label: 'Birthday',
        name: 'date'
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
                <InputDate val={values} err={errors} info={dateObj}/>
            </Grid>
            <Grid item xs={12} sm={6} style={{height:140}}>
                <InputImage val={values} info={{label: 'Add a profile picture'}}/>
            </Grid>
            <Grid item xs={12} sm={6} style={{height:140}}>
                <PhoneTextField val={values} err={errors} info={{name: 'phone'}}/>
            </Grid>
        </Grid>
    )
}
