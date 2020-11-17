import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

function NotificationItem(props) {
  if (props.html === undefined) {
    return (
        <li data-notification-type={props.type} onClick={props.markAsRead}>
          {props.value}
        </li>
    );
  }

  return (
        <li data-notification-type={props.type} onClick={props.markAsRead} dangerouslySetInnerHTML={props.html} />
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  markAsRead: PropTypes.func
};

NotificationItem.defaultProps = {
  type: 'default',
  markAsRead: () => undefined
};

export default NotificationItem;
