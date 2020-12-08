import React from 'react';
import {getFullYear, getFooterCopy} from '../utils/utils.js';
import AppContext from '../App/AppContext';

function Footer() {
  return (
      <AppContext.Consumer>
      {context => (
      <div>
      <p className="copyright-text">Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      {(context.user.isLoggedIn) ? <a>Contact us</a> : ''}
      </div>
      )}
      </AppContext.Consumer>
  );
}

export default Footer;
