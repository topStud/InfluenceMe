import {TextField} from "@material-ui/core";
import PropTypes from 'prop-types'

Bio.propTypes = {
    values: PropTypes.exact({
        val: PropTypes.exact({
            getter: PropTypes.string,
            setter: PropTypes.func
        }),
        err: PropTypes.exact({
            getter: PropTypes.object,
            setter: PropTypes.func
        })
    })
}

export default function Bio(props) {
    function handleChange(e) {
        props.values.val.setter(e.target.value)
    }

    function onClick() {
        props.values.err.setter({
            bioMsg: '',
            bioErr: false
        })
    }

    return (
        <TextField maxRows={11} minRows={11} variant={"outlined"} multiline fullWidth style={{display: "block",
            maxHeight: '250px', width: '100%', height: '400px', fontFamily: 'Rubik', fontWeight:300, fontSize:17,
            padding: 7}} placeholder={'Tell us more about yourself here...'} value={props.values.val.getter}
                   onChange={handleChange} error={props.values.err.getter.bioErr}
                   helperText={props.values.err.getter.bioMsg} onClick={onClick}/>
    )
}
