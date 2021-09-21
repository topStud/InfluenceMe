import {Fab} from "@material-ui/core";
import {blue} from "@material-ui/core/colors";
import AddPhotoAlternateIcon from "@material-ui/icons/AddPhotoAlternate";
import React from "react";
import Resizer from "react-image-file-resizer";
import PropTypes from "prop-types";

InputImage.propTypes = {
    val: PropTypes.exact({
        getter: PropTypes.object,
        setter: PropTypes.func
    }).isRequired,
    info: PropTypes.exact({
        label: PropTypes.string, //text that will be shown next to upload image button
    }).isRequired
}

export default function InputImage(props) {
    const handleUploadClick = async event => {
        let file = event.target.files[0];

        // compress image
        Resizer.imageFileResizer(
            file,
            480,
            480,
            'JPEG',
            90,
            0,
            (uri) => {
                props.val.setter({
                    ...props.val.getter,
                    photo: uri,
                    photoName: file.name
                })
            },
            'base64',
            200,
            200
        );
    };

    return (
        <>
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
                {props.val.getter.photoName !== '' ? (<span>{props.val.getter.photoName}</span>) : (<span>{props.info.label}</span>)}
            </label>
        </>
    )
}