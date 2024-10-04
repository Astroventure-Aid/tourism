import React from "react";
import "./UpComingTripCard.css"; // Import your CSS file
import { useNavigate } from "react-router";

const UpComingTripCard = ({ trip }) => {
  const navigate = useNavigate()

  const handleClick = ()=>{
    navigate(`/trip/${trip._id}`)
  }
  return (
    <div className="trip-card">
      <div className="trip-card-content">
        <div className="trip-card-text w-1/2 flex flex-col justify-between p-8">

          <div className="">
            <div className="text-4xl font-semibold mb-3">{trip.location}</div>
            {trip.status === "Started" ? (
              <div className="text-sm text-gray-500">Date: {trip.tripDate}</div>
            ) : (
              <div className="text-3xl text-red-500">Coming Soon</div>
            )}
            <p className="mt-2 text-gray-600">{trip.origin}</p>
          </div>
          <button className="trip-button" onClick={handleClick}>I'm in</button>
        </div>
        <div className="trip-card-image">
          <img src={trip.mainPhoto} alt="" />
        </div>
      </div>
    </div>
  );
};

export default UpComingTripCard;