import React from 'react';
import './Notifications.css';
import ex from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils.js';

export default function Notifications() {
  function logClick() {
    console.log("Close button has been clicked");
  }

  return (
    <div className="Notifications">
      <button aria-label="Close" onClick={logClick} style={{position: "absolute", top: 15, right: 0, visibility: "hidden"}}><img alt="close" src={ex} style={{visibility: "visible", height: "15px", width: "15px"}}/>
      </button>
      <p>
        Here is the list of notifications
      </p>
      <ul>
        <li data-priority="default">
          New course available
        </li>
        <li data-priority="urgent">
          New resume available
        </li>
        <li data-priority="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification()}} />
      </ul>
    </div>
  );
}
