import React from 'react';
import './App.css';
import { PiHandWavingThin } from "react-icons/pi";
import image from './images/image.png';

function Header() {
  return (
    <header className="header">
        <div className="header-left">
            <h2><PiHandWavingThin /></h2>
            <h1>Hi, I'm Mariluz!</h1>  
        </div>
        <div className="header-right">
            <img src={image} alt="Profile" className="profile-pic" />
        </div>
    </header>
  );
}

export default Header;
