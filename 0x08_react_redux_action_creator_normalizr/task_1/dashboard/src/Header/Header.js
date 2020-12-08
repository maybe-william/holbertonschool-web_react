import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import {StyleSheet, css} from 'aphrodite';
import AppContext from '../App/AppContext';

const styles = StyleSheet.create({
    h1Title: {
        fontSize: 45,
        color: "#e0354b"
    },
    appLogo: {
        height: "40vmin",
        maxWidth: 200,
        maxHeight: 200
    },
    appHeader: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        borderBottom: "3px solid #e0354b"
    },
    link: {
        color: "blue",
        cursor: "pointer",
    }
});

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let welcomeMessage = (<div></div>);
        if (this.context.user.isLoggedIn) {
            welcomeMessage = (
            <div>
            <p>
            Welcome {this.context.user.email} (
            <a className={css(styles.link)} onClick={this.context.logOut}>
            logout
            </a>
            )
            </p>
            </div>
            );
        }
        return (
            <React.Fragment>
            <div className={css(styles.appHeader)}>
            <img src={logo} className={css(styles.appLogo)} alt="logo" />
            <h1 className={css(styles.h1Title)}>
            School dashboard
            </h1>
            </div>
            {welcomeMessage}
            </React.Fragment>
        );
    }
}
Header.contextType = AppContext;

export default Header;
