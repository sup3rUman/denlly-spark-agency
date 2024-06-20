import React, { useEffect } from 'react';
import HeroSection from '../components/HeroSection';
import '../styles/Home.css';
// import Contact from '../pages/Contact';




function Home() {
  useEffect(() => {
    // Initialize Swiper if needed
  }, []);

  return (
    <main>
     <HeroSection />
    </main>
  );
}

export default Home;