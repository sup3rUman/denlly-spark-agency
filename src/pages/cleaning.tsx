import { CleaningHero, } from "../assets";
import Spaces from "../components/Spaces";

const Cleaning = () => {
  return (
    <main className="relative isolate h-full w-full ">
      <div className="max-w-[1560px] mx-auto">
        <div className="relative my-4">
          <h1 className="font-OceanlyOceanly text-center text-3xl md:text-5xl lg:text-7xl">
            Denlly Cleaners
          </h1>
          <div className="relative w-full h-96 aspect-[16/9] overflow-hidden">
            <img
              src={`${CleaningHero}`}
              alt="cleaning"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="max-w-3xl mx-4 md:mx-auto my-12">
            <p className="text-center font-[500] text-gray-500 text-sm ">
              Where we specialize in transforming homes into spotless, welcoming
              havens. Our residential cleaning services are designed to meet the
              unique needs of your household, ensuring a pristine and healthy
              environment for you and your family.
            </p>
          </div>
        </div>

        <div className="my-8 mx-4">
          <h1 className="font-OceanlyOceanly text-3xl md:text-5xl lg:text-6xl">
            Spaces we clean
          </h1>
         <Spaces />
        </div>
      </div>
    </main>
  );
}

export default Cleaning
