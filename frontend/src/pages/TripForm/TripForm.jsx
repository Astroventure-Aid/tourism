import React from 'react';
import './TripForm.css';
import Form from '../../components/Form/Form';
import { SignedIn, SignedOut } from '@clerk/clerk-react';

function TripForm() {
  const locationPhoto = 'https://thumbs.dreamstime.com/b/kalsubai-mountain-western-ghats-located-indian-state-maharashtra-its-summit-situated-elevation-metres-feet-156551530.jpg?w=768'

  return (
    <div className='tripForm min-h-screen flex items-center justify-center'>
      <SignedIn>
        <div className='w-full max-w-3xl'>
          {/* Trip Info */}
          <div className='flex flex-col md:flex-row items-center md:items-start'>
            {/* Trip Image */}
            <div className='locationPhoto md:w-1/2 w-full mb-4 md:mb-0'>
              <img
                src={locationPhoto}
                alt='Kalsubai'
                className='rounded-lg w-full h-auto object-cover shadow-lg'
              />
            </div>

            {/* Trip Details */}
            <ul className='md:ml-6 space-y-2 text-center md:text-left'>
              <li className='text-xl font-semibold text-gray-800'>Kalsubai</li>
              <li className='text-sm text-gray-600'>PUNE to PUNE</li>
              <li className='text-sm text-gray-600'>Date: 19-20 Oct</li>
              <li className='text-sm text-gray-600'>Description: A thrilling adventure to the highest peak in Maharashtra.</li>
              <li className='text-sm text-gray-600'>Highlights: Beautiful landscapes, sunrise trek, and camping experience.</li>
            </ul>
          </div>

          {/* Form Component */}
          <div className='mt-6'>
            <Form />
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
