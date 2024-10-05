import React from "react";

const MustSee = () => {
  return (
    <div className="must-see-container mb-8 flex items-center justify-center">
      {/* Left Line */}
      <hr className="line w-1/4 sm:w-1/3" /> {/* Adjust line width for smaller screens */}
      
      {/* Must-See Text */}
      <h2 className="must-see-text text-3xl sm:text-2xl md:text-4xl font-bold px-4 text-red-600">
        Must-See
      </h2>
      
      {/* Right Line */}
      <hr className="line w-1/4 sm:w-1/3" /> {/* Adjust line width for smaller screens */}
    </div>
  );
};

export default MustSee;
