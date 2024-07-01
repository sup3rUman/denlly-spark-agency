import { Beauty1, Beauty2, Beauty3, Beauty4 } from "../assets";

const Beauty = () => {
  return (
    <main className="relative isolate h-full w-full ">
      <div className="max-w-[1560px] mx-auto">
        <div className="relative my-4">
          <div className="bg-cover bg-beauty relative h-56 md:h-96 flex items-center rounded-xl mx-4" />
          <div className="absolute grid inset-0 place-content-center">
            <h1 className="font-bold text-3xl md:text-6xl text-primary-foreground font-Melodrama">
              Beauty
            </h1>
          </div>
        </div>

        <div className="mt-12 mb-8 mx-4">
          <p className="text-2xl sm:text-4xl lg:text-5xl font-semibold md:leading-[60px] font-Melodrama">
            Skincare solutions that can be considered <br /> possible. Be it
            oily, normal, or dry, we have <br /> covered a range of skincare
            products for your skin.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-8 xl:gap-16 md:max-h-[600px] md:py-12 mx-4">
          <div className="border rounded-xl md:flex-1 h-80 lg:h-full w-full relative overflow-hidden">
            {/* skincare image */}
            <div className="bg-skincare bg-cover relative flex h-full" />
          </div>
          <div className="flex-1 space-y-4">
            <h1 className="font-semibold text-4xl font-Melodrama">Skincare</h1>
            <p>
              Skincare is vital for maintaining healthy skin throughout life. A
              consistent routine protects against environmental stressors, slows
              aging, and boosts confidence. Daily cleansing, moisturizing, and
              protection nourish the skin, improve its appearance, and support
              its natural functions.
            </p>
            <p>
              Skincare is a form of self-care that offers relaxation and
              mindfulness. It helps address specific skin concerns and promotes
              overall well-being. Investing in skincare now sets the foundation
              for beautiful, resilient skin in the future, allowing for graceful
              and confident aging.
            </p>
          </div>
        </div>

        <div className="my-12 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center space-y-4 p-2">
              <div className="h-16 w-16 rounded-xl overflow-hidden">
                <div
                  className="relative bg-cover bg-center bg-blend-overlay h-full w-full"
                  style={{ backgroundImage: `url(${Beauty1})` }}
                />
              </div>
              <h1 className="text-2xl font-semibold text-center font-Melodrama">
                Consciously formulated
              </h1>
              <p className="text-center">
                Our products are created with careful consideration of each
                ingredient's purpose and impact. We prioritize effective,
                skin-friendly components that deliver real results. Every
                formula is designed to nourish and protect your skin without
                unnecessary additives.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-2">
              <div className="h-16 w-16 rounded-xl overflow-hidden">
                <div
                  className="relative bg-cover bg-center bg-blend-overlay h-full w-full"
                  style={{ backgroundImage: `url(${Beauty2})` }}
                />
              </div>
              <h1 className="text-2xl font-semibold text-center font-Melodrama">
                Everyday essentials
              </h1>
              <p className="text-center">
                We focus on providing the core products you need for a simple
                yet effective skincare routine. Our range includes cleansers,
                moisturizers, and treatments that work together seamlessly.
                These essentials are designed to fit effortlessly into your
                daily life, making skincare easy and enjoyable.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-2">
              <div className="h-16 w-16 rounded-xl overflow-hidden">
                <div
                  className="relative bg-cover bg-center bg-blend-overlay h-full w-full"
                  style={{ backgroundImage: `url(${Beauty3})` }}
                />
              </div>
              <h1 className="text-2xl font-semibold text-center font-Melodrama">
                No palm & mineral oil
              </h1>
              <p className="text-center">
                We've eliminated palm and mineral oils from our formulations to
                promote sustainability and skin health. This choice helps
                protect rainforests and reduces the environmental impact of our
                products. Instead, we use plant-based alternatives that are
                gentle on your skin and the planet.
              </p>
            </div>
            <div className="flex flex-col items-center space-y-4 p-2">
              <div className="h-16 w-16 rounded-xl overflow-hidden">
                <div
                  className="relative bg-cover bg-center bg-blend-overlay h-full w-full"
                  style={{ backgroundImage: `url(${Beauty4})` }}
                />
              </div>
              <h1 className="text-2xl font-semibold text-center font-Melodrama">
                Without drying alcohols
              </h1>
              <p className="text-center">
                Our products are free from harsh, drying alcohols that can strip
                your skin of its natural oils. We use skin-friendly ingredients
                that cleanse and treat without causing irritation or dryness.
                This approach helps maintain your skin's natural moisture
                barrier, keeping it healthy and balanced.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row-reverse items-center gap-8 xl:gap-16 md:h-[600px] mx-4 my-8">
          <div className="border rounded-xl md:flex-1 h-96 lg:h-full w-full relative overflow-hidden">
            <div className="bg-facemask bg-cover relative flex h-full" />
          </div>
          <div className="flex-1 space-y-4">
            <h1 className="font-semibold text-4xl font-Melodrama">Our values</h1>
            <div>
              <h1 className="font-semibold text-xl tracking-tight font-Melodrama">
                01 Quality & Safety
              </h1>
              <p>
                Ensuring that all products are made with high-quality, safe
                ingredients that have been thoroughly tested and proven to be
                effective and gentle on the skin.
              </p>
            </div>
            <div>
              <h1 className="font-semibold text-xl tracking-tight font-Melodrama">
                02 Transparency
              </h1>
              <p>
                Being open and honest about the ingredients used in products,
                the sourcing of materials, and the manufacturing processes.
                Providing clear information to customers about the benefits and
                potential risks associated with products.
              </p>
            </div>
            <div>
              <h1 className="font-semibold text-xl tracking-tight font-Melodrama">
                03 Customer-Centric Approach
              </h1>
              <p>
                Prioritizing the needs and satisfaction of customers by offering
                personalized skincare solutions, excellent customer service, and
                ongoing support. Listening to customer feedback and continuously
                improving products and services based on their input.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Beauty
