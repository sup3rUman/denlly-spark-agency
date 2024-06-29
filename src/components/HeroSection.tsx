import React, {useState} from 'react'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
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
      <section className="w-full font-Poppins relative isolate overflow-hidden">
        {HeroData.map((data, index) => (
          <div
          className={`w-full h-full box-border ${index === currentSlide ? "block" : ""}`}
          style={{ display: index === currentSlide ? "block" : "none" }}
          key={index}
          >
          <div
            className="bg-cover relative bg-center h-[400px] md:h-[650px] flex items-center"
            style={{ backgroundImage: `url(${data.image})` }}
          >
            <div className="absolute bg-black  w-full h-full opacity-60"/>
              <div className="relative flex flex-col justify-center items-start gap-8 p-8 max-w-[1560px] mx-auto">
                <div className=" text-gray-50">
                  <h1 className="font-bold text-xl sm:text-2xl md:text-4xl capitalize tracking-wider ">
                    {data.title.split('^')}
                  </h1>
                </div>
                <div className="text-gray-50">
                  <p className="md:text-lg">{data.desc}</p>
                </div>

                <div className="">
                  <Link to={data.href} className="px-3.5 py-2.5 bg-violet-500 rounded-md">
                    {data.buttonText}
                  </Link>
                </div>
              </div>
              <div className="absolute z-20 w-full flex justify-between px-4 top-[50%] translate-y-[-50%] transform">
                <button onClick={handleLeftClick} className="border border-violet-500 rounded-full">
                  <HiChevronLeft size={24} className="fill-violet-500"/>
                </button>
                <button onClick={handleRightClick} className="border border-violet-500 rounded-full">
                  <HiChevronRight size={24} className="fill-violet-500"/>
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>
    </React.Fragment>
  );
}

export default HeroSection