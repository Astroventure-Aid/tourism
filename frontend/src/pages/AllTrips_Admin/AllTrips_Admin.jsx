import React, { useEffect, useState } from 'react'
import "./AllTrips_Admin.css"
import axios from 'axios';
import { Link } from 'react-router-dom';

function AllTrips_Admin() {

  const [trips, setTrips] = useState([]);

  const getTrips = async () => {
    try {
      const { data } = await axios.get(`${String(import.meta.env.VITE_APP_BACKEND_URI)}/api/v1/trip/admin/get-all-trips`)
      setTrips(data.data);
    } catch (error) {
      // console.log(error);
    }
  }

  // Simulate backend data fetch
  useEffect(() => {
    getTrips()
  }, []);

  return (
    <div className='allTrips p-8'>
      <h1 className='text-4xl text-red-500 font-bold mb-4'>All Trips</h1>
      <div className='mainContainer'>
        {
          trips && trips.map((trip) => (
            <div className=" p-4 px-10 bg-white shadow-md rounded-lg border border-gray-200 flex flex-row justify-between mb-2" key={trip._id}>
              <div className="mb-4 flex flex-col">
                <span className="text-lg font-semibold text-gray-800">
                  Location: <span className="font-normal">{trip.location}</span>
                </span>
                <div className="mt-1">
                  <span className="text-sm text-gray-600">
                    Trip Date: <span className="font-normal">{trip.tripDate.slice(0, 10)}</span>
                  </span>
                </div>
                <div className="mt-1">
                  <span className="text-sm text-gray-600">
                    Origin: <span className="font-normal">{trip.origin}</span>
                  </span>
                </div>
                <div className="mt-1">
                  <span className="text-sm text-gray-600">
                    Price: <span className="font-normal">Rs. {trip.price}</span>
                  </span>
                </div>
                <div className="mt-1">
                  <span className="text-sm text-gray-600">
                    Status: <span className="font-normal">{trip.status}</span>
                  </span>
                </div>
              </div>

              <div className="">
                <Link to={`/admin/tripFroms/${trip._id}`}>
                  <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-200">
                  View Forms
                  </button>
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </div>

  )
}

export default AllTrips_Admin
