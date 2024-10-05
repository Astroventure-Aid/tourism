import React, { useEffect, useState } from 'react';
import './TripForm.css';
import Form from '../../components/Form/Form';
import { SignedIn, SignedOut } from '@clerk/clerk-react';
import { useParams } from 'react-router';
import axios from 'axios';

function TripForm() {
  const [trip, setTrip] = useState(null)
  const { tripId } = useParams()

  const getTrip = async () => {
    const res = await axios.get(`${String(import.meta.env.VITE_APP_BACKEND_URI)}/api/v1/trip/get-trip/${tripId}`)
    setTrip(res.data.data)
  }

  useEffect(() => {
    getTrip()
  }, [tripId]);

  return (
    <div className='tripForm min-h-screen flex items-center justify-center'>
      <SignedIn>
        <div className='w-full mx-auto bg-white rounded-lg '>
          <div className='w-full max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg'>
            {/* Trip Info */}
            <div className='flex flex-col md:flex-row items-center md:items-start'>
              {/* Trip Image */}
              <div className='locationPhoto md:w-1/2 w-full mb-4 md:mb-0'>
                <img
                  src={trip?.mainPhoto}
                  alt='Kalsubai'
                  className='rounded-lg w-full h-auto object-cover shadow-md transition-transform duration-300'
                />
              </div>

              {/* Trip Details */}
              <ul className='md:w-1/2 md:ml-6 space-y-2 text-center md:text-left'>
                <li className='text-2xl font-bold text-gray-800'>{trip?.location}</li>
                {
                  trip?.status === "ComingSoon" ?
                    <li className='text-md text-gray-600'>Coming Soon</li> :
                    <li className='text-md text-gray-600'>Date: {trip?.tripDate.slice(0, 10)}</li>
                }
                <li className='text-md text-gray-600'>{trip?.origin}</li>
                <li className='text-md text-gray-600 font-bold'>Price: {trip?.price}</li>
                <li className='text-md text-black-600  text-left'>{trip?.description}</li>
                <li className='text-md text-gray-600'>{trip?.highlights}</li>
              </ul>
            </div>

            {
              <div className="w-full max-w-4xl mx-auto p-4 ">
                {/* Loop through the schedule object */}
                {trip?.schedule.map((daySchedule, dayIndex) => (
                  <div key={dayIndex} className="bg-gray-100 p-6 rounded-lg shadow-md mb-8">
                    {/* Day Heading */}
                    <h2 className="text-lg font-semibold  text-center text-blue-600">
                      Day {dayIndex + 1}
                    </h2>

                    {/* Loop through the events for each day */}
                    <ul className="space-y-2 text-gray-700">
                      {daySchedule.map((event, eventIndex) => (
                        <li key={eventIndex} className="flex items-start">
                          <span className="mr-2 text-lg">•</span>
                          <p className="text-sm">{event}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            }

            {/* Form Component */}
            <div className='mt-6'>
              <Form />
            </div>
          </div>

        </div>

      </SignedIn>

      <SignedOut>
        <h1 className='text-xl font-bold text-gray-700'>Please sign in to access this page</h1>
      </SignedOut>
    </div>
  );
}

export default TripForm;
