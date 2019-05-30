import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <ul className="header-flex">
        <li className="header-item flex-logo"><Link to="/">WordOfTheDay</Link></li>
        <li className="header-item"> <Link to="/favouritewords">My favourite words</Link></li>
      </ul>
    </header>
  )
}

export default Header;
