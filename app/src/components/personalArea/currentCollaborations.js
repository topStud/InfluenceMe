import React,{useEffect} from "react";
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {FetchError} from "../../utils";
import CollaborationDisplay from "./collaborationDisplay";

function PanelTab(props) {
    const { value, index, contracts, type,id , ...other } = props;

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
                <CollaborationDisplay id={id} contracts={contracts} type={type}/>
            }
        </div>
    );
}

PanelTab.propTypes = {
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
    contracts: PropTypes.array.isRequired,
    type: PropTypes.oneOf(['pending','exists']).isRequired,
    id: PropTypes.string.isRequired
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
        height: '100%'
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    }
}));

CurrentCollaborations.propTypes = {
    id: PropTypes.string.isRequired,
    setValue: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
}

export default function CurrentCollaborations({id, setValue, index}) {
    const classes = useStyles();
    const theme = useTheme();

    const [valueTabs, setValueTabs] = React.useState(0);
    const [contracts, setContracts] = React.useState({
        current: null,
        pending: null
    })
    const [errFetch, setErrFetch] = React.useState(false)

    useEffect(()=> {
        setValue(index)
        fetch(`/api/contracts/of/${id}`).then(res => {
            if (!res.ok) {
                throw new Error("Couldn't get contract info")
            }
            return res.json()
        }).then(contractData => {
            if ('error' in contractData) {
                throw new Error("Couldn't get contract info")
            } else {
                setContracts({
                    current: contractData.currentContracts,
                    pending: contractData.pendingContracts
                })
            }
        }).catch((error) => {
            setErrFetch(true)
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
            {contracts.current !== null && <>
                <PanelTab value={valueTabs} id={id} index={0} dir={theme.direction} contracts={contracts.current} type={'exists'}/>
                <PanelTab value={valueTabs} id={id} index={1} dir={theme.direction} contracts={contracts.pending} type={'pending'}/>
            </>}
            {errFetch && <FetchError name={'contracts\''}/>}
        </div>
    );
}


