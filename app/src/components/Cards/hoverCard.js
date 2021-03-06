import styled from "@emotion/styled/macro";
import GeneralCard from './generalCard';
import PropTypes from 'prop-types'

const DisplayOver = styled.div({
    height: "100%",
    left: "0",
    position: "absolute",
    top: "0",
    width: 'inherit',
    zIndex: 2,
    maxWidth: 270,
    border: '1px solid transparent',
    borderRadius: '4px',
    transition: "background-color 350ms ease",
    backgroundColor: "transparent",
    boxSizing: "border-box",
});

const Hover = styled.div({
    opacity: 0,
    transition: "opacity 350ms ease",
});

const SubTitle = styled.h4({
    padding: 5,
    fontFamily: "Helvetica",
    transform: "translate3d(0,50px,0)",
    transition: "transform 350ms ease",
});

const Paragraph = styled.p({
    padding: 15,
    transform: "translate3d(0,50px,0)",
    transition: "transform 350ms ease",
});

const Background = styled.div({
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    color: "#FFF",
    position: "relative",
    width:270,
    height: 240,
    cursor: "pointer",
    [`:hover ${DisplayOver}`]: {
        backgroundColor: "rgba(0,0,0,.6)",
    },
    [`:hover ${SubTitle}, :hover ${Paragraph}`]: {
        transform: "translate3d(0,0,0)",
    },
    [`:hover ${Hover}`]: {
        opacity: 1,
    },
});

HoverCard.propTypes = {
    infoObj: PropTypes.object.isRequired,
    cardType: PropTypes.oneOf(['influencers', 'proposals']),
    backdrop: PropTypes.exact({
        getter: PropTypes.bool,
        setter: PropTypes.func
    }).isRequired,
    setClickedCard: PropTypes.func.isRequired
}

export default function HoverCard({infoObj, cardType, backdrop, setClickedCard}) {
    // opens card specific dialog window according to obj we gibe the setClickedCard function.
    function onClickCard() {
        backdrop.setter(true)
        setClickedCard(infoObj)
    }

    return(
        <Background>
            <GeneralCard infoObj={infoObj} cardType={cardType}/>
            <DisplayOver onClick={onClickCard}>
                {/*shown when mouse hovers the card*/}
                <Hover>
                    {/*content of hover*/}
                    <SubTitle style={{textAlign: 'center'}}>About Me</SubTitle>
                    <Paragraph style={{textAlign: 'center'}}>
                        { cardType === 'influencers' ? infoObj.bio.substring(0,120) +
                            (infoObj.bio.length > 120 ? '...' : '') : infoObj.description.substring(0,120) +
                            (infoObj.description.length > 120 ? '...' : '')
                        }
                    </Paragraph>
                </Hover>
            </DisplayOver>
        </Background>
    )
}