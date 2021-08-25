import {Checkbox, FormControlLabel, FormGroup, FormHelperText, FormLabel} from "@material-ui/core";
import React from "react";

export default function CategoriesComponent(props) {
    const [checked, setChecked] = React.useState({
        lifestyle: false,
        travel: false,
        gadgets: false,
        games: false
    })

    function handleCheckboxesChange(e) {
        // if checked, add to list
        if (e.target.checked) {
            props.val.setter({
                ...props.val.getter,
                categories: [
                    ...props.val.getter.categories,
                    e.target.value
                ]
            })
            props.err.setter({
                ...props.err.getter,
                categoryErr: false
            })
            setChecked({
                ...checked,
                [e.target.value]: true
            })
        }
        // not checked, remove from list
        else {
            props.val.setter({
                ...props.val.getter,
                categories: props.val.getter.categories.filter((category) => category !== e.target.value)
            })
            setChecked({
                ...checked,
                [e.target.value]: false
            })
        }
    }

    return (
        <>
            <FormLabel component="legend">Choose your categories</FormLabel>
            <FormGroup row={true}>
                <FormControlLabel
                    control={
                        <Checkbox
                            onChange={handleCheckboxesChange}
                            name="category"
                            color="primary"
                            size={"small"}
                            value={'lifestyle'}
                            checked={checked.lifestyle || props.val.getter.categories.includes('lifestyle')}
                        />
                    }
                    label="lifestyle"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            onChange={handleCheckboxesChange}
                            name="category"
                            color="primary"
                            size={"small"}
                            value={'travel'}
                            checked={checked.travel || props.val.getter.categories.includes('travel')}
                        />
                    }
                    label="travel"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            onChange={handleCheckboxesChange}
                            name="category"
                            color="primary"
                            size={"small"}
                            value={'games'}
                            checked={checked.games || props.val.getter.categories.includes('games')}
                        />
                    }
                    label="games"
                />
                <FormControlLabel
                    control={
                        <Checkbox
                            onChange={handleCheckboxesChange}
                            name="category"
                            color="primary"
                            size={"small"}
                            value={'gadgets'}
                            checked={checked.gadgets || props.val.getter.categories.includes('gadgets')}
                        />
                    }
                    label="gadgets"
                />
            </FormGroup>
            <FormHelperText hidden={!props.err.getter.categoryErr} error={props.err.getter.categoryErr}>Please select at least one category</FormHelperText>
        </>
    )
}