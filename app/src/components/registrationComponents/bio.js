import {TextField} from "@material-ui/core";

export default function Bio(props) {
    const errors = props.bioValues.err.getter

    function handleChange(e) {
        props.bioValues.val.setter(e.target.value)
    }

    function onClick() {
        if(errors.bioErr) {
            props.bioValues.err.setter({
                bioMsg: '',
                bioErr: false
            })
        }
    }

    return (
        <TextField maxRows={12} minRows={15} variant={"outlined"} multiline fullWidth style={{display: "block", maxHeight: '250px', width: '100%', height: '400px',
            fontFamily: 'Rubik', fontWeight:300, fontSize:17, padding: 7}} placeholder={'Tell us more about yourself here...'}
            value={props.bioValues.val.getter} onChange={handleChange} error={errors.bioErr} helperText={errors.bioMsg} onClick={onClick}/>
    )
}
