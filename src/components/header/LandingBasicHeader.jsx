import React, { useState } from 'react';
import ToggleSwitch from '../toggle-switch/ToggleSwitch';
import MyBuLogo from '../../assets/MyBu_logo.png';
import { Link } from 'react-router-dom';
import './assets/Header.css';
import { FaBars } from 'react-icons/fa';

const BasicHeader = ({ toggleTheme, currentTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="basic-header">
      <div className="container">
        {/* Logo */}
        <div className="logo">
            <img src={MyBuLogo} alt="Maibu Logo" />
        </div>

        {/* Navigation Items */}
        <nav className={`nav-items ${isMenuOpen ? 'open' : ''}`}>
          <a href="#enterprise">Enterprise</a>
          <a href="#customers">Customers</a>
          <a href="/resources">Resources</a>
          <a href='/services'>Services</a>
          <ToggleSwitch toggleTheme={toggleTheme} currentTheme={currentTheme} />
        </nav>

        {/* Call-to-actions */}
        <div className="cta-section">
            <Link to="/app">
                <button className='login-button'>Login</button>
            </Link>
        </div>

        {/* Hamburger Menu for Small Screens */}
        <button className="hamburger-menu" onClick={toggleMenu}>
          <FaBars />
        </button>
      </div>
    </header>
  );
};

export default BasicHeader;