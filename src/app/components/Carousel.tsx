import React from "react";

const Carousel = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-black to-grey-700">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          {/* Main Grid Container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid_cols-5 gap-4 h-full">
            {/* Item 1 */}
            <div className="col-span-2 sm:col-span-1 bg-gradient-to-r from-black to-grey-700 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="https://img.freepik.com/free-photo/close-up-delicious-pizza_23-2150852103.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1722384000&semt=ais_hybrid"
                  alt="Pizza 1"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500
                  ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Classic Bites
                </h3>
              </a>
            </div>

            {/* Item 2 */}
            <div className="col-span-2 sm:col-span-1 bg-gradient-to-r from-black to-grey-700 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <img
                  src="https://i.pinimg.com/474x/b3/64/24/b36424a97ce9b2267f7e0d33c9d6234c.jpg"
                  alt="Pizza 2"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500
                  ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 to-grey-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Gourment Grills
                </h3>
              </a>

              {/* Item 3 */}
              <div className="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="https://content3.jdmagicbox.com/comp/vadodara/w5/0265px265.x265.181113141913.z7w5/catalogue/domino-s-eme-school-vadodara-pizza-outlets-utpsmoam8c.jpg"
                    alt="Pizza 3"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500
                  ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 t0-grey-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                    Spicy Masla
                  </h3>
                </a>

                {/* Item 4 */}
                <a
                  href=""
                  className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="https://i.pinimg.com/736x/75/36/5a/75365ad0fba1a6d7f285a2d2327cd2e2.jpg"
                    alt="Pizza 4"
                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500
                  ease-in-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-grey-900/25 t0-grey-900/5"></div>
                  <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                    Veggie
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousel;



