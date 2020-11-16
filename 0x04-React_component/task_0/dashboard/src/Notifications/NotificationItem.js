import React from 'react';
import './Notifications.css';
import PropTypes from 'prop-types';

function NotificationItem(props) {
  if (props.html === undefined) {
    return (
        <li data-notification-type={props.type}>
          {props.value}
        </li>
    );
  }

  return (
        <li data-notification-type={props.type} dangerouslySetInnerHTML={props.html} />
  );
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  html: PropTypes.shape({
    __html: PropTypes.string,
  })
};

NotificationItem.defaultProps = {
  type: 'default'
};

export default NotificationItem;
