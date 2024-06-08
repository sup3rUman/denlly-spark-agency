import React from 'react';
import bannerImage from '../assets/banner.jpg'; // Example image import

function Home() {
  return (
    <section id="home">
      <img src={bannerImage} alt="Denlly Spark Agency Banner" className="banner-image" />
      <h2>Welcome to Denlly Spark Agency</h2>
      <p>Your best choice for cleaning services in Nairobi, Kenya.</p>
    </section>
  );
}

export default Home;
