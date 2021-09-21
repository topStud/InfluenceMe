import Grid from "@material-ui/core/Grid";
import React, {useCallback, useEffect, useRef} from 'react'
import HoverCard from "./hoverCard";

export default function CardsDisplay({objList, display, backdrop, setClickedCard}) {
    const pageSize = 6
    const [currentData, setCurrentData] = React.useState(objList.slice(0,pageSize))
    const [pageNumber, setPageNumber] = React.useState(1)
    const [loading, setLoading] = React.useState(false)

    const observer = useRef()
    const lastBookElementRef = useCallback(node => {
        if (loading) return
        if (observer.current) observer.current.disconnect()
        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && objList.length > currentData.length) {
                setPageNumber(prevPageNumber => prevPageNumber + 1)
                setLoading(true)
                setCurrentData(prev=>[...prev,...objList.slice(pageNumber*pageSize,pageNumber*pageSize + Math.min(pageSize, objList.length)) ])
                setLoading(false)
            }
        })
        if (node) observer.current.observe(node)
    }, [loading, objList])

    useEffect(()=>{
        setCurrentData([...objList.slice(0,pageNumber*pageSize) ])
    },[JSON.stringify(objList)])

    return (
        <>
            <Grid container style={{marginLeft:0, width:'inherit', gridColumn: 1}}>
                {currentData.map((obj, index) => {
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