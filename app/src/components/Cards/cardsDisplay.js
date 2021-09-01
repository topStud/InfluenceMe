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
        }
    }, [JSON.stringify(objList)])

    return (
        <>
            <div style={{display:"grid", gridTemplateColumns: '75% 25%', gridTemplateRows: '1fr'}}>
                <Grid container style={{marginLeft:30, width:'inherit', gridColumn: 1}}>
                    {currentData(objList).map((obj) => (
                        <Grid item style={{margin:10}} key={obj._id}>
                            <HoverCard infoObj={obj} cardType={display} backdrop={backdrop} setClickedProposal={setClickedProposal}/>
                        </Grid>
                    ))}
                    {
                        count > 1 &&
                        <Grid item sm={10} style={{display: "flex", justifyContent:"center"}}>
                            <Pagination variant="outlined" color="secondary" count={count} page={page} onChange={handleChange}/>
                        </Grid>
                    }
                </Grid>
                <Grid container style={{gridColumn:2, gridRow:1}}>
                    <Grid item>
                        <h1>filtering options</h1>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}