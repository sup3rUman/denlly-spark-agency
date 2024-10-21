/* eslint-disable no-irregular-whitespace */
import { HeroAreaWoman } from "../assets";
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter } from "react-icons/bi";

const About = () => {
  return (
    <main className="relative isolate h-full w-full ">
      <section className="bg-purple-50 py-16 px-4">
        <div className="max-w-[740px] mx-auto flex flex-col items-center ">
          <strong className="uppercase text-primary text-xs">
            Short story about us
          </strong>
          <h1 className="font-Playfair text-4xl lg:text-6xl xl:text-6xl font-bold text-center">
            The big story behind, our Denlly Beauty center
          </h1>
        </div>
      </section>

      <section className="max-w-[1040px] mx-auto py-16 px-4">
        <div className="flex flex-col items-center">
          <span className="font-semibold uppercase text-sm text-primary">
            Creative Excellence
          </span>
          <h1 className="font-Playfair text-2xl sm:text-4xl font-bold text-center">
            Therapeutic Blends to Promote Wellness
          </h1>
          <div className="flex gap-8 sm:flex-col lg:flex-row  items-center mt-4">
            <div className="hidden sm:flex flex-1 h-full w-full sm:max-h-96 lg:max-w-md lg:max-h-[420px] overflow-hidden rounded-lg">
              <img
                src={HeroAreaWoman}
                alt=""
                className="w-full h-full object-cover object-center lg:hover:scale-150 transition-all duration-1000 ease-in-out"
              />
            </div>
            <div className="flex-1 space-y-2 ">
              <p>
                At Denlly Group, we are driven by a deep passion for excellence
                in all that we do. Our commitment to meeting customer needs with
                enthusiasm and dedication is at the heart of our business
                philosophy. We take immense pride in achieving customer
                satisfaction, as it is not just a goal but the very reason for
                our existence.
              </p>
              <p>
                Customer satisfaction fuels our success. When our customers are
                happy with our services, they naturally share their positive
                experiences with others, helping us grow and thrive. This
                word-of-mouth endorsement is a testament to the quality and
                reliability of our offerings.
              </p>
              <p>
                Our services are diverse yet unified by a common purpose: to
                improve the lives of our customers. Whether it's helping people
                look their best, ensuring clean and welcoming spaces, or
                providing the best insurance solutions to protect against life's
                uncertainties, we are dedicated to delivering exceptional value.
              </p>
              <p>
                At Denlly Group, we understand that each customer has unique
                needs, and we tailor our services to meet those specific
                requirements. Our team is committed to excellence in every
                interaction, ensuring that our customers feel valued, respected,
                and well taken care of. This unwavering dedication to customer
                satisfaction is what drives us forward and sets us apart in the
                industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-purple-50 py-16 px-4">
        <div className="max-w-[1240px] mx-auto flex flex-col items-center">
          <span className="font-semibold uppercase text-sm text-primary">
            Meet Our Experts
          </span>
          <h1 className="font-Playfair text-2xl sm:text-4xl font-bold text-center max-w-[540px] my-4">
            The amazing people behind Denlly Beauty
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-5xl gap-6">
            <div className="flex flex-col items-center space-y-3 pb-4">
              <div className="h-full w-full max-h-64 rounded-lg overflow-hidden">
                <img
                  src={HeroAreaWoman}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h2 className="font-Playfair font-semibold text-2xl">
                Nelly Wanjiku
              </h2>
              <span className="font-semibold uppercase text-sm text-primary">
                Denlly Expert
              </span>
              <p className="text-center">
                Efficiently engage high-payoff infomediaries rather than
                client-centric imperatives the efficiency.
              </p>
              <div className="flex items-center justify-center mt-3 sm:mt-0">
                <div className="mx-2 rounded-lg hover:bg-violet-500 border p-2 group transition-all ease-in-out duration-500">
                  <BiLogoFacebook className=" group-hover:text-gray-950 transition-all duration-500 ease-in-out text-violet-500" />
                </div>
                <div className="mx-2 rounded-lg hover:bg-violet-500 border p-2 group transition-all ease-in-out duration-500">
                  <BiLogoInstagram className=" group-hover:text-gray-950 transition-all duration-500 ease-in-out text-violet-500" />
                </div>
                <div className="mx-2 rounded-lg hover:bg-violet-500 border p-2 group transition-all ease-in-out duration-500">
                  <BiLogoTwitter className=" group-hover:text-gray-950 transition-all duration-500 ease-in-out text-violet-500" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3 pb-4">
              <div className="h-full w-full max-h-64 rounded-lg overflow-hidden">
                <img
                  src={HeroAreaWoman}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h2 className="font-Playfair font-semibold text-2xl">
              Lillian Jeptoo
              </h2>
              <span className="font-semibold uppercase text-sm text-primary">
                Denlly Expert
              </span>
              <p className="text-center">
                Dramatically engage high-payoff infomediaries rather than
                client-centric imperatives the efficiency.
              </p>
              <div className="flex items-center justify-center mt-3 sm:mt-0">
                <div className="mx-2 rounded-lg hover:bg-violet-500 border p-2 group transition-all ease-in-out duration-500">
                  <BiLogoFacebook className=" group-hover:text-gray-950 transition-all duration-500 ease-in-out text-violet-500" />
                </div>
                <div className="mx-2 rounded-lg hover:bg-violet-500 border p-2 group transition-all ease-in-out duration-500">
                  <BiLogoInstagram className=" group-hover:text-gray-950 transition-all duration-500 ease-in-out text-violet-500" />
                </div>
                <div className="mx-2 rounded-lg hover:bg-violet-500 border p-2 group transition-all ease-in-out duration-500">
                  <BiLogoTwitter className=" group-hover:text-gray-950 transition-all duration-500 ease-in-out text-violet-500" />
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-3 pb-4">
              <div className="h-full w-full max-h-64 rounded-lg overflow-hidden">
                <img
                  src={HeroAreaWoman}
                  alt=""
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <h2 className="font-Playfair font-semibold text-2xl">
                Gladys Makau
              </h2>
              <span className="font-semibold uppercase text-sm text-primary">
                Denlly Expert
              </span>
              <p className="text-center">
                Phosfluorescently engages high-payoff infomediaries rather than
                client-centric imperatives the efficiency.
              </p>
              <div className="flex items-center justify-center mt-3 sm:mt-0">
                <div className="mx-2 rounded-lg hover:bg-violet-500 border p-2 group transition-all ease-in-out duration-500">
                  <BiLogoFacebook className=" group-hover:text-gray-950 transition-all duration-500 ease-in-out text-violet-500" />
                </div>
                <div className="mx-2 rounded-lg hover:bg-violet-500 border p-2 group transition-all ease-in-out duration-500">
                  <BiLogoInstagram className=" group-hover:text-gray-950 transition-all duration-500 ease-in-out text-violet-500" />
                </div>
                <div className="mx-2 rounded-lg hover:bg-violet-500 border p-2 group transition-all ease-in-out duration-500">
                  <BiLogoTwitter className=" group-hover:text-gray-950 transition-all duration-500 ease-in-out text-violet-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-[1040px] mx-auto py-16 px-4">
        <div className="flex flex-col items-center ">
          <strong className="uppercase text-primary text-xs tracking-wider">
            Testimonials
          </strong>
          <h1 className="font-Playfair text-3xl sm:text-4xl font-bold text-center">
            What our customers says...
          </h1>
          <div className="flex flex-col sm:flex-row  gap-4 mt-8">
            <div className="bg-purple-50">
              <p className="p-4 mt-4">
                “ Made an appointment with Denlly Beauty and it was the best
                experience in a salon I have ever had. They went above and
                beyond to make sure I got what I wanted, & patiently explained
                her process “
              </p>
              <div className="flex p-4 bg-foreground mt-4 gap-3 items-center">
                <div className="h-full w-full max-w-16 max-h-16 border-2 rounded-md overflow-hidden">
                  <img
                    src={HeroAreaWoman}
                    alt=""
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                <div>
                  <h1 className="font-bold font-Playfair text-background tracking-wider">
                    Stacy Wanjiru
                  </h1>
                  <span className="text-background text-sm">Roysambu</span>
                </div>
              </div>
            </div>
            <div className="bg-purple-50">
              <p className="p-4 mt-4">
                “ Made an appointment with Denlly Beauty and it was the best
                experience in a salon I have ever had. They went above and
                beyond to make sure I got what I wanted, & patiently explained
                her process “
              </p>
              <div className="flex p-4 bg-foreground mt-4 gap-3 items-center">
                <div className="h-full w-full max-w-16 max-h-16 border-2 rounded-md overflow-hidden">
                  <img
                    src={HeroAreaWoman}
                    alt=""
                    className="h-full w-full object-contain object-center"
                  />
                </div>
                <div>
                  <h1 className="font-bold font-Playfair text-background tracking-wider">
                    Betty Williams
                  </h1>
                  <span className="text-background text-sm">Roysambu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default About
