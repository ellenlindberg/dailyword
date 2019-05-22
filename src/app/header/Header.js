import React from 'react';
//import '../App.css';
import './Header.css';
//import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <ul className="header-flex">
        <li className="header-item flex-logo">WordOfTheDay</li>
        <li className="header-item"> My favourite words</li>
      </ul>
    </header>
  )
}

export default Header;
