import React, { useState } from 'react';
import './Header.css';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <h1>Denlly Spark Agency</h1>
      <nav className={`navigation ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </nav>
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>☰</div>
    </header>
  );
}

export default Header;