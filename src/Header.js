import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // optional if you want styles

const Header = () => {
  return (
    <header className="site-header">
      <nav>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cv">CV</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;