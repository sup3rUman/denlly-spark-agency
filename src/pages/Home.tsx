import { Link } from "react-router-dom";
import { FauxLocs, HeroNewUpdate } from "../assets";
import { BeautyServices } from "../data";


const Home = () => {
  return (
    <main className="relative w-full h-full">
        {/* HeroSection */}
        <section className="relative  sm:mt-24 sm:h-full md:max-h-[450px] lg:max-h-[600px] xl:max-h-[700px] ">
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
              <div className="p-3 relative border-primary border">
                <Link
                  to="/reservation"
                  className="flex items-center uppercase font-semibold text-xs sm:text-sm"
                >
                  Make A Reservation
                </Link>
              </div>
            </div>

            <div className="flex sm:flex-1 w-full sm:h-[650px] relative p-4 sm:p-8 my-auto">
              <div className=" w-full sm:max-h-[550px] md:max-h-[650px] border-[8px] border-primary flex items-center">
                <div className="sm:absolute overflow-hidden m-4 sm:m-0 shadow-xl max-w-[400px] md:max-h-[500px] md:max-w-[500px] max-h-[400px] md:right-20 lg:right-28">
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
              <div key={index} className="flex flex-col relative items-start space-y-3 p-4">
                <div className="h-full max-h-96 w-full overflow-hidden">
                  <img
                    src={service.img}
                    alt=""
                    className="h-full object-cover w-full hover:scale-[1.2] transition-all duration-1000 ease-in-out"
                  />
                </div>
                <h1 className="font-Playfair font-bold tracking-wide text-2xl">
                  {service.title}
                </h1>
                <p>
                  {service.desc}
                </p>
                <div className="p-3 relative border border-primary transition-all duration-500 ease-in-out hover:bg-primary flex">
                  <Link
                    to={
                      service.href
                    }
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
    </main>
  );
}

export default Home;