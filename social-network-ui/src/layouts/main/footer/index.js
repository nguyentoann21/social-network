import React from 'react';
import {Link} from 'react-router-dom';
import './footer.scss';
import PandaIcon from '../../../assets/icons/panda.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={PandaIcon} alt="Panda Logo" />
          <span>Panda</span>
        </div>
        <div className="footer-links">
          <Link to="/1">Terms of Service</Link>
          <Link to="/2">Privacy Policy</Link>
          <Link to="/3">Support</Link>
        </div>
        <div className="footer-social">
          <Link to="https://facebook.com"><img src={PandaIcon} alt="Facebook"/><span>Facebook</span></Link>
          <Link to="https://twitter.com"><img src={PandaIcon} alt="Twitter"/><span>Twitter</span></Link>
          <Link to="https://instagram.com"><img src={PandaIcon} alt="Instagram"/><span>Instagram</span></Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2023 Panda. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
