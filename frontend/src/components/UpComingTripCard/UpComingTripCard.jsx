import React from "react";
import "./UpComingTripCard.css"; // Import your CSS file

const UpComingTripCard = ({ image, title, description }) => {
  return (
    <div className="trip-card">
      <div className="trip-card-content">
        <div className="trip-card-text">
          <h3 className="trip-title">{title}</h3>
          <p className="trip-description">{description}</p>
          <button className="trip-button">I'm in</button>
        </div>
        <div className="trip-card-image">
          <img src={image} alt={title} />
        </div>
      </div>
    </div>
  );
};

export default UpComingTripCard;
