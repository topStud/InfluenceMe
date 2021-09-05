import Grid from "@material-ui/core/Grid";
import React, {useEffect} from 'react'
import {Pagination} from "@material-ui/lab";
import HoverCard from "./hoverCard";

export default function CardsDisplay({objList, display, backdrop, setClickedProposal}) {
    // pagination
    let [page, setPage] = React.useState(1);
    const PER_PAGE = 6;
    const [count ,setCount] = React.useState(Math.ceil(objList.length / PER_PAGE))

    const handleChange = (e, p) => {
        setPage(p);
    };

    function currentData(data) {
        const begin = (page - 1) * PER_PAGE;
        const end = begin + PER_PAGE;
        return data.slice(begin, end);
    }

    useEffect(()=>{
        if (objList !== null) {
            setCount(Math.ceil(objList.length / PER_PAGE))
            setPage(1)
        }
    }, [JSON.stringify(objList)])

    return (
        <>
            <Grid container style={{marginLeft:0, width:'inherit', gridColumn: 1}}>
                {currentData(objList).map((obj) => (
                    <Grid item style={{margin:2}} key={obj._id}>
                        <HoverCard infoObj={obj} cardType={display} backdrop={backdrop} setClickedProposal={setClickedProposal}/>
                    </Grid>
                ))}
                {
                    count > 1 &&
                    <Grid item sm={12} style={{display: "flex", justifyContent:"center", marginTop:20, alignItems: "flex-end"}}>
                        <Pagination variant="outlined" color="secondary" count={count} page={page} onChange={handleChange}/>
                    </Grid>
                }
            </Grid>
        </>
    )
}