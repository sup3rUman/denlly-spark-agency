import React, { useEffect, useState } from 'react';
import SwiperCore from 'swiper';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import '../CSS/Home.css';

// Import images for the slides
import bannerImage1 from '../../assets/banner1.jpg';
import bannerImage2 from '../../assets/banner2.jpg';
import bannerImage3 from '../../assets/banner3.jpg';

// Install Swiper modules
SwiperCore.use([Navigation, Pagination, Autoplay]);

function Home() {
  useEffect(() => {
    // Initialize Swiper if needed
  }, []);

  return (
    <section id="home">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        autoplay={{ delay: 4000 }}
        speed={900}
        style={{ width: '100%', height: '100vh' }} // Adjust the height as needed
      >
        <SwiperSlide>
          <div className="swiper-slide-content" style={{ backgroundImage: `url(${bannerImage1})` }}>
            <div className="swiper-slide-text">
              <h3>Welcome to Denlly Spark Agency</h3>
              <p>Your best choice for cleaning services in Nairobi, Kenya.</p>
              <a href="/services" className="banner-btn">Learn More</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content" style={{ backgroundImage: `url(${bannerImage2})` }}>
            <div className="swiper-slide-text">
              <h3>Discover Our Services</h3>
              <p>Explore our wide range of cleaning solutions.</p>
              <a href="/services" className="banner-btn">View Services</a>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-slide-content" style={{ backgroundImage: `url(${bannerImage3})` }}>
            <div className="swiper-slide-text">
              <h3>Contact Us Today</h3>
              <p>Get in touch for a free consultation.</p>
              <a href="/contact" className="banner-btn">Contact Us</a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Home;