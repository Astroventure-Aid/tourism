import React from 'react';

const WhoWeAre = () => {
  return (
    <section className="bg-white py-10 px-6 sm:px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between">
      {/* Left Section */}
      <div className="lg:w-1/2 space-y-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-black">Who We Are</h2>
        <p className="text-gray-600 leading-relaxed">
          Aenean feugiat ante iden augue bibendum, bibendum interdum dunatont
          fermentum. Integer auctor enim eget excel eleifend tristique.
          Suspendisse sed elit tortor. Nunc luctus, tellus aces elementum
          accumsan, diam dolor accumsan eros, sit amet! porttitor diam ante ac
          augue.
        </p>

        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white">
              {/* Icon for safety */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h4 className="text-base sm:text-lg font-semibold text-black">Safety First Always</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Praesent gravida nunc at tortor cursus, molestie dapibus purus
                posuere. Vestibulum commodo, massa eget rutrum feugiat.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white">
              {/* Icon for trusted travel */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 11c0-2.486-2.14-4.5-4.625-4.5S2.75 8.514 2.75 11v3.5a.5.5 0 00.5.5h10.5a.5.5 0 00.5-.5V11z"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h4 className="text-base sm:text-lg font-semibold text-black">Trusted Travel Guide</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Praesent gravida nunc at tortor cursus, molestie dapibus purus
                posuere. Vestibulum commodo, massa eget rutrum feugiat.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-red-500 flex items-center justify-center text-white">
              {/* Icon for time savings */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8v4l3 2"
                />
              </svg>
            </div>
            <div className="ml-4">
              <h4 className="text-base sm:text-lg font-semibold text-black">Time And Stress Savings</h4>
              <p className="text-gray-600 text-sm sm:text-base">
                Praesent gravida nunc at tortor cursus, molestie dapibus purus
                posuere. Vestibulum commodo, massa eget rutrum feugiat.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="lg:w-1/2 mt-8 lg:mt-0 relative ">
        <img
          src="https://via.placeholder.com/350x350" // Replace with your image link
          alt="Travelers"
          className="rounded-lg border-4 border-blue-500"
        />

        {/* Red Badge */}
        {/* <div className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center text-xs sm:text-sm lg:text-base font-bold shadow-lg transform translate-x-1/2 -translate-y-1/2">
          <span className="text-center">
            2.5K+<br />Tours Success
          </span>
        </div> */}
      </div>
    </section>
  );
};

export default WhoWeAre;
