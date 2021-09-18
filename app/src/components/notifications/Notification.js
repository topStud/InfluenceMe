import React from "react";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import {Divider, Menu, MenuItem, withStyles} from "@material-ui/core";
import {Link} from 'react-router-dom';
import Typography from "@material-ui/core/Typography";
import CloseIcon from '@material-ui/icons/Close';
import {AnswerOfServer} from "../../utils";

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
            callServer: {
                delete: false,
                seen: false,
                clearAll: false,
                handedNotification: {}
            },
            expandNotificationsNumber: 1,
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
        this.setState({...this.state, expandNotificationsNumber:1, anchorEl: event.currentTarget});
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
            anchorEl: null,
        })
    }

    onNotificationClick = (notification) => {
        if (notification.seen === true) {
            this.closeNotifications()
            return
        }
        this.setState({
            ...this.state,
            callServer: {
                ...this.state.callServer,
                handedNotification: notification,
                seen: true
            }
        })
    }

    deleteNotification = (notification) => {
        this.setState({
            ...this.state,
            callServer: {
                ...this.state.callServer,
                handedNotification: notification,
                delete: true
            }
        })
    }

    onClickClearAll = () => {
        this.setState({
            ...this.state,
            callServer: {
                ...this.state.callServer,
                clearAll: true
            }
        })
    }

    onViewMoreClick = () => {
        this.setState({
            ...this.state,
            expandNotificationsNumber: this.state.expandNotificationsNumber + 1
        })
    }

    render() {
        const { classes } = this.props;
        const { listItems } = this.state;
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
            if (hours < 9 && days === 0)
                allTimestamp[0].fullList.push(notification)
            else
                allTimestamp[1].fullList.push(notification)
        });
        allTimestamp[0].fullList.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1)
        allTimestamp[1].fullList.sort((a, b) => (a.createdAt < b.createdAt) ? 1 : -1)
        allTimestamp[0].list = allTimestamp[0].fullList.slice(0,Math.min(viewMoreJump * this.state.expandNotificationsNumber, allTimestamp[0].fullList.length))
        if (allTimestamp[0].list.length < this.state.expandNotificationsNumber * viewMoreJump){
            allTimestamp[1].list = allTimestamp[1].fullList.slice(0,Math.min(viewMoreJump * this.state.expandNotificationsNumber - allTimestamp[0].list.length, allTimestamp[1].fullList.length))
        }
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
                                <button onClick={()=>this.onClickClearAll()} className={classes.clearAll} style={{
                                    backgroundColor: "transparent",
                                    border: '1px solid transparent',
                                    cursor: "pointer"
                                }}>clear all
                                </button>
                            </div>
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
                            {this.state.listItems.length > (this.state.expandNotificationsNumber * viewMoreJump) && <MenuItem style={{display: "flex", justifyContent: 'center', color: '#F27746'}}
                                      onClick={this.onViewMoreClick}>
                                VIEW MORE
                            </MenuItem>}
                        </div>}
                    </Menu>
                }
                {this.state.callServer.delete && <AnswerOfServerClassOption
                    url={`/api/notifications/${this.state.callServer.handedNotification._id}/${this.props.id}`}
                    methodObj={{method: 'DELETE'}} sucMsg={''} failMsg={'Couldn\'t delete notification'} sucFunc={()=> {
                    this.setState({
                        ...this.state,
                        listItems: this.state.listItems.filter(o => o._id !== this.state.callServer.handedNotification._id),
                        callServer: {
                            ...this.state.callServer,
                            delete: false,
                            handedNotification: {}
                        }
                    });
                }}/>}
                {this.state.callServer.seen && <AnswerOfServerClassOption
                    url={`/api/notifications/${this.state.callServer.handedNotification._id}`} methodObj={{method: 'PUT'}}
                    sucMsg={''} failMsg={'An Error occurred'} sucFunc={()=> {
                        // updating the notifications' list
                        let items = [...this.state.listItems];
                        let index = items.findIndex(i=> i._id === this.state.callServer.handedNotification._id)
                        this.state.callServer.handedNotification.seen = true
                        items[index] = this.state.callServer.handedNotification
                        this.setState({
                            ...this.state,
                            listItems: items,
                            anchorEl: null,
                            callServer:{
                                ...this.state,
                                seen: false,
                                handedNotification: {}
                            }
                        })
                }}/>}
                {this.state.callServer.clearAll && <AnswerOfServerClassOption
                    url={`/api/notifications/${this.props.id}`} methodObj={{method: 'DELETE'}}
                    sucMsg={''} failMsg={'An Error occurred'} sucFunc={()=> {
                    this.setState({
                        ...this.state,
                        listItems: [],
                        anchorEl: null,
                        callServer: {
                            ...this.state,
                            clearAll: false,
                        }
                    })
                }}/>}
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

const AnswerOfServerClassOption = ({url, methodObj, sucMsg, failMsg, sucFunc}) => {
     const [callServer, setCallServer] = React.useState(true)
     return (<AnswerOfServer callServerObj={{getter: callServer, setter: setCallServer}} failMsg={failMsg}
                             methodObj={methodObj} sucMsg={sucMsg} url={url} sucFunc={sucFunc}/>)
}

export default withStyles(styles)(Notification);