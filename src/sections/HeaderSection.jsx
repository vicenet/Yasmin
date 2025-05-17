import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeaderSection = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Clean up
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    
    // Prevent scrolling when menu is open
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <nav className="main-nav">
          <div className="hamburger-menu" onClick={toggleMobileMenu}>
            <div className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></div>
            <div className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></div>
            <div className={`hamburger-line ${mobileMenuOpen ? 'open' : ''}`}></div>
          </div>
          
          <ul className="nav-left">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="/" className="nav-link">About</a></li>
            <li><a href="/" className="nav-link">Services</a></li>
          </ul>
          
          <div className="logo">
            <a href="/">
              <h1>Yasmin911</h1>
            </a>
          </div>
          
          <ul className="nav-right">
            <li><a href="/" className="nav-link">Resources</a></li>
            <li><a href="/" className="nav-link">FAQ</a></li>
            <li><a href="/" className="nav-link">Contact</a></li>
          </ul>
          
          <div className={`mobile-nav ${mobileMenuOpen ? 'open' : ''}`}>
            <ul className="mobile-nav-links">
              <li><a href="/" className="nav-link" onClick={toggleMobileMenu}>Home</a></li>
              <li><a href="/" className="nav-link" onClick={toggleMobileMenu}>About</a></li>
              <li><a href="/" className="nav-link" onClick={toggleMobileMenu}>Services</a></li>
              <li><a href="/" className="nav-link" onClick={toggleMobileMenu}>Resources</a></li>
              <li><a href="/" className="nav-link" onClick={toggleMobileMenu}>FAQ</a></li>
              <li><a href="/" className="nav-link" onClick={toggleMobileMenu}>Contact</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default HeaderSection;