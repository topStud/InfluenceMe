import InputBase from "@material-ui/core/InputBase";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import {alpha, makeStyles} from "@material-ui/core/styles";
import {GetFilteredList} from "../../utils";
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 2),
        // vertical padding + font size from searchIcon
        marginLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        borderBottomRightRadius: '20px',
        borderTopRightRadius: '20px',
        [theme.breakpoints.up('md')]: {
            width: '100%',
        },
    },
    searchIcon: {
        padding: theme.spacing(1, 1),
        height: 'inherit',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
    },
    search: {
        position: 'relative',
        borderRadius: '20px',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha('#A64B28', 0.05),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
    },
}));

SearchField.propTypes = {
    searchObj: PropTypes.exact({
        getter: PropTypes.string,
        setter: PropTypes.func
    }).isRequired,
    filterString: PropTypes.string.isRequired,
    objList: PropTypes.exact({
        getter: PropTypes.exact({
            original: PropTypes.array,
            filtered: PropTypes.array
        }),
        setter: PropTypes.func
    }).isRequired,
    urlType: PropTypes.string.isRequired
}

export default function SearchField({searchObj, filterString, objList, urlType}) {
    const classes = useStyles();
    const [searchValue, setSearchValue] = React.useState('')
    const [callServerSearch, setCallServerSearch] = React.useState(false)

    // enables the user to click enter for making the search
    const onKeyDownSearchInput = (e) => {
        if (e.key === 'Enter') {
            onClickSearch()
        }
    }

    function onClickSearch() {
        if (searchValue !== '') {
            setCallServerSearch(true)
            // nullifies search string (displayed to user)
            setSearchValue('')
        }
        // saves search value of user
        searchObj.setter(searchValue)
    }

    const onChangeSearchContent = (event) => {
        setSearchValue(event.target.value)
    }

    return(
        <>
            <div className={classes.search}>
                <InputBase
                    onKeyDown={onKeyDownSearchInput}
                    id={'search-field'}
                    placeholder="Search"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    value={searchValue}
                    onChange={onChangeSearchContent}
                    style={{color: '#1F75A6', border:'1px solid #F27746',
                        backgroundColor:'rgba(242,119,70,0.05)', borderRadius: '20px', width:'100%'}}
                    inputProps={{ 'aria-label': 'search' }}
                    startAdornment={<IconButton onClick={onClickSearch} className={classes.searchIcon}>
                        <SearchIcon style={{color:'#F27746', height:20, width:20}}/>
                    </IconButton>}
                />
            </div>
            <GetFilteredList callServerObj={{getter: callServerSearch, setter: setCallServerSearch}}
                             url={`/api/${urlType}/${filterString !== '' ? 'search/' :
                                 'search-bar/'}/${searchObj.getter}${filterString !== '' ?
                                 `/${filterString}`:''}`} itemsList={objList}/>
        </>
    )
}