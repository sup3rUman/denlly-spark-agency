import React, { useState } from 'react';
import '../../styles/Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <h1>Denlly Group</h1>
      <nav className={`navigation ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <div className="dropdown">
          <a href="#services" className="dropbtn">Services</a>
          <div className="dropdown-content">
            <a href="#cleaning" onClick={() => setIsOpen(false)}>Cleaning</a>
            <a href="#beauty" onClick={() => setIsOpen(false)}>Beauty</a>
            <a href="#insurance" onClick={() => setIsOpen(false)}>Insurance</a>
          </div>
        </div>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </nav>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>☰</div>
    </header>
  );
}

export default Header;
