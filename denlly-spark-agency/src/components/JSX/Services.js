import React from 'react';
import '../CSS/Service.css';

// Import images for the service cards
import cleaningImage from '../../assets/cleaning.jpg';
import beautyImage from '../../assets/beauty.jpg';
import insuranceImage from '../../assets/insurance.jpg';

function Service() {
  return (
    <section id="services">
      <h2>Our Services</h2>
      <div className="services-container">
        <div className="service-card" style={{ backgroundImage: `url(${cleaningImage})` }}>
          <div className="service-card-content">
            <h3>Cleaning</h3>
            <p>Professional cleaning services for homes and offices.</p>
            <a href="#cleaning" className="service-link">Learn More</a>
          </div>
        </div>
        <div className="service-card" style={{ backgroundImage: `url(${beautyImage})` }}>
          <div className="service-card-content">
            <h3>Beauty</h3>
            <p>Top-notch beauty services to enhance your looks.</p>
            <a href="#beauty" className="service-link">Learn More</a>
          </div>
        </div>
        <div className="service-card" style={{ backgroundImage: `url(${insuranceImage})` }}>
          <div className="service-card-content">
            <h3>Insurance</h3>
            <p>Comprehensive insurance solutions for peace of mind.</p>
            <a href="#insurance" className="service-link">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
