import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
    formItem: {
        marginRight: 10
    }
});

function Login() {
  return (
        <React.Fragment>
          <p>Login to access the full dashboard</p>
          <form>
            <label htmlFor="email" className={css(styles.formItem)}>Email: </label>
            <input id="email" type="text" className={css(styles.formItem)}/>
            <label htmlFor="password" className={css(styles.formItem)}> Password: </label>
            <input id="password" type="text" className={css(styles.formItem)}/>
            <button className={css(styles.formItem)}>ok</button>
          </form>
        </React.Fragment>
  );
}

export default Login;
