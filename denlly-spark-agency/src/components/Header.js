import React from 'react';
import { FaHome, FaServicestack, FaEnvelope } from 'react-icons/fa';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Denlly Spark Agency</h1>
      <nav className="navigation">
        <a href="#home"><FaHome /> Home</a>
        <a href="#services"><FaServicestack /> Services</a>
        <a href="#contact"><FaEnvelope /> Contact</a>
      </nav>
    </header>
  );
}

export default Header;
