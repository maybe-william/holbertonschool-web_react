import React from 'react';
import './Notifications.css';
import ex from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils.js';
import NotificationItem from './NotificationItem';
import PropTypes from 'prop-types';

function Notifications(props) {
  function logClick() {
    console.log("Close button has been clicked");
  }
  let notifs = (
    <div className="Notifications" >
      <button aria-label="Close" onClick={logClick} style={{position: "absolute", top: 15, right: 0, visibility: "hidden"}}><img alt="close" src={ex} style={{visibility: "visible", height: "15px", width: "15px"}}/>
      </button>
      <p>
        Here is the list of notifications
      </p>
      <ul>
        <NotificationItem type="default" value="New course available"/>
        <NotificationItem type="urgent" value="New resume available"/>
        <NotificationItem type="urgent" html={{ __html: getLatestNotification()}}/>
      </ul>
    </div>
  );
  if (!props.displayDrawer) {
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

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
};

Notifications.defaultProps = {
  displayDrawer: false
};

export default Notifications;
