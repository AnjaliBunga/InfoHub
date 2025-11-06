import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-text">InfoHub</span>
        </Link>
        <nav className="nav">
          <Link 
            to="/" 
            className={`nav-link ${isActive('/') ? 'active' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/weather" 
            className={`nav-link ${isActive('/weather') ? 'active' : ''}`}
          >
            Weather
          </Link>
          <Link 
            to="/currency" 
            className={`nav-link ${isActive('/currency') ? 'active' : ''}`}
          >
            Currency
          </Link>
          <Link 
            to="/quotes" 
            className={`nav-link ${isActive('/quotes') ? 'active' : ''}`}
          >
            Quotes
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

