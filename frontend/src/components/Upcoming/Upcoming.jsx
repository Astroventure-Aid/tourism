import React from "react";

const Upcoming = () => {
  return (
    <div className="upcoming-see-container mb-6 flex items-center justify-center">
      {/* Left Line */}
      <hr className="line w-1/4 sm:w-1/3" /> 

      {/* Upcoming Trips Text */}
      <h2 className="must-see-text text-3xl sm:text-sm md:text-4xl font-bold px-4 text-red-600 whitespace-nowrap">
        Upcoming Trips
      </h2>

      {/* Right Line */}
      <hr className="line w-1/4 sm:w-1/3" />
    </div>
  );
};

export default Upcoming;
