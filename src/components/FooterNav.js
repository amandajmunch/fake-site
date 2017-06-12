import React from 'react';
import '../CSS/FooterNav.css';

const FooterNav = () =>{
  return (
    <div className="footerNav">
        <ul> Fakesite
          <li><a href="">About us</a></li>
          <li><a href="">Press</a></li>
          <li><a href="">Policies</a></li>
          <li><a href="">Help</a></li>
        </ul>
        <ul>Account
          <li><a href="">Edit Profile</a></li>
          <li><a href="">Friends</a></li>
          <li><a href="">Social</a></li>
          <li><a href="">Delete Profile</a></li>
        </ul>
    </div>
    )
}

export default FooterNav;
