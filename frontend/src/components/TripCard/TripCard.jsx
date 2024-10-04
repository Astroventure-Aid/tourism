import React from 'react'
import "./TripCard.css"

function TripCard({image, title}) {
    return (
        <div className="card">
            <img src={image} alt="photo" />
            <div className="content">
                <p className="title">{title}</p>
            </div>
        </div>
    )
}

export default TripCard
