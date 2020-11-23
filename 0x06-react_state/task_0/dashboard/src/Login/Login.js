import React from 'react';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
    formItem: {
        marginRight: 10
    },
    formSection: {
        display: "flex",
        flexDirection: "row",
        '@media (max-width: 700px)': {
            display: "flex",
            flexDirection: "column"
        }
    }
});

function Login() {
  return (
        <React.Fragment>
          <p>Login to access the full dashboard</p>
          <form className={css(styles.formSection)}>
            <div>
                <label htmlFor="email" className={css(styles.formItem)}>Email: </label>
                <input id="email" type="text" className={css(styles.formItem)}/>
            </div>
            <div>
                <label htmlFor="password" className={css(styles.formItem)}> Password: </label>
                <input id="password" type="text" className={css(styles.formItem)}/>
            </div>
            <div>
                <button className={css(styles.formItem)}>ok</button>
            </div>
          </form>
        </React.Fragment>
  );
}

export default Login;
