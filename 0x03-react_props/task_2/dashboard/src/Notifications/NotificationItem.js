import React from 'react';
import './Notifications.css';
import ex from '../assets/close-icon.png';

export default function NotificationItem(props) {
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
