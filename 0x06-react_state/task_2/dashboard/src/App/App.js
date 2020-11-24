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
import AppContext from './AppContext';

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
        this.state = {
            displayDrawer: true,
            user: {
                email: "",
                password: "",
                isLoggedIn: false,
            },
            logOut: () => this.logOut(),
        };

        this.handleLogout = this.handleLogout.bind(this);
        this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
        this.handleHideDrawer = this.handleHideDrawer.bind(this);
        this.logIn = this.logIn.bind(this);
        this.logOut = this.logOut.bind(this);
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

    handleDisplayDrawer() {
        this.setState({displayDrawer: true});
    }

    handleHideDrawer() {
        this.setState({displayDrawer: false});
    }

    logIn(email, password) {
        this.setState({
            user: {
                email: email,
                password: password,
                isLoggedIn: true,
            },
        });
    }

    logOut() {
        this.setState({
            user: {
                email: "",
                password: "",
                isLoggedIn: false,
            },
        });
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
                <Login logIn={this.logIn}/>
            </BodySectionWithMarginBottom>
        );
        if (this.state.user.isLoggedIn) {
            mainArea = (
                <BodySectionWithMarginBottom title='Course list' >
                    <CourseList listCourses={listCourses} />
                </BodySectionWithMarginBottom>
            );
        }
        return (
            <AppContext.Provider value={this.state}>
            <Notifications listNotifications={listNotifications} displayDrawer={this.state.displayDrawer} handleDisplayDrawer={this.handleDisplayDrawer} handleHideDrawer={this.handleHideDrawer}/>
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
            </AppContext.Provider>
        );
    }

}


export default App;
