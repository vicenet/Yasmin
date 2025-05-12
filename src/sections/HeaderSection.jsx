import React from 'react';
import { Link } from 'react-router-dom';

const HeaderSection = () => {
  return (
    <header className="site-header">
      <div className="header-container">
        <nav className="main-nav">
          <ul className="nav-left">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="/about" className="nav-link">About</a></li>
            <li><a href="/services" className="nav-link">Services</a></li>
          </ul>
          
          <div className="logo">
            <a href="/">
              <h1>Yasmin911</h1>
            </a>
          </div>
          
          <ul className="nav-right">
            <li><a href="/resources" className="nav-link">Resources</a></li>
            <li><a href="/faq" className="nav-link">FAQ</a></li>
            <li><a href="/contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default HeaderSection;