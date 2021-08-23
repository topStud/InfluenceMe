import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import React from "react";
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import {Checkbox, FormControlLabel, FormGroup, FormHelperText, FormLabel} from "@material-ui/core";
import InputText from "../InputComponents/inputText";

export default function InstagramInfo(props) {
    const values = props.instagramInfoValues.val
    const errors = props.instagramInfoValues.err

    const [checked, setChecked] = React.useState({
        lifestyle: false,
        travel: false,
        gadgets: false,
        games: false
    })

    function handleChangeFollowers(e) {
        values.setter({
            ...values.getter,
            followers: e.target.value
        })
    }

    function onFollowersClick() {
        errors.setter({
            ...errors.getter,
            followersErr: false,
            followersMsg: ''
        })
    }
    
    function handleCheckboxesChange(e) {
        // if checked, add to list
        if (e.target.checked) {
            values.setter({
                ...values.getter,
                categories: [
                    ...values.getter.categories,
                    e.target.value
                ]
            })
            errors.setter({
                ...errors.getter,
                categoryErr: false
            })
            setChecked({
                ...checked,
                [e.target.value]: true
            })
        }
        // not checked, remove from list
        else {
            values.setter({
                ...values.getter,
                categories: values.getter.categories.filter((category) => category !== e.target.value)
            })
            setChecked({
                ...checked,
                [e.target.value]: false
            })
        }
    }

    const userObj = {
        required: true,
        id: 'instagramUser',
        label: 'InstagramUser',
        name: 'user'
    }

    const urlObj = {
        required: false,
        id: 'instagramUrl',
        label: 'Instagram URL',
        name: 'url'
    }

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} style={{height: 90, marginTop:10}}>
                <InputText val={values} err={errors} info={userObj}/>
            </Grid>
            <Grid item xs={12} sm={6} style={{height: 90, marginTop:10}}>
                <TextField
                    label="Followers number"
                    value={values.getter.followers}
                    onChange={handleChangeFollowers}
                    name="followers"
                    id="followers"
                    InputProps={{
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
            <Grid item xs={12} style={{height:110}}>
                <FormLabel component="legend">Choose your categories</FormLabel>
                <FormGroup row={true}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={handleCheckboxesChange}
                                name="category"
                                color="primary"
                                size={"small"}
                                value={'lifestyle'}
                                checked={checked.lifestyle || values.getter.categories.includes('lifestyle')}
                            />
                        }
                        label="lifestyle"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={handleCheckboxesChange}
                                name="category"
                                color="primary"
                                size={"small"}
                                value={'travel'}
                                checked={checked.travel || values.getter.categories.includes('travel')}
                            />
                        }
                        label="travel"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={handleCheckboxesChange}
                                name="category"
                                color="primary"
                                size={"small"}
                                value={'games'}
                                checked={checked.games || values.getter.categories.includes('games')}
                            />
                        }
                        label="games"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                onChange={handleCheckboxesChange}
                                name="category"
                                color="primary"
                                size={"small"}
                                value={'gadgets'}
                                checked={checked.gadgets || values.getter.categories.includes('gadgets')}
                            />
                        }
                        label="gadgets"
                    />
                </FormGroup>
                <FormHelperText hidden={!errors.getter.categoryErr} error={errors.getter.categoryErr}>Please select at least one category</FormHelperText>
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