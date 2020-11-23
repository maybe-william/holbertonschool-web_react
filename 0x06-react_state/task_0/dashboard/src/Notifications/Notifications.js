import React from 'react';
import ex from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils.js';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
    textFlash: {
        ':hover': {
        animationName: {
            '50%': {
                opacity: '50%'
            },
            '100%': {
                opacity: '100%'
            },
        },
        animationDuration: '1s',
        animationIterationCount: '2',
        },
    },
    bounce: {
        ':hover': {
        cursor: 'pointer',
        animationName: {
            '25%': {
                transform: 'translateY(-5px)'
            },
            '50%': {
                transform: 'translateY(0px)'
            },
            '75%': {
                transform: 'translateY(5px)'
            },
            '100%': {
                transform: 'translateY(0px)'
            },
        },
        animationDuration: '0.5s',
        animationIterationCount: '3',
        }
    },
    borderFlash: {
        ':hover': {
            animationName: {
                '0%': {
                    outline: '3px solid lightblue',
                },
                '100%': {
                    outline: "none",
                },
            },
            animationDuration: '0.25s',
            animationIterationCount: '1',
        }
    },
    menuItem: {
        top: 0,
        right: 0,
        textAlign: "right",
        margin: 10,
        '@media (max-width: 700px)': {
            margin: 0,
            padding: 0,
        }
    },
    notifications: {
        position: "absolute",
        top: 5,
        right: 0,
        textAlign: "left",
        margin: "10px 10px",
        padding: "20px 20px",
        width: 400,
        border: "2px dotted #e0354b",
        backgroundColor: "#fff8f8",
        '@media (max-width: 700px)': {
            top: 0,
            left: 0,
            margin: 0,
            padding: 0,
            width: "100%",
            height: "100%",
            border: "none",
            fontSize: 20,
        }
    }
});

class Notifications extends React.Component {
    constructor (props) {
        super(props);
        this.logClick = this.logClick.bind(this);
        this.markAsRead = this.markAsRead.bind(this);
        this.prevLen = -1;
        this.displayDrawer = undefined;
    }

    shouldComponentUpdate () {
        if (this.props.listNotifications.length !== this.prevLen) {
            this.prevLen = this.props.listNotifications.length;
            return true;
        }
        if (this.props.displayDrawer !== this.displayDrawer) {
            this.displayDrawer = this.props.displayDrawer;
            return true;
        }
        return true;
    }

    logClick() {
        console.log("Close button has been clicked");
    }

    markAsRead(id) {
        console.log(`Notification ${id} has been marked as read`);
    }

    render() {
        let messages = this.props.listNotifications.map((x) =>
            <NotificationItem key={x.id} type={x.type} value={x.value} html={x.html} markAsRead={() => this.markAsRead(x.id)} />
        );
        if (this.props.listNotifications.length <= 0) {
            messages = (<li>No new notification for now</li>);
        }

        let notifs = (
            <div className={css(styles.notifications, styles.borderFlash)} >
            <button aria-label="Close" onClick={this.props.handleHideDrawer} style={{position: "absolute", top: 15, right: 0, visibility: "hidden"}}><img alt="close" src={ex} style={{visibility: "visible", height: "15px", width: "15px"}}/>
            </button>
            <p>
            Here is the list of notifications
            </p>
            <ul>
            {messages}
            </ul>
            </div>
        );
        if (!this.props.displayDrawer) {
            notifs = ''
        }

        return (
            <React.Fragment>
            <div className={css(styles.menuItem)}>
            <p className={css(styles.bounce, styles.textFlash)} onClick={this.props.handleDisplayDrawer}>Your notifications</p>
            </div>
            {notifs}
            </React.Fragment>
        );
    }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => undefined,
  handleHideDrawer: () => undefined,
};

export default Notifications;
