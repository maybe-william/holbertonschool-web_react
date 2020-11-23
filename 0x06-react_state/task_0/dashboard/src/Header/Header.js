import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import {StyleSheet, css} from 'aphrodite';

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
    }
});

function Header() {
  return (
      <div className={css(styles.appHeader)}>
        <img src={logo} className={css(styles.appLogo)} alt="logo" />
        <h1 className={css(styles.h1Title)}>
          School dashboard
        </h1>
      </div>
  );
}

export default Header;
