import React, { useState } from 'react';
import { FiDownload, FiMenu, FiX } from 'react-icons/fi';
import '../styles/Header.css';
import resumePDF from '../assets/documents/Eason_Xie_Resume.pdf';

const navItems = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' }
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false); // Close mobile menu after clicking
    }
  };

  return (
      <header className="header">
        <div className="header-container">
          <button className="logo" onClick={() => scrollToSection('hero')} aria-label="Back to top">
            <span className="logo-mark">EX</span>
            <span className="logo-copy">
              <strong>Eason Xie</strong>
              <span>Data + Full-Stack</span>
            </span>
          </button>

          <nav className="desktop-nav">
            <ul>
              {navItems.map(item => (
                  <li key={item.id}>
                    <button onClick={() => scrollToSection(item.id)}>{item.label}</button>
                  </li>
              ))}
            </ul>
          </nav>

          <a className="header-resume" href={resumePDF} download="Eason_Xie_Resume.pdf">
            <FiDownload aria-hidden="true" />
            <span>Resume</span>
          </a>

          <button
              className="mobile-menu-btn"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isMenuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>

          <nav className={`mobile-nav ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              {navItems.map(item => (
                  <li key={item.id}>
                    <button onClick={() => scrollToSection(item.id)}>{item.label}</button>
                  </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
  );
};

export default Header;
