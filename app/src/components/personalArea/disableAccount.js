import {makeStyles} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import {Divider, FormControlLabel, Switch} from "@material-ui/core";
import PropTypes from 'prop-types'
import React from "react";
import {AnswerOfServer} from "../../utils";
import {useLocation} from "react-router-dom";

const useStyles = makeStyles(() => ({
    container: {
        boxShadow: '1px 5px 10px #A68617',
        padding:20,
        minWidth:420
    },
}));

DisableAccount.propTypes = {
    userData: PropTypes.object.isRequired
}

export default function DisableAccount({userData, setUserData}) {
    const classes = useStyles()

    const { pathname } = useLocation();
    const userType = pathname.split('/')[1]

    const [checked, setChecked] = React.useState(!userData.disabled)
    const [callServer, setCallServer] = React.useState(false)

    const handleChange = () => {
        setCallServer(true)
    }

    return(
        <div className={classes.container}>
            <Typography component={'h3'} variant={"h4"} style={{fontFamily: 'Rubik', fontWeight:200, color: '#A68617'}}>
                Disable Account
            </Typography>
            <Divider style={{marginBottom: 20}}/>
            <Typography component={'p'}>
                In this section, you are given the option to disable or enable your account.<br/>
                While your account is disabled, your {userType === 'companies' ? 'proposals' : 'profile'} won't be shown
                to {userType === 'companies' ? 'users' : 'companies'}. In addition, you won't be able to
                {userType === 'companies' ? 'create new proposals' : 'to show interest in companies\' proposals'}.
            </Typography>
            <div style={{display: "flex", justifyContent: "center", marginTop:30}}>
                <FormControlLabel
                    control={<Switch checked={checked} onChange={(e)=>handleChange(e)}/>}
                    label={checked ? "account active" : "account disabled"}
                />
            </div>
            <AnswerOfServer failMsg={"The update couldn't be made"} methodObj={{method: 'PUT'}} sucMsg={''}
                            url={`/api/${userType}/${!checked ? 'activate' : 'disable'}/${userData._id}`}
                            callServerObj={{getter: callServer, setter: setCallServer}} sucFunc={()=>{
                                setUserData({...userData, disabled: checked})
                                setChecked(!checked)
                            }}/>
        </div>
    )
}