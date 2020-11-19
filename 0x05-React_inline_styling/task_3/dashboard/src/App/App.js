import React from 'react';
import ReactDOM from 'react-dom';
import Notifications from '../Notifications/Notifications.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import CourseList from '../CourseList/CourseList';
import Footer from '../Footer/Footer.js';
import PropTypes from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
    app: {
        fontFamily: "Arial, Helvetica, sans-serif",
        textAlign: "center",
        height: "95vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    appBody: {
        fontWeight: "bold",
        textAlign: "left",
        height: "100%",
        padding: "50px",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-start"
    },
    appFooter: {
        borderTop: "3px solid #e0354b",
        height: 50
    }
});

class App extends React.Component {

    constructor(props) {
        super(props)
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount() {
        window.addEventListener("keydown", this.handleLogout);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleLogout);
    }

    handleLogout (event) {
        if (event.ctrlKey && event.key === 'h') {
            event.preventDefault();
            alert("Logging you out");
            this.props.logOut();
        }
    }

    render () {

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

        let mainArea = (
            <BodySectionWithMarginBottom title='Log in to continue'>
                <Login />
            </BodySectionWithMarginBottom>
        );
        if (this.props.isLoggedIn) {
            mainArea = (
                <BodySectionWithMarginBottom title='Course list' >
                    <CourseList listCourses={listCourses} />
                </BodySectionWithMarginBottom>
            );
        }
        return (
            <React.Fragment>
            <Notifications listNotifications={listNotifications} />
            <div className={css(styles.app)}>
                <Header />
                <div className={css(styles.appBody)}>
                    {mainArea}
                    <BodySection title='News from the School'>
                        <p>
                        some random text
                        </p>
                    </BodySection>
                </div>
                <div className={css(styles.appFooter)}>
                    <Footer />
                </div>
            </div>
            </React.Fragment>
        );
    }

}

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => undefined
};

export default App;
