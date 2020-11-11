import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer.js';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';

function App(props) {
  const listCourses = [
    {id: 1, name: 'ES6', credit: 60},
    {id: 2, name: 'Webpack', credit: 20},
    {id: 3, name: 'React', credit: 40}
  ];

  const listNotifications = [
    {id: 1, html: undefined, type: "default", value: "New course available"},
    {id: 2, html: undefined, type: "urgent", value: "New resume available"},
    {id: 3, html: { __html: getLatestNotification()} , type: "urgent", value: undefined},
  ];

  let mainArea = <Login />;
  if (props.isLoggedIn) {
    mainArea = <CourseList listCourses={listCourses} />;
  }
  return (
    <React.Fragment>
    <Notifications listNotifications={listNotifications} />
    <div className="App">
      <Header />
      <div className="App-body">
        {mainArea}
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </div>
    </React.Fragment>
  );
}

App.propTypes = {
  isLoggedIn: PropTypes.bool
}

App.defaultProps = {
  isLoggedIn: false
};

export default App;
