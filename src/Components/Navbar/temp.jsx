import React, { useState } from "react";
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-content">
          <div className="navbar-brand">
            <a href="/">YourName</a>
          </div>
          
          <button className="mobile-menu-btn" onClick={toggleMenu}>
            <span className={`hamburger ${isMenuOpen ? 'active' : ''}`}></span>
          </button>

          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            <ul className="nav-links">
              <li className="nav-item">
                <a href="#home" onClick={() => setIsMenuOpen(false)}>Home</a>
              </li>
              <li className="nav-item">
                <a href="#services" onClick={() => setIsMenuOpen(false)}>Services</a>
              </li>
              <li className="nav-item">
                <a href="#portfolio" onClick={() => setIsMenuOpen(false)}>Portfolio</a>
              </li>
              <li className="nav-item">
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
