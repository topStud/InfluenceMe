import React,{useEffect} from "react";
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import CollaborationDisplay from "./collaborationDisplay";
import {FetchError} from "../../utils";

function PanelTab(props) {
    const { value, index, contracts, type,objData ,allContracts, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            style={{height:'100%'}}
            {...other}
        >
            {value === index &&
                <CollaborationDisplay objData={objData} contracts={contracts} type={type} allContracts={allContracts}/>
            }
        </div>
    );
}

PanelTab.propTypes = {
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
    contracts: PropTypes.array.isRequired,
    type: PropTypes.oneOf(['pending','current', 'past']).isRequired,
    objData: PropTypes.exact({
        getter: PropTypes.object,
        setter: PropTypes.func
    }).isRequired,
    allContracts: PropTypes.exact({
        pending: PropTypes.exact({
            getter: PropTypes.array,
            setter: PropTypes.func
        }),
        current: PropTypes.exact({
            getter: PropTypes.array,
            setter: PropTypes.func
        })
    })
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '100%',
        height: '100%',
        minWidth:420
    },
}));

CurrentCollaborations.propTypes = {
    objData: PropTypes.object.isRequired,
    setValue: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}

function PanelTabError(props) {
    const { value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            style={{height:'100%'}}
            {...other}
        >
            {value === index &&
                <FetchError name={'contracts\''}/>
            }
        </div>
    );
}

PanelTabError.propTypes = {
    index: PropTypes.number,
    value: PropTypes.number
};
export default function CurrentCollaborations({objData, setValue, index}) {
    const classes = useStyles();
    const theme = useTheme();

    // keeps track of current tab
    const [valueTabs, setValueTabs] = React.useState(0);
    // contract lists
    const [currentContracts, setCurrentContracts] = React.useState(null)
    const [pendingContracts, setPendingContracts] = React.useState(null)
    const [errCurrentFetch, setErrCurrentFetch] = React.useState(false)
    const [errPendingFetch, setErrPendingFetch] = React.useState(false)

    // fetches contracts.
    useEffect(()=> {
        // if we get to page through url, it updates the tabs of personal area.
        setValue(index)
        // gets all current contracts of current user
        fetch(`/api/contracts/current/${objData.getter._id}`).then(res => {
            if (!res.ok) {
                throw new Error("Couldn't get current contract info")
            }
            return res.json()
        }).then(contractData => {
            if ('error' in contractData) {
                throw new Error("Couldn't get current contract info")
            } else {
                setCurrentContracts(contractData.currentContracts)
            }
        }).catch((error) => {
            setErrCurrentFetch(true)
            console.log(error)
        });
        // gets all pending contracts of current user
        fetch(`/api/contracts/pending/${objData.getter._id}`).then(res => {
            if (!res.ok) {
                throw new Error("Couldn't get pending contract info")
            }
            return res.json()
        }).then(contractData => {
            if ('error' in contractData) {
                throw new Error("Couldn't get pending contract info")
            } else {
                setPendingContracts(contractData.pendingContracts)
            }
        }).catch((error) => {
            setErrPendingFetch(true)
            console.log(error)
        });
    },[])

    const handleChange = (event, newValue) => {
        setValueTabs(newValue);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={valueTabs}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Current Collaborations" {...a11yProps(0)} />
                    <Tab label="Pending Collaborations" {...a11yProps(1)} />
                </Tabs>
            </AppBar>

            {currentContracts !== null &&
                <PanelTab value={valueTabs} objData={objData} index={0} dir={theme.direction}
                          contracts={currentContracts} type={'current'}/>}
            {pendingContracts !== null &&
                <PanelTab value={valueTabs} objData={objData} index={1} dir={theme.direction}
                          contracts={pendingContracts} type={'pending'}
                          allContracts={{pending:{getter: pendingContracts, setter: setPendingContracts},
                          current:{getter: currentContracts, setter: setCurrentContracts}}}/>}
            {errCurrentFetch &&
                <PanelTabError value={valueTabs} index={0}/>}
            {errPendingFetch &&
                <PanelTabError value={valueTabs} index={1}/>}
        </div>
    );
}


