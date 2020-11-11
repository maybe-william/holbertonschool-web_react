import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer.js';
import PropTypes from 'prop-types';

function App(props) {
  let mainArea = <Login />;
  if (props.isLoggedIn) {
    mainArea = <CourseList />;
  }
  return (
    <React.Fragment>
    <Notifications />
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
