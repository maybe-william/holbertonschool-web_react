import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import PropTypes from 'prop-types';

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

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            email: "",
            password: "",
            enableSubmit: false,
        };

        this.handleLoginSubmit = this.handleLoginSubmit.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }

    handleLoginSubmit(e) {
        this.props.logIn(this.state.email, this.state.password);
    }

    handleChangeEmail(e) {
        this.setState({
            email: e.target.value,
        });
        this.setState((state, props) => ({
            enableSubmit: (state.email !== "" && state.password !== ""),
        }));
    }
    handleChangePassword(e) {
        this.setState({
            password: e.target.value,
        });
        this.setState((state, props) => ({
            enableSubmit: (state.email !== "" && state.password !== "")
        }));
    }

    render() {


        return (
            <React.Fragment>
            <p>Login to access the full dashboard</p>
            <form onSubmit={this.handleLoginSubmit} className={css(styles.formSection)}>
            <div>
            <label htmlFor="email" className={css(styles.formItem)}>Email: </label>
            <input id="email" type="text" value={this.state.email} onChange={this.handleChangeEmail} className={css(styles.formItem)}/>
            </div>
            <div>
            <label htmlFor="password" className={css(styles.formItem)}> Password: </label>
            <input id="password" type="password" value={this.state.password} onChange={this.handleChangePassword} className={css(styles.formItem)}/>
            </div>
            <div>
            <input type="submit" value="ok" disabled={!this.state.enableSubmit} className={css(styles.formItem)} />
            </div>
            </form>
            </React.Fragment>
        );
    }
}

Login.propTypes = {
  logIn: PropTypes.func,
};

Login.defaultProps = {
  logIn: () => undefined,
};

export default Login;
