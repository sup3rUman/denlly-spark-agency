import React, {useState} from 'react'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import '../styles/Home.css';
import { HeroData } from '../data';


const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
  const handleLeftClick = () => {
    setCurrentSlide((prev) => (prev - 1 + HeroData.length) % HeroData.length);
  }
  const handleRightClick = () => {
    setCurrentSlide((prev) => (prev + 1) % HeroData.length);
  }
  return (
    <section className="slider">
        <div className="slides">
            {HeroData.map((data, index) =>(
            <div className= {`slide ${index === currentSlide ? 'active' : ''}`} style = {{display: index === currentSlide ? 'block' : 'none'}}    key={index}>
            <div className="swiper-slide-content" style={{ backgroundImage: `url(${data.image})` }}>
                <div className="chevronContainer">
                    <button onClick={handleLeftClick}><HiChevronLeft size={24} /></button>
                <button onClick={handleRightClick}><HiChevronRight size={24} /></button>
                </div>
                <div className="swiper-slide-text">
                <h3>{data.title}</h3>
                <p>{data.desc}</p>
                <a href={data.href} className="banner-btn">{data.buttonText}</a>
                </div>
            </div>
            </div>
            ))}
        </div>
      </section>
  )
}

export default HeroSection