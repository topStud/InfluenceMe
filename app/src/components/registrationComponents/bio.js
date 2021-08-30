import {TextField} from "@material-ui/core";

export default function Bio(props) {
    function handleChange(e) {
        props.values.val.setter(e.target.value)
    }

    function onClick() {
        if('err' in props.values) {
            props.values.err.setter({
                bioMsg: '',
                bioErr: false
            })
        }
    }

    return (
        <TextField maxRows={12} minRows={15} variant={"outlined"} multiline fullWidth style={{display: "block",
            maxHeight: '250px', width: '100%', height: '400px', fontFamily: 'Rubik', fontWeight:300, fontSize:17,
            padding: 7}} placeholder={'Tell us more about yourself here...'} value={props.values.val.getter}
                   onChange={handleChange} error={'err' in props.values ? props.values.err.getter.bioErr : false}
                   helperText={'err' in props.values ? props.values.err.getter.bioMsg : ''} onClick={onClick}/>
    )
}
