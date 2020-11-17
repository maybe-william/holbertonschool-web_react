import React from 'react';
import {getFullYear, getFooterCopy} from '../utils/utils.js';
import './Footer.css';

function Footer() {
  return (
      <p className="copyright-text">Copyright {getFullYear()} - {getFooterCopy(true)}</p>
  );
}

export default Footer;
