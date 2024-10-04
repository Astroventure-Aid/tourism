import React, { useEffect, useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../ui/carousel';
import UpcomingCard from "../UpComingTripCard/UpComingTripCard.jsx";
import axios from "axios";

function UpcomingSlider() {
  const [trips, setTrips] = useState([]);

  const getTrips = async () => {
    const { data } = await axios.get(`${String(import.meta.env.VITE_APP_BACKEND_URI)}/api/v1/trip/get-upcoming-trips`)
    setTrips(data.data);
  }

  useEffect(() => {
    getTrips()

  }, []);

  return (
    <>
      <div className="mb-10 md:basis-1/2 lg:basis-1/3  " >
        <Carousel
          className="relative overflow-hidden rounded-lg"
          orientation="horizontal"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-0.25 md:-ml-0.5">
            {
              trips && trips.map((trip) => (
                <CarouselItem className="flex items-center justify-center md:basis-1/1 lg:basis-1/1  md:pl-0.1"> {/* Reduced padding */}
                  <UpcomingCard
                    trip={trip}
                  />
                </CarouselItem>
              ))
            }


          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-black p-3 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 transition" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-black p-3 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 transition" />
        </Carousel>
      </div>
    </>
  );
}

export default UpcomingSlider;
