import React from "react";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import {Divider, Menu, MenuItem, Snackbar, withStyles} from "@material-ui/core";
import {Link} from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import CloseIcon from '@material-ui/icons/Close';
import {Avatar} from "@mui/material";
import {Alert} from "@material-ui/lab";

// amount of notifications increases by viewMoreJump each time
const viewMoreJump = 3

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
            snackbar: {
                open: false,
                msg: ''
            },
            expandNotificationsNumber: 1,
            unseenNumber: 0
        };
        this.deleteNotification = this.deleteNotification.bind(this)
    }

    static getDerivedStateFromProps(props,state) {
        return {...state, listItems:  props.listItems, unseenNumber: props.unseen}
    }

    // opens notification window
    toggleNotification = (event) => {
        if (this.state.unseenNumber !== 0) {
            this.props.setUnseen(0)
            fetch(`/api/notifications/reset-unseen/${this.props.user.getter._id}`, {method: 'PUT'}).catch(e=>console.log(e))
        }
        this.setState({...this.state, expandNotificationsNumber:1, anchorEl: event.currentTarget});
    };

    // function to generate date according to timestamp
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
        return `${n} ${monthNames[m]}`
    };

    closeNotifications = () => {
        this.setState({
            ...this.state,
            anchorEl: null,
        })
    }

    onNotificationClick = (notification) => {
        // if notification has not been clicked before, updates it with server (calls it)
        if (notification.seen !== true) {
            this.AnswerOfServer(`/api/notifications/${notification._id}`,
                {method: 'PUT'}, 'An Error occurred', ()=> {
                    // updating the notifications' list
                    let items = [...this.state.listItems];
                    let index = items.findIndex(i=> i._id === notification._id)
                    notification.seen = true
                    items[index] = notification
                    this.closeNotifications()
                    this.props.setNotificationList(items)
                })
        } else {
            this.closeNotifications()
        }
    }

    deleteNotification = (notification) => {
        this.AnswerOfServer(`/api/notifications/${notification._id}/${this.props.user.getter._id}`,
            {method: 'DELETE'}, 'Couldn\'t delete notification', ()=> {
                // updates list to be without the deleted notification
                this.props.setNotificationList(this.state.listItems.filter(o => o._id !== notification._id))
            })
    }

    AnswerOfServer = (url, methodObj, failMsg, sucFunc) => {
        fetch(url, methodObj).then(res => {
            if (!res.ok) {
                this.setState({
                    ...this.state,
                    snackbar: {
                        open: true,
                        msg: 'An error occurred'
                    }
                })
                throw new Error('Response not returned with status 200')
            }
            return res.json()
        }).then(response => {
            if (response.status === 'ok') {
                sucFunc(response)
            } else {
                if ('error' in response) {
                    this.setState({
                        ...this.state,
                        snackbar: {
                            open: true,
                            msg: response.error
                        }
                    })
                } else {
                    this.setState({
                        ...this.state,
                        snackbar: {
                            open: true,
                            msg: failMsg
                        }
                    })
                }
            }
        }).catch((error) => {
            console.log(error)
        });
    }

    onClickClearAll = () => {
        this.AnswerOfServer(`/api/notifications/${this.props.user.getter._id}`,
            {method: 'DELETE'}, 'An error occurred', ()=> {
                // updates state in case of success
                this.setState({
                    ...this.state,
                    listItems: [],
                    anchorEl: null,
                })
            })
        this.props.setNotificationList([])
    }

    onViewMoreClick = () => {
        // expands amount of the notifications visible to the user
        this.setState({
            ...this.state,
            expandNotificationsNumber: this.state.expandNotificationsNumber + 1
        })
    }

    handleCloseSnackbar = () => {
        this.setState({
            ...this.state,
            snackbar: {
                open: false,
                msg: ''
            }
        })
    };

    render() {
        const { classes } = this.props;
        const { listItems } = this.state;
        // prepares objects to split the notifications to 2 groups.
        // fullList - all the notifications in group.
        // list - visible notifications to user in group.
        const allTimestamp = [
            {
                groupName: 'New Notifications',
                fullList: [],
                list: []
            },
            {
                groupName: 'Old Notifications',
                fullList: [],
                list: []
            }
        ];
        listItems.map((notification) => {
            // checks for 10 hours difference
            const days = daysDifferent(notification.createdAt)
            const hours = hoursDifferent(notification.createdAt)
            // if a notification exists ess than 10 hours, it will be shown as a new notification
            if (hours < 9 && days === 0)
                allTimestamp[0].fullList.push(notification)
            else
                allTimestamp[1].fullList.push(notification)
        });
        // sorts list according to creation time. latest at the beginning.
        allTimestamp[0].fullList.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1)
        allTimestamp[1].fullList.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1)
        // sets the list of notifications that will be visible to user. first new and then old notifications.
        allTimestamp[0].list = allTimestamp[0].fullList.slice(0,Math.min(viewMoreJump * this.state.expandNotificationsNumber, allTimestamp[0].fullList.length))
        if (allTimestamp[0].list.length < this.state.expandNotificationsNumber * viewMoreJump){
            allTimestamp[1].list = allTimestamp[1].fullList.slice(0,Math.min(viewMoreJump * this.state.expandNotificationsNumber - allTimestamp[0].list.length, allTimestamp[1].fullList.length))
        }
        return (
            <>
                {/*icon of notifications*/}
                <IconButton color="inherit" style={{height: '80%', alignSelf:"center"}} onClick={(event) => this.toggleNotification(event)}>
                    <Badge badgeContent={this.state.unseenNumber}
                           hidden={this.state.unseenNumber === 0} color="secondary">
                        <NotificationsIcon style={{color: 'black'}}/>
                    </Badge>
                </IconButton>
                {/*menu item that contains all notifications*/}
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
                    {/* if there are no notifications, tells it to user*/}
                    {listItems.length === 0 ?
                        <Typography style={{margin: 10, fontSize: '0.8em', color: '#747474'}}>You Did Not
                            Get New Notifications </Typography> :
                        <div>
                            {/*clear all notifications option*/}
                            <div style={{display: "flex", justifyContent: 'flex-end'}}>
                                <button onClick={()=>this.onClickClearAll()} className={classes.clearAll} style={{
                                    backgroundColor: "transparent",
                                    border: '1px solid transparent',
                                    cursor: "pointer"
                                }}>clear all
                                </button>
                            </div>
                            {/*for each group creates notifications*/}
                            {allTimestamp.map((timestamp, k) => {
                                return (
                                    <div key={k}>
                                        {timestamp.list.length !== 0 && <p
                                            style={{
                                                fontSize: "15px",
                                                marginLeft: "5px",
                                                textAlign: "left",
                                                color: "#747474",
                                                display: "initial"
                                            }}
                                        >
                                            {/*title of notifications group*/}
                                            <span style={{display: "inline-block", width: "50%", marginBottom: 10, marginTop: 10}}>
                                              {timestamp.groupName}
                                            </span>
                                        </p>}
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
                                            const date = this.generateDate(d)
                                            return (
                                                <div key={key}>
                                                    {/*each notifications transfers user to different page accordingly*/}
                                                    <Link
                                                        to={`/${this.props.userType}/${this.props.user.getter._id}/${obj.messageType === 1
                                                            ? obj.senderID+'?id='+obj.itemID : `contract/${obj.itemID}`}`} style={{width: '100%'}}>
                                                        <MenuItem className={'' + (!obj.seen ? classes.backgroundUnseen : classes.backgroundSeen)}
                                                        onClick={() => this.onNotificationClick(obj)}>
                                                            <div style={{
                                                                display: "flex",
                                                                justifyContent: 'space-between',
                                                                width: '320px'
                                                            }}>
                                                                {/*photo of sender*/}
                                                                <Avatar src={obj.photo} style={{marginRight: 10, alignSelf: "center", width:50, height:50}}/>
                                                                {/*content of notification*/}
                                                                <Typography style={{
                                                                    fontFamily: 'Rubik',
                                                                    fontSize: "13px",
                                                                    alignSelf: "flex-start",
                                                                    whiteSpace: "pre-wrap",
                                                                    marginRight: 10
                                                                }}>{obj.message}</Typography>
                                                                {/*date of notification*/}
                                                                <div
                                                                    style={{
                                                                        fontSize: "11px",
                                                                        fontWeight: 700,
                                                                        color: obj.seen ? "#747474" : '#1F75A6',
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
                                                    {/*each notification has an option of deletion*/}
                                                    <IconButton
                                                        style={{
                                                            padding: 3,
                                                            float: "right",
                                                            marginTop: '-8%',
                                                            marginRight: 15
                                                        }}
                                                        onClick={() => this.deleteNotification(obj)}>
                                                        <CloseIcon className={classes.small} style={{color: '#A68617'}}/>
                                                    </IconButton>
                                                    <Divider style={{backgroundColor: 'rgba(31,117,166,0.08)', height:3}}/>
                                                </div>
                                            );
                                        })
                                        }
                                    </div>
                                );
                            })}
                            {/*view more option*/}
                            {this.state.listItems.length > (this.state.expandNotificationsNumber * viewMoreJump) && <MenuItem style={{display: "flex", justifyContent: 'center', color: '#F27746'}}
                                      onClick={this.onViewMoreClick}>
                                VIEW MORE
                            </MenuItem>}
                        </div>}
                    </Menu>
                }
                <Snackbar open={this.state.snackbar.open} autoHideDuration={6000} onClose={this.handleCloseSnackbar}
                          anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}>
                    <Alert onClose={this.handleCloseSnackbar} severity={'error'} style={{fontSize:14, fontFamily:'Rubik'}}>
                        <div>{this.state.snackbar.msg}</div>
                    </Alert>
                </Snackbar>
            </>
        );
    }
}

// calculates hours different between current time to given time as parameter
function hoursDifferent(timestamp) {
    let diffInMilliSeconds = Math.abs(new Date().getTime() - new Date(timestamp).getTime()) / 1000;
    return Math.floor(diffInMilliSeconds / 3600) % 24;
}

// calculates days different between current time to given time as parameter
function daysDifferent(timestamp) {
    let diffInMilliSeconds = Math.abs(new Date().getTime() - new Date(timestamp).getTime()) / 1000;
    return Math.floor(diffInMilliSeconds / 86400);
}

export default withStyles(styles)(Notification);