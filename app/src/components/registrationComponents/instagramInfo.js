import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import React from "react";
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import InputText from "../InputComponents/inputText";
import CategoriesComponent from "../InputComponents/categoriesComponent";

InstagramInfo.propTypes = {
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

export default function InstagramInfo(props) {
    const values = props.values.val
    const errors = props.values.err

    function handleChangeFollowers(e) {
        values.setter({
            ...values.getter,
            followersAmount: e.target.value
        })
    }

    function onFollowersClick() {
        errors.setter({
            ...errors.getter,
            followersErr: false,
            followersMsg: ''
        })
    }

    const userObj = {
        required: true,
        id: 'instagramUser',
        label: 'InstagramUser',
        name: 'instagramUser'
    }

    const urlObj = {
        required: false,
        id: 'instagramUrl',
        label: 'Instagram URL',
        name: 'instagramUrl'
    }

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} style={{height: 90, marginTop:10}}>
                <InputText val={values} err={errors} info={userObj}/>
            </Grid>
            <Grid item xs={12} sm={6} style={{height: 90, marginTop:10}}>
                <TextField
                    label="Followers number"
                    value={values.getter.followersAmount}
                    onChange={handleChangeFollowers}
                    name="followers"
                    id="followers"
                    InputProps={{
                        // enables only numeric input
                        inputComponent: NumberFormatCustom,
                    }}
                    fullWidth
                    required
                    error={errors.getter.followersErr}
                    helperText={errors.getter.followersMsg}
                    onClick={onFollowersClick}
                />
            </Grid>
            <Grid item xs={12} style={{height: 90}}>
                <InputText val={values} err={errors} info={urlObj}/>
            </Grid>
            <Grid item xs={12} style={{height:140}}>
                <CategoriesComponent val={values} err={errors}/>
            </Grid>
        </Grid>
    )
}

function NumberFormatCustom(props) {
    const { inputRef, onChange, ...other } = props;

    return (
        <NumberFormat
            {...other}
            getInputRef={inputRef}
            onValueChange={(values) => {
                onChange({
                    target: {
                        name: props.name,
                        value: values.value,
                    },
                });
            }}
            thousandSeparator
            isNumericString
        />
    );
}

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};