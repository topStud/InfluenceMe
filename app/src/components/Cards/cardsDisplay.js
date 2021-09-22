import Grid from "@material-ui/core/Grid";
import React, {useCallback, useEffect, useRef} from 'react'
import HoverCard from "./hoverCard";
import PropTypes from 'prop-types'

CardsDisplay.propTypes = {
    objList: PropTypes.array.isRequired,
    display: PropTypes.oneOf(['influencers', 'proposals']).isRequired,
    backdrop: PropTypes.exact({
        getter: PropTypes.bool,
        setter: PropTypes.func
    }).isRequired,
    setClickedCard: PropTypes.func.isRequired
}

export default function CardsDisplay({objList, display, backdrop, setClickedCard}) {
    // after each pageSize cards, we add another pageSize cards
    const pageSize = 6
    // the actual data shown to the user (portion of all the data)
    const [currentData, setCurrentData] = React.useState(objList.slice(0,pageSize))
    const [pageNumber, setPageNumber] = React.useState(1)
    // tells when we are updating our currentData
    const [loading, setLoading] = React.useState(false)

    const observer = useRef()
    const lastBookElementRef = useCallback(node => {
        if (loading) return
        // when done loading, releases the old last element of list
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            // checks if we reached the last element of the list (if visible to user)
            if (entries[0].isIntersecting && objList.length > currentData.length) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
                setLoading(true)
                setCurrentData(prev=>[...prev,...objList.slice(pageNumber*pageSize,pageNumber*pageSize + Math.min(pageSize, objList.length)) ])
                setLoading(false)
            }
        })
        // tracking last element
        if (node) observer.current.observe(node)
    }, [loading, objList])

    useEffect(()=>{
        setCurrentData([...objList.slice(0,pageNumber*pageSize) ])
    },[JSON.stringify(objList)])

    return (
        <>
            <Grid container style={{marginLeft:0, width:'inherit', gridColumn: 1}}>
                {currentData.map((obj, index) => {
                    // give reference to last element - tracking it's appearance
                    if (index + 1 === currentData.length) {
                        return (
                            <Grid ref={lastBookElementRef} item style={{margin: 2}} key={obj._id}>
                                <HoverCard infoObj={obj} cardType={display} backdrop={backdrop}
                                           setClickedCard={setClickedCard}/>
                            </Grid>
                        )
                    } else {
                        return (
                            <Grid item style={{margin: 2}} key={obj._id}>
                                <HoverCard infoObj={obj} cardType={display} backdrop={backdrop}
                                           setClickedCard={setClickedCard}/>
                            </Grid>
                        )
                    }
                })}
            </Grid>
        </>
    )
}