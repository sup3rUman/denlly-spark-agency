import { Link } from "react-router-dom";
import { BeSvg, FauxLocs, HeroNewUpdate, NatureSvg, QsSvg } from "../assets";
import { BeautyServices } from "../data";


const Home = () => {
  return (
    <main className="relative w-full h-full">
      {/* HeroSection */}
      <section className="relative  md:mt-24 sm:h-full md:max-h-[450px] lg:max-h-[600px] xl:max-h-[700px] ">
        <div className="flex flex-col sm:flex-row gap-8 items-center mx-auto max-w-[1240px]">
          <div className="flex sm:flex-1 relative w-full flex-col space-y-4 justify-center items-start p-4">
            <h3 className="flex items-center gap-2 text-primary">
              <span>
                <HeroNewUpdate />
              </span>
              Welcome to Denlly Beauty!!!
            </h3>
            <h1 className="font-Playfair font-bold text-3xl sm:text-4xl md:text-5xl xl:text-6xl sm:leading-[60px]">
              Bring The well being & beauty naturally!!!
            </h1>
            <p>
              Your body does a lot for you, and your caring therapist can help
              you return the favor in a way that benefits both your physical and
              mental wellness.
            </p>
            <div className="p-3 relative border transition-all duration-500 ease-in-out hover:bg-secondary">
              <Link
                to="/contact-us"
                className="flex items-center uppercase font-semibold text-xs sm:text-sm"
              >
                Make A Reservation
              </Link>
            </div>
          </div>

          <div className="flex sm:flex-1 w-full md:h-[500px] lg:h-[650px] relative p-4 sm:p-8 my-auto">
            <div className=" w-full h-full sm:max-h-[550px] lg:max-h-[600px] border-[8px] border-primary flex items-center">
              <div className="lg:absolute overflow-hidden m-4 lg:m-0 shadow-xl max-w-[400px] max-h-[400px] lg:max-h-[500px] lg:max-w-[500px] lg:right-28 ">
                <img
                  src={FauxLocs}
                  alt=""
                  className="h-full w-full scale-[1.3]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Second Section */}
      <section className="relative  mt-24 bg-purple-50 py-20">
        <div className="mx-auto max-w-[1240px] grid grid-cols-1 sm:grid-cols-3 sm:gap-8">
          {BeautyServices.map((service, index) => (
            <div
              key={index}
              className="flex flex-col relative items-start space-y-3 p-4"
            >
              <div className="h-full max-h-64 lg:max-h-96 w-full overflow-hidden">
                <img
                  src={service.img}
                  alt=""
                  className="h-full object-cover w-full hover:scale-[1.2] transition-all duration-1000 ease-in-out"
                />
              </div>
              <h1 className="font-Playfair font-bold tracking-wide text-2xl">
                {service.title}
              </h1>
              <p>{service.desc}</p>
              <div className="p-3 relative border transition-all duration-500 ease-in-out hover:bg-secondary flex">
                <Link
                  to={service.href}
                  className="uppercase font-semibold text-xs sm:text-sm"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Third Section */}
      <section className="relative py-20">
        <div className="max-w-[1240px] mx-auto flex flex-col-reverse sm:flex-row px-4 gap-4 sm:gap-6 items-center">
          <div className="flex flex-1 border p-6">
            <div className="overflow-hidden shadow-2xl h-full w-full">
              <img
                src={FauxLocs}
                alt=""
                className="scale-[1.3] h-full w-full"
              />
            </div>
          </div>
          <div className="space-y-3 flex flex-col flex-1">
            <h4 className="font-semibold text-primary uppercase">
              Take Your Care
            </h4>
            <h1 className="font-Playfair font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl lg:leading-[60px]">
              Elevate Your Lifestyle by Bringing Balance and Well Being Into
              Your Life
            </h1>
            <p>
              Designed to allow you to unwind and feel confident that you’re in
              good, caring hands. Our first priority is cleanliness. We have a
              full-time staff whose job is to ensure that the environment at
              Denlly Beauty remains.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="sm:p-4 p-2 border flex flex-col items-center justify-center space-y-2 bg-purple-200/70 hover:bg-purple-300/70 transition-all duration-100 ease-linear">
                <div className="">
                  <BeSvg />
                </div>
                <h2 className="font-Playfair font-bold sm:text-lg md:leading-6 text-center text-lg">
                  Beauty Experts
                </h2>
              </div>
              <div className="sm:p-4 p-2 border flex flex-col items-center justify-center space-y-2 bg-purple-200/70 hover:bg-purple-300/70 transition-all duration-100 ease-linear">
                <div className="">
                  <QsSvg />
                </div>
                <h2 className="font-Playfair font-bold sm:text-lg md:leading-6 text-center text-lg">
                  Quality Services
                </h2>
              </div>
              <div className="sm:p-4 p-2 border flex flex-col items-center justify-center space-y-2 bg-purple-200/70 hover:bg-purple-300/70 transition-all duration-100 ease-linear">
                <div className="">
                  <NatureSvg />
                </div>
                <h2 className="font-Playfair font-bold sm:text-lg md:leading-6 text-center text-lg">
                  100% Nature
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forth Section */}
      <section className="relative  mt-24 bg-purple-50 py-20">
        <div className="mx-auto max-w-[1240px] flex flex-col">
          <div className="border max-w-xl mx-auto text-center py-3">
            <span className="uppercase font-semibold text-sm text-primary">Our Services</span>
            <h1 className="font-Playfair font-bold text-2xl md:text-3xl lg:text-4xl lg:leading-10">
              Creative excellence and the unparalleled hospitality
            </h1>
          </div>
          <div>

          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;