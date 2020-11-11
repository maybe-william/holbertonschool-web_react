import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import {getFullYear, getFooterCopy} from '../utils/utils.js';
import './App.css';
import Notifications from '../Notifications/Notifications.js';

function App() {
  return (
    <div className="App">
      <div id="root-notifications">
        {Notifications()}
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          School dashboard
        </h1>
      </header>
      <main className="App-body">
        <p>Login to access the full dashboard</p>
        <form>
          <label htmlFor="email">Email: </label>
          <input id="email" type="text"/>
          <label htmlFor="password"> Password: </label>
          <input id="password" type="text"/>
          <button>ok</button>
        </form>
      </main>
      <footer className="App-footer">
        <p className="copyright-text">Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </footer>
    </div>
  );
}

export default App;
