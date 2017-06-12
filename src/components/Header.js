import React from 'react';
import '../CSS/Header.css';
import Logo from '../images/logo.png';
import '../CSS/Nav.css';

const Header = () =>{
  return (
    <div className="head">
      <div className="nav">
        <nav>
          <ul>
            <li className="logo"><img src={Logo}/></li>
            <li><a href="">Account</a></li>
            <li><a href="">Help</a></li>
            <li>person image</li>
          </ul>
        </nav>
      </div>
      <div className="header">
         <h1>The world's greatest fake site</h1>
         <p>Create the world's greatest fake site and enjoy the breeze of fresh air when you complete it</p>
         <div className="awesome">Do something awesome</div>
      </div>
    </div>
    )
}

export default Header;
