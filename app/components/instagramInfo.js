import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import React from "react";
import NumberFormat from 'react-number-format';
import PropTypes from 'prop-types';
import {Checkbox, FormControlLabel, FormGroup, FormLabel} from "@material-ui/core";

export default function instagramInfo(props) {
    const val = props.instagramInfoValues.val
    const err = props.instagramInfoValues.err
    const msg = props.instagramInfoValues.errMsg

    const user = val.user
    const setUser = val.setUser
    const userErr = err.user
    const setUserErr = err.setUser
    const userErrMsg = msg.user
    const setUserErrMsg = msg.setUser

    const followers = val.followers
    const setFollowers = val.setFollowers
    const followersErr = err.followers
    const setFollowersErr = err.setFollowers
    const followersMsg = msg.followers
    const setFollowersMsg = msg.setFollowers

    const url = val.url
    const setUrl = val.setUrl
    const urlErr = err.url
    const setUrlErr = err.setUrl
    const urlMsg = msg.url
    const setUrlMsg = msg.setUrl

    function onUserClick() {
        setUserErrMsg('')
        setUserErr(false)
    }

    function onUserChange(e) {
        setUser(e.target.value)
    }

    function handleChangeFollowers(e) {
        setFollowers(e.target.value)
        console.log(followers)
    }

    function onUrlChange(e) {
        setUrl(e.target.value)
    }

    function onFollowersClick() {
        setFollowersMsg('')
        setFollowersErr(false)
    }

    function onURLClick() {
        setUrlMsg('')
        setUrlErr(false)
    }

    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} style={{height: 90}}>
                <TextField
                    id="user"
                    label="Instagram user"
                    type="text"
                    fullWidth
                    error={userErr}
                    helperText={userErrMsg}
                    required
                    value={user}
                    onClick={onUserClick}
                    onChange={onUserChange}
                />
            </Grid>
            <Grid item xs={12} sm={6} style={{height: 90}}>
                <TextField
                    label="Followers number"
                    value={followers}
                    onChange={handleChangeFollowers}
                    name="followers"
                    id="followers"
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                    fullWidth
                    required
                    error={followersErr}
                    helperText={followersMsg}
                    onClick={onFollowersClick}
                />
            </Grid>
            <Grid item xs={12} style={{height: 90}}>
                <TextField
                    value={url}
                    onChange={onUrlChange}
                    error={urlErr}
                    helperText={urlMsg}
                    fullWidth
                    label={'instagram URL'}
                    onClick={onURLClick}
                />
            </Grid>
            <Grid item xs={12}>
                <FormLabel component="legend">Choose your categories</FormLabel>
                <FormGroup row={true}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                // checked={}
                                // onChange={handleChange}
                                name="category"
                                color="primary"
                                size={"small"}
                            />
                        }
                        label="lifestyle"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                // checked={}
                                // onChange={handleChange}
                                name="category"
                                color="primary"
                                size={"small"}
                            />
                        }
                        label="travel"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                // checked={}
                                // onChange={handleChange}
                                name="category"
                                color="primary"
                                size={"small"}
                            />
                        }
                        label="games"
                    />
                    <FormControlLabel
                        control={
                            <Checkbox
                                // checked={}
                                // onChange={handleChange}
                                name="category"
                                color="primary"
                                size={"small"}
                            />
                        }
                        label="gadgets"
                    />
                </FormGroup>
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
            suffix="k"
        />
    );
}

NumberFormatCustom.propTypes = {
    inputRef: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};