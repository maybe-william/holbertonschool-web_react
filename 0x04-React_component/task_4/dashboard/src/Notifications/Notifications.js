import React from 'react';
import './Notifications.css';
import ex from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils.js';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape';

class Notifications extends React.Component {
    constructor (props) {
        super(props);
        this.logClick = this.logClick.bind(this);
        this.markAsRead = this.markAsRead.bind(this);
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
            <div className="Notifications" >
            <button aria-label="Close" onClick={this.logClick} style={{position: "absolute", top: 15, right: 0, visibility: "hidden"}}><img alt="close" src={ex} style={{visibility: "visible", height: "15px", width: "15px"}}/>
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
            <div className="menuItem">
            <p>Your notifications</p>
            </div>
            {notifs}
            </React.Fragment>
        );
    }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape)
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: []
};

export default Notifications;
