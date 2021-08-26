import Grid from "@material-ui/core/Grid";
import React, {useEffect} from 'react'
import ProposalCard from "./proposalCard";
import {Pagination} from "@material-ui/lab";

export default function Proposals({proposalsList, options, userType}) {
    // pagination
    let [page, setPage] = React.useState(1);
    const PER_PAGE = 7;
    const [count ,setCount] = React.useState(Math.ceil(proposalsList.length / PER_PAGE))

    const handleChange = (e, p) => {
        setPage(p);
    };

    function currentData(data) {
        const begin = (page - 1) * PER_PAGE;
        const end = begin + PER_PAGE;
        return data.slice(begin, end);
    }

    useEffect(()=>{
        if (proposalsList !== null) {
            setCount(Math.ceil(proposalsList.length / PER_PAGE))
        }
    }, [JSON.stringify(proposalsList)])

    return (
        <>
            {currentData(proposalsList).map((proposal) => (
                <Grid item xs={12} sm={4} key={proposal._id}>
                    <ProposalCard infoObj={proposal} options={options} userType={userType}/>
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