import React from 'react';
import './Login.css';

function Login() {
  return (
        <React.Fragment>
          <p>Login to access the full dashboard</p>
          <form>
            <label htmlFor="email">Email: </label>
            <input id="email" type="text"/>
            <label htmlFor="password"> Password: </label>
            <input id="password" type="text"/>
            <button>ok</button>
          </form>
        </React.Fragment>
  );
}

export default Login;
