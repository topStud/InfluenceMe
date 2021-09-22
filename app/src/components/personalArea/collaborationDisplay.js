import Select from "@atlaskit/select";
import React from "react";
import {useLocation} from "react-router-dom";
import Box from "@material-ui/core/Box";
import ContractCarousel from "./contractCarousel";
import {makeStyles} from "@material-ui/core/styles";
import PropTypes from "prop-types";

const SelectSingle = ({titleList, valueObj, userType}) => (
    <>
        <div style={{marginBottom:10}}>
            <label>{userType === 'companies' ? 'What is the title of the contracts you would like to see?' :
                'What is a company name you would like to see contracts with'}</label>
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

SelectSingle.propTypes = {
    titleList: PropTypes.array.isRequired,
    valueObj: PropTypes.exact({
        getter: PropTypes.string,
        setter: PropTypes.func
    }).isRequired,
    userType: PropTypes.oneOf(['influencers', 'companies'])
}

const useStyles = makeStyles(() => ({
    select: {
        fontSize: 13,
        fontWeight: 500
    }
}));

export default function CollaborationDisplay(props) {
    const {contracts, type, objData} = props;
    const [selectOption, setSelectOption] = React.useState('Choose title here...')

    // gets user type of url - influences/companies
    const { pathname } = useLocation();
    const userType = pathname.split('/')[1]

    // for companies, the contracts are grouped by title, for influencer, grouped by company name.
    let field = [userType === 'companies' ? 'title' : 'companyName']

    const groupedContracts = [];
    const selectList = []
    contracts.map((i) => {
        const test = groupedContracts.filter(
            item => item[field] === i[field]
        );
        // checks if title/companyName group does not exist yet and creates one.
        if (test.length === 0) {
            const itemObj = {
                [field]: i[field],
                list: []
            };
            groupedContracts.push(itemObj);
            // pushes title/companyName to list for select display.
            selectList.push({label: i[field], value: i[field]})
        }
    });
    contracts.map((i) => {
        const currentTitle = i[field];
        // finds group of the current value for title/CompanyName
        const contractsWithSameTitle = groupedContracts.filter(function(k) {
            return k[field] === currentTitle;
        });
        contractsWithSameTitle[0].list.push(i)
    });

    return (
        <Box p={3} style={{height:'100%'}}>
            <SelectSingle valueObj={{getter: selectOption, setter: setSelectOption}} titleList={selectList} userType={userType}/>
            {/*if user selected an option, contracts are shown to him*/}
            <div style={{marginTop: 20}}>
                {selectOption !== 'Choose title here...' && <ContractCarousel objData={objData} contracts={groupedContracts.find(o=>o[field] === selectOption).list} type={type}/>}
            </div>
        </Box>
    );
}

CollaborationDisplay.propTypes = {
    contracts: PropTypes.array.isRequired,
    type: PropTypes.oneOf(['pending','exists']).isRequired,
    objData: PropTypes.exact({
        getter: PropTypes.object,
        setter: PropTypes.func
    })
}