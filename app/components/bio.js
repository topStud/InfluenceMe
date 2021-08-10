export default function Bio(props) {
    function handleChange(e) {
        props.bioValues.val.setter(e.target.value)
    }

    return (
        <textarea maxLength={3000} rows={1} style={{display: "block", maxHeight: '200px', width: '100%', height: '400px',
            fontFamily: 'Rubik', fontWeight:300, fontSize:17, borderLeft:'7px solid #A64B28',
            borderRight: '1px solid rgb(0,0,0,0.1)', borderTop: '1px solid rgb(0,0,0,0.1)',
            borderBottom: '1px solid rgb(0,0,0,0.1)' , padding: 7}} placeholder={'Tell us about yourself here...\n(This information will be presented in front of the companies)'}
            value={props.bioValues.val.getter} onChange={handleChange}/>
    )
}
