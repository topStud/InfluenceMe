import {TextField} from "@material-ui/core";

export default function InputTextArea(props) {
    // the data in info that needs to be sent:
    // id, label, name, placeholder

    function handleChange(e) {
        if (e) {
            props.val.setter({
                ...props.val.getter,
                [e.target.name]: e.target.value
            })
        }
    }

    function onClick(e) {
        props.err.setter({
            ...props.err.getter,
            [e.target.name+'Msg']: '',
            [e.target.name+'Err']: false
        })
    }

    return (
        <>
            <TextField maxRows={4} minRows={4} variant={"outlined"} multiline fullWidth style={{display: "block", width: '100%', fontFamily: 'Rubik', fontWeight:300, fontSize:17,
                padding: 7}} placeholder={props.info.placeholder} value={props.val.getter[props.info.name]}
                       onChange={handleChange} error={props.err.getter[props.info.name+'Err']}
                       helperText={props.err.getter[props.info.name+'Msg']} onClick={onClick} required
                       label={props.info.label} id={props.info.id} name={props.info.name}/>
        </>

    )
}
