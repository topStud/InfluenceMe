import {FormGroup, FormHelperText, FormLabel} from "@material-ui/core";
import React from "react";
import Chip from "@material-ui/core/Chip";
import PropTypes from "prop-types";

CategoriesComponent.propTypes = {
    val: PropTypes.exact({
        getter: PropTypes.object,
        setter: PropTypes.func
    }).isRequired,
    err: PropTypes.exact({
        getter: PropTypes.object,
        setter: PropTypes.func
    }).isRequired,
}

export default function CategoriesComponent(props) {
    function handleChipClick(label) {
        // if checked, add to list
        if (!props.val.getter.categories.includes(label)) {
            props.val.setter({
                ...props.val.getter,
                categories: [
                    ...props.val.getter.categories,
                    label
                ]
            })
            props.err.setter({
                ...props.err.getter,
                categoryErr: false
            })
        }
        // not checked, remove from list
        else {
            props.val.setter({
                ...props.val.getter,
                categories: props.val.getter.categories.filter((category) => category !== label)
            })
        }
    }

    return (
        <>
            <FormLabel component="legend" style={{marginBottom: 10}}>Choose your categories</FormLabel>
            <FormGroup row={true}>
                <Chip
                    onClick={()=>handleChipClick('Lifestyle')}
                    name="category"
                    color="default"
                    label="Lifestyle"
                    style={{margin: 5, width: 74}}
                    variant={props.val.getter.categories.includes('Lifestyle')?'default':'outlined'}
                />
                <Chip
                    onClick={()=>handleChipClick('Travel')}
                    name="category"
                    color="default"
                    value={'Travel'}
                    label="Travel"
                    style={{margin: 5, width: 62}}
                    variant={props.val.getter.categories.includes('Travel')?'default':'outlined'}
                />
                <Chip
                    onClick={()=>handleChipClick('Games')}
                    name="category"
                    color="default"
                    value={'Games'}
                    label="Games"
                    style={{margin: 5, width: 68}}
                    variant={props.val.getter.categories.includes('Games')?'default':'outlined'}
                />
                <Chip
                    onClick={()=>handleChipClick('Gadgets')}
                    name="category"
                    color="default"
                    value={'Gadgets'}
                    label="Gadgets"
                    style={{margin: 5, width: 76}}
                    variant={props.val.getter.categories.includes('Gadgets')?'default':'outlined'}
                />
                <Chip
                    onClick={()=>handleChipClick('Sport')}
                    name="category"
                    color="default"
                    value={'Sport'}
                    label="Sport"
                    style={{margin: 5, width: 58}}
                    variant={props.val.getter.categories.includes('Sport')?'default':'outlined'}
                />
                <Chip
                    onClick={()=>handleChipClick('Clothing')}
                    name="category"
                    color="default"
                    value={'Clothing'}
                    label="Clothing"
                    style={{margin: 5, width: 74}}
                    variant={props.val.getter.categories.includes('Clothing')?'default':'outlined'}
                />
                <Chip
                    onClick={()=>handleChipClick('Beauty')}
                    name="category"
                    color="default"
                    value={'Beauty'}
                    label="Beauty"
                    style={{margin: 5, width: 67}}
                    variant={props.val.getter.categories.includes('Beauty')?'default':'outlined'}
                />
                <Chip
                    onClick={()=>handleChipClick('Food')}
                    name="category"
                    color="default"
                    value={'Food'}
                    label="Food"
                    style={{margin: 5, width: 57}}
                    variant={props.val.getter.categories.includes('Food')?'default':'outlined'}
                />
                <Chip
                    onClick={()=>handleChipClick('Entertainment')}
                    name="category"
                    color="default"
                    value={'Entertainment'}
                    label="Entertainment"
                    style={{margin: 5, width: 108}}
                    variant={props.val.getter.categories.includes('Entertainment')?'default':'outlined'}
                />
            </FormGroup>
            {/*appears when user did not check at least one category*/}
            <FormHelperText hidden={!props.err.getter.categoryErr} error={props.err.getter.categoryErr}>
                Please select at least one category
            </FormHelperText>
        </>
    )
}