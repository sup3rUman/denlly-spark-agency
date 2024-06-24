import React, {useState} from 'react'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import '../styles/Home.css';
import { HeroData } from '../data';
import { Link } from "react-router-dom"


const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    
  const handleLeftClick = () => {
    setCurrentSlide((prev) => (prev - 1 + HeroData.length) % HeroData.length);
  }
  const handleRightClick = () => {
    setCurrentSlide((prev) => (prev + 1) % HeroData.length);
  }
  return (
    <React.Fragment>
      <section className="w-full font-Poppins relative isolate">
        {/* <div className="absolute bg-black  w-full h-full opacity-60"></div> */}
          {/* <div className="relative px-6 flex flex-col justify-center gap-8 items-start h-[92.4vh]">
            <div className="flex text-xl md:text-3xl gap-2 uppercase font-semibold text-gray-50 tracking-wider">
              <h2>Web.</h2>
              <h2>Design.</h2>
              <h2>Graphics.</h2>
              <h2>Digital.</h2>
            </div>
            <div className=" text-gray-50">
              <h1 className="font-extrabold text-3xl sm:text-4xl md:text-6xl capitalize leading-10 tracking-wider ">
                Elevate Your Software Experience: <br />
                Where Innovation Meets Exceptional Customer Service!
              </h1>
            </div>
            <div className="text-gray-50">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident atque eaque quidem aspernatur. Debitis, reprehenderit.
              </p>
            </div>

            <div className="">
              <Link to="/" className="px-3.5 py-2.5 bg-green-500 rounded-md">
                Explore More
              </Link>
            </div>
          </div> */}
            {HeroData.map((data, index) =>(
             <div className= {`slide ${index === currentSlide ? 'active' : ''}`} style = {{display: index === currentSlide ? 'block' : 'none'}}    key={index}>
             <div className="swiper-slide-content" style={{ backgroundImage: `url(${data.image})` }}>
                 <div className="chevronContainer">
                     <button onClick={handleLeftClick}><HiChevronLeft size={24} /></button>
                 <button onClick={handleRightClick}><HiChevronRight size={24} /></button>
                 </div>
                 <div className="w-full max-w-[1560px] mx-auto">
                 <h3>{data.title}</h3>
                 <p>{data.desc}</p>
                 <Link to={data.href} className="banner-btn">{data.buttonText}</Link>
                 </div>
             </div>
             </div>
             ))}
      </section>
    </React.Fragment>
  );
}

export default HeroSection