import React from 'react';
import { FaBroom, FaMugHot, FaBuilding, FaToilet, FaTools, FaHome, FaGlassCheers } from 'react-icons/fa';

function Services() {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <ul>
        <li><FaBroom /> Office Cleaning</li>
        <li><FaMugHot /> Office Tea Making and Serving</li>
        <li><FaBuilding /> Building Cleaning</li>
        <li><FaToilet /> Toilet Cleaning</li>
        <li><FaTools /> Post Construction Cleaning</li>
        <li><FaHome /> New House Cleaning</li>
        <li><FaGlassCheers /> After Party Cleaning</li>
      </ul>
      <p>We endeavor to provide impeccable professional services to meet your residential or commercial needs.</p>
    </section>
  );
}

export default Services;
