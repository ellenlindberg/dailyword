import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <ul className="header-flex">
        <li className="header-item flex-logo"><Link to="/">DailyWord</Link></li>
        <li className="header-item"> <Link to="/favouritewords">My Favourite Words</Link></li>
      </ul>
    </header>
  )
}

export default Header;
