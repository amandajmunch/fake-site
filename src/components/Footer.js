import React from 'react';
import Logo from '../images/logo.png';
import '../CSS/Footer.css';

const Footer = () =>{
  return (
    <div className="footer">
        <ul>
          <li className="logo"><img src={Logo}/></li>
          <li><a href="">Terms</a></li>
          <li><a href="">Privacy</a></li>
          <li><a href="">Site Map</a></li>
        </ul>
    </div>
    )
}

export default Footer;
