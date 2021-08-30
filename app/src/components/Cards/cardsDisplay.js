import Grid from "@material-ui/core/Grid";
import React, {useEffect} from 'react'
import ProposalCard from "./proposalCard";
import {Pagination} from "@material-ui/lab";
import InfluencerCard from './influencerCard'

export default function CardsDisplay({objList, options, userType, display}) {
    // pagination
    let [page, setPage] = React.useState(1);
    const PER_PAGE = 7;
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
            {currentData(objList).map((obj) => (
                <Grid item xs={12} sm={4} key={obj._id}>
                    {display === 'Cards' && <ProposalCard infoObj={obj} options={options} userType={userType}/>}
                    {display === 'influencers' && <InfluencerCard infoObj={obj}/>}
                </Grid>
            ))}
            {
                count > 1 &&
                <Grid item xs={12} sm={12} style={{display: "flex", justifyContent:"center"}}>
                    <Pagination variant="outlined" color="secondary" count={count} page={page} onChange={handleChange}/>
                </Grid>
            }
        </>
    )
}