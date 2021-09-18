import React,{useEffect} from "react";
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import {FetchError} from "../../utils";
import Select from '@atlaskit/select';
import ContractCarousel from "./contractCarousel";
import {useLocation} from "react-router-dom";

const SelectSingle = ({titleList, valueObj}) => (
    <>
        <div style={{marginBottom:10}}>
            <label>What is the title of the contracts you would like to see?</label>
        </div>
        <Select
            value={{label:valueObj.getter, value: valueObj.getter}}
            onChange={(newValue)=>{if(newValue !== null) valueObj.setter(newValue.value);}}
            inputId="single-select"
            className={useStyles().select}
            options={titleList}
        />
    </>
);

function TabPanel(props) {
    const { value, index, contracts, type,id , ...other } = props;
    const [selectOption, setSelectOption] = React.useState('Choose title here...')

    const { pathname } = useLocation();
    const userType = pathname.split('/')[1]

    let field = [userType === 'companies' ? 'title' : 'companyName']

    const groupedContracts = [];
    const selectList = []
    contracts.map((i) => {
        const test = groupedContracts.filter(
            item => item[field] === i[field]
        );
        if (test.length === 0) {
            const itemObj = {
                [field]: i[field],
                list: []
            };
            groupedContracts.push(itemObj);
            selectList.push({label: i[field], value: i[field]})
        }
    });
    contracts.map((i) => {
        const currentTitle = i[field];
        const contractsWithSameTitle = groupedContracts.filter(function(k) {
            return k[field] === currentTitle;
        });
        const key = contractsWithSameTitle.length && contractsWithSameTitle[0][field];
        groupedContracts.map(item => {
        if (item[field] === key) {
            item.list.push(i);
        }
      });
    });

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            style={{height:'100%'}}
            {...other}
        >
            {value === index && (
                <Box p={3} style={{height:'100%'}}>
                    <SelectSingle valueObj={{getter: selectOption, setter: setSelectOption}} titleList={selectList}/>
                    <div style={{marginTop: 20}}>
                        {selectOption !== 'Choose title here...' && <ContractCarousel userID={id} contracts={groupedContracts.find(o=>o[field] === selectOption).list} type={type}/>}
                    </div>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
    contracts: PropTypes.array.isRequired,
    type: PropTypes.oneOf(['pending','current']).isRequired,
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
    },
    select: {
        fontSize: 13,
        fontWeight: 500
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
                <TabPanel value={valueTabs} id={id} index={0} dir={theme.direction} contracts={contracts.current} type={'current'}/>
                <TabPanel value={valueTabs} id={id} index={1} dir={theme.direction} contracts={contracts.pending} type={'pending'}/>
            </>}
            {errFetch && <FetchError name={'contracts\''}/>}
        </div>
    );
}


