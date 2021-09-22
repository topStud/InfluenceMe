import Typography from "@material-ui/core/Typography";
import {Divider} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    contact:{
        display:"flex",
        marginTop: 70,
        justifyContent:"space-between",
        height: 100
    },
    title: {
        fontSize: '2.5em',
        fontFamily: 'Rubik',
        fontWeight:500,
        color: '#1F75A6',
        textAlign: "center",
        marginBottom: 30
    },
    userContact: {
        display: "flex",
        flexDirection: "column",
        alignItems:"center",
        width:'100%'
    },
    sectionTitle: {
        fontSize: '1.3em',
        fontWeight: 300,
        fontFamily: 'Rubik',
        color: '#A68617'
    },
    userContactTitle: {
        textDecoration: 'underline',
        color: '#A68617',
        textAlign: "center"
    },
    contactInfo: {
        userSelect: 'text',
        msUserSelect: 'text',
        textAlign: 'center'
    },
}));

export default function Contract({contractInfo}) {
    const classes = useStyles()

    // transfers the date given by the server to a date in US format to show the user.
    function fromServerDateToUSDate(dateWithTime) {
        const date = dateWithTime.substring(0,dateWithTime.indexOf('T'))
        const usDateWithTime = new Date(date).toLocaleString('en-US')
        return usDateWithTime.substring(0,usDateWithTime.indexOf(','))
    }

    return(
        <div>
            <Typography className={classes.title}>
                {contractInfo.title} contract
            </Typography>
            <p>
                The following contract is binding the influencer named <b>{contractInfo.influencerName} </b>
                and the company named <b>{contractInfo.companyName}</b> in the next time frame:<br/><br/>
                The collaboration starts at: {fromServerDateToUSDate(contractInfo.startDay)}.<br/>
                {contractInfo.endDay !== '' ? `The collaboration ends at: ${fromServerDateToUSDate(contractInfo.endDay)}.`:
                    'The end of the collaboration was not determined.'}<br/><br/>
                It deals with the company's proposal named <b>{contractInfo.title}</b> and relates to the categories
                {contractInfo.categories.join(' ')}.<br/><br/>
            </p>
            <Typography className={classes.sectionTitle}>
                Details of the contract
            </Typography>
            <Divider/>
            <p>{contractInfo.details}</p>
            <Typography className={classes.sectionTitle}>
                {contractInfo.companyName}'s payment
            </Typography>
            <Divider/>
            <p>{contractInfo.payment}</p>
            <div className={classes.contact}>
                <div className={classes.userContact}>
                    <Typography className={classes.userContactTitle}>
                        Your contact information
                    </Typography>
                    <p className={classes.contactInfo}>{contractInfo.influencerEmail}<br/>
                        {contractInfo.influencerPhone !== '' && `${contractInfo.influencerPhone}`}
                    </p>
                </div>
                <Divider orientation={"vertical"} style={{height: '100%'}}/>
                <div className={classes.userContact}>
                    <Typography className={classes.userContactTitle}>
                        {contractInfo.companyName}'s contact information
                    </Typography>
                    <p className={classes.contactInfo}>{contractInfo.companyEmail}<br/>
                        {contractInfo.companyPhone !== '' && `${contractInfo.companyPhone}`}</p>
                </div>
            </div>
        </div>
    )
}