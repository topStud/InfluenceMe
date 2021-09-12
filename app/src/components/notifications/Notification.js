import React from "react";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import {Menu, MenuItem, Snackbar, withStyles} from "@material-ui/core";
import {Link} from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import CloseIcon from '@material-ui/icons/Close';
import {Alert} from "@material-ui/lab";

const styles = (theme) => ({
    clearAll: {
        "&:hover": {
            textDecoration: 'underline',
        }
    },
    small: {
        width: theme.spacing(2) +4,
        height: theme.spacing(2)+4,
    },
    backgroundUnseen: {
        backgroundColor: 'rgba(31,117,166,0.14)',
        "&:hover": {
            backgroundColor: 'rgba(31,117,166,0.18)'
        }
    },
    backgroundSeen: {
        backgroundColor: 'transparent',
        "&:hover": {
            backgroundColor: 'rgba(0, 0, 0, 0.04)'
        }
    }
});


class Notification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listItems: [],
            anchorEl: null,
            snackbarError: {
                msg: '',
                open: false
            }
        };
    }
    componentDidMount() {
        this.setState({...this.state, listItems: this.props.listItems });
    }
    componentDidUpdate(previousProps,prevState, snapShot) {
        if (previousProps.listItems !== this.props.listItems) {
            this.setState({...this.state, listItems: this.props.listItems });
        }
    }
    toggleNotification = (event) => {
        this.setState({...this.state, anchorEl: event.currentTarget});
    };
    generateDate = timeStamp => {
        const d = new Date(timeStamp);
        const n = d.getDate();
        const m = d.getMonth();
        const monthNames = [
            "JAN",
            "FEB",
            "MAR",
            "APR",
            "MAY",
            "JUN",
            "JUL",
            "AUG",
            "SEP",
            "OCT",
            "NOV",
            "DEC"
        ];
        return { date: `${n} ${monthNames[m]}`, time: timeStamp };
    };

    closeNotifications = () => {
        this.setState({
            ...this.state,
            anchorEl: null
        })
    }
    onNotificationClick = (notification) => {
        if (notification.seen === true) {
            this.closeNotifications()
            return
        }
        fetch(`/api/notifications/${notification._id}`, {method: 'PUT'}).then(res=>{
            if (!res.ok) {
                this.setState({
                    ...this.state,
                    snackbarError: {
                        msg: 'Connection problem',
                        open: true
                    },
                    anchorEl: null
                })
            }
            return res.json()
        }).then(res=>{
            if (res.status === 'error') {
                this.setState({
                    ...this.state,
                    snackbarError: {
                        msg: res.error,
                        open: true
                    },
                    anchorEl: null
                })
            } else {
                // updating the notifications' list
                let items = [...this.state.listItems];
                let index = items.findIndex(i=> i._id === notification._id)
                notification.seen = true
                items[index] = notification
                this.setState({
                    ...this.state,
                    listItems: items,
                    anchorEl: null,
                })
            }
        }).catch((error) => {
            console.log(error)
        });
    }
    onClickClearAll = () => {
        console.log('clear all')
    }
    handleCloseSnackbar = () => {
        this.setState({
            ...this.state,
            snackbarError: {
                msg: '',
                open: false
            }
        })
    }
    render() {
        const { classes } = this.props;
        const { listItems } = this.state;
        const allTimestamp = [
            {
                groupName: 'New Notifications',
                list: []
            },
            {
                groupName: 'Old Notifications',
                list: []
            }
        ];
        listItems.map((notification) => {
            // checks for 10 hours difference
            const days = daysDifferent(notification.createdAt)
            const hours = hoursDifferent(notification.createdAt)
            if (hours < 9 && days === 0)
                allTimestamp[0].list.push(notification)
            else
                allTimestamp[1].list.push(notification)
        });
        allTimestamp[0].list.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1)
        allTimestamp[1].list.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1)
        return (
            <>
                <IconButton color="inherit" style={{height: '80%', alignSelf:"center"}} onClick={(event) => this.toggleNotification(event)}>
                    <Badge badgeContent={this.props.unseen} hidden={this.props.unseen === 0} color="secondary">
                        <NotificationsIcon style={{color: 'black'}}/>
                    </Badge>
                </IconButton>
                <Menu
                    id="notification-menu"
                    getContentAnchorEl={null}
                    anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
                    anchorEl={this.state.anchorEl}
                    keepMounted
                    transformOrigin={{vertical: 'top', horizontal: 'right'}}
                    transitionDuration={200}
                    open={Boolean(this.state.anchorEl)}
                    onClose={() => {
                        this.closeNotifications()
                    }}
                    disableScrollLock={true}
                    style={{position: 'fixed'}}
                >
                    {listItems.length === 0 ?
                        <Typography style={{margin: 10, fontSize: '0.8em', color: '#747474'}}>You Did Not
                            Get New Notifications </Typography> :
                        <div>
                            <div style={{display: "flex", justifyContent: 'flex-end'}}>
                                <button onClick={this.onClickClearAll} className={classes.clearAll} style={{
                                    backgroundColor: "transparent",
                                    border: '1px solid transparent',
                                    cursor: "pointer"
                                }}>clear all
                                </button>
                            </div>
                            {allTimestamp.map((timestamp, k) => {
                                return (
                                    <div key={k}>
                                        <p
                                            style={{
                                                fontSize: "15px",
                                                marginLeft: "5px",
                                                textAlign: "left",
                                                color: "#747474",
                                                display: "initial"
                                            }}
                                        >
                                <span style={{display: "inline-block", width: "50%", marginBottom: 10, marginTop: 10}}>
                                  {timestamp.groupName}
                                </span>
                                        </p>
                                        {timestamp.list.map((obj, key) => {
                                            // calculates time for current day
                                            const d = new Date(obj.createdAt);
                                            let min = d.getMinutes();
                                            if (min < 10) {
                                                min = '0' + min
                                            }
                                            let hours = d.getHours();
                                            if (hours < 10) {
                                                hours = '0' + hours
                                            }
                                            const dayDifferent = daysDifferent(obj.createdAt)
                                            const date = this.generateDate(d).date
                                            return (
                                                <div key={key}>
                                                    <Link
                                                        to={`/${this.props.userType}/${this.props.id}/${obj.messageType === 1
                                                            ? obj.senderID+'?id='+obj.itemID : obj.messageType === 2 ? `contract/${obj.itemID}` :
                                                                'personal/currentCollaborations'}`} style={{width: '100%'}}>
                                                        <MenuItem className={'' + (!obj.seen ? classes.backgroundUnseen : classes.backgroundSeen)}
                                                        onClick={() => this.onNotificationClick(obj)}>
                                                            <div style={{
                                                                display: "flex",
                                                                justifyContent: 'space-between',
                                                                width: '320px'
                                                            }}>
                                                                <Typography style={{
                                                                    fontFamily: 'Rubik',
                                                                    fontSize: "13px",
                                                                    alignSelf: "flex-start",
                                                                    whiteSpace: "pre-wrap",
                                                                    marginRight: 10
                                                                }}>{obj.message}</Typography>
                                                                <div
                                                                    style={{
                                                                        fontSize: "11px",
                                                                        fontWeight: 700,
                                                                        color: "#747474",
                                                                        display: "inline-flex",
                                                                        flexDirection: "column",
                                                                        justifyContent: "space-between",
                                                                        alignItems: "center"
                                                                    }}
                                                                >
                                                                    {dayDifferent < 1 ? `${hours} ${min}` : dayDifferent === 1 ? 'Yesterday' : date}
                                                                </div>
                                                            </div>
                                                        </MenuItem>
                                                    </Link>
                                                    <IconButton
                                                        style={{
                                                            padding: 3,
                                                            float: "right",
                                                            marginTop: '-8%',
                                                            marginRight: 15
                                                        }}
                                                        onClick={() => {}}>
                                                        <CloseIcon className={classes.small} style={{color: '#A68617'}}/>
                                                    </IconButton>
                                                </div>
                                            );
                                        })
                                        }
                                    </div>
                                );
                            })}
                            <MenuItem style={{display: "flex", justifyContent: 'center', color: '#F27746'}}>
                                VIEW MORE
                            </MenuItem>
                        </div>}
                    </Menu>
                }
                <Snackbar open={this.state.snackbarError.open} autoHideDuration={6000} onClose={this.handleCloseSnackbar} anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
                    <Alert onClose={this.handleCloseSnackbar} severity={'error'} style={{fontSize:14, fontFamily:'Rubik'}}>
                        <div>{this.state.snackbarError.msg}</div>
                    </Alert>
                </Snackbar>
            </>
        );
    }
}


function hoursDifferent(timestamp) {
    let diffInMilliSeconds = Math.abs(new Date().getTime() - new Date(timestamp).getTime()) / 1000;
    return Math.floor(diffInMilliSeconds / 3600) % 24;
}

function daysDifferent(timestamp) {
    let diffInMilliSeconds = Math.abs(new Date().getTime() - new Date(timestamp).getTime()) / 1000;
    return Math.floor(diffInMilliSeconds / 86400);
}

export default withStyles(styles)(Notification);