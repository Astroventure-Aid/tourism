import React from "react";
import "./UpComingTripCard.css"; // Import your CSS file
import { useNavigate } from "react-router";

const UpComingTripCard = ({ trip }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/trip/${trip._id}`)
  }
  return (
    <div className="trip-card">
      <div className="trip-card-content flex flex-col-reverse md:flex-row">
        {/* Trip Details */}
        <div className="trip-card-text w-full md:w-1/2 flex flex-col justify-between p-8">
          <div>
            <div className="text-4xl font-semibold mb-3">{trip.location}</div>
            {trip.status === "Started" ? (
              <div className="text-lg text-gray-600">Date: {trip.tripDate.slice(0, 10)}</div>
            ) : (
              <div className="text-2xl text-red-500">Coming Soon</div>
            )}
            <p className="mt-2 text-gray-600">{trip.origin}</p>
          </div>
          <button className="trip-button mt-4 md:mt-0" onClick={handleClick}>I'm in</button>
        </div>

        {/* Trip Image */}
        <div className="trip-card-image w-full md:w-1/2">
          <img
            src={trip.mainPhoto}
            alt=""
            className="w-full h-auto object-cover  md:aspect-auto"
          />
        </div>

      </div>
    </div>

  );
};

export default UpComingTripCard;