// components/Header.jsx
import React from 'react';
import logo from "../assets/man.png";
const Header = () => {
  return (
    <header>
        <div className='logo'>
            <img src={logo} alt="logo" height="80px" width="80px"></img>
        </div>
        <h1>ReacTuto</h1>
        <nav>
            <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            </ul>
        </nav>
    </header>
  );
};

export default Header;
