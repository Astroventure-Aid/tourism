import React, { useEffect, useState } from 'react'
import "./AllTrips_Admin.css"
import axios from 'axios';

function AllTrips_Admin() {
  4
  const [data, setData] = useState([]);

  const getForms = async () => {
    const { data } = await axios.get(`${String(import.meta.env.VITE_APP_BACKEND_URI)}/api/v1/trip/admin/get-all-trips`)
    setData(data.data);
  }

  // Simulate backend data fetch
  useEffect(() => {
    getForms()
  }, []);
  return (
    <div className='allTrips flex justify-center'>
      <h1 className='text-4xl text-red-500 font-bold'>All Trips</h1>
      <div className='mainContainer'>
        
      </div>
    </div>

  )
}

export default AllTrips_Admin
