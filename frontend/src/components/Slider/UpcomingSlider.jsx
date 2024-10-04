import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../ui/carousel';
import UpcomingCard from "../UpComingTripCard/UpComingTripCard.jsx";

function UpcomingSlider() {
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
          <CarouselContent className="-ml-0.25 md:-ml-0.5"> {/* Reduced margin */}
            <CarouselItem className="flex items-center justify-center md:basis-1/1 lg:basis-1/1  md:pl-0.1"> {/* Reduced padding */}
              <UpcomingCard
                  image="https://s7ap1.scene7.com/is/image/incredibleindia/rock-garden-chandigarh-1-attr-nearby?qlt=82&ts=1727353621313"
                  title="Kalsubai"
                  description="The highest peak in Maharashtra, promises an exhilarating trek with breathtaking panoramic views."
              />
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center md:basis-1/1 lg:basis-1/1  md:pl-0.1"> {/* Reduced padding */}
              <UpcomingCard
                //   image="https://s7ap1.scene7.com/is/image/incredibleindia/rock-garden-chandigarh-1-attr-nearby?qlt=82&ts=1727353621313"
                image = "https://s7ap1.scene7.com/is/image/incredibleindia/reiek-mountain-reiek-mizoram-rural-hero?qlt=82&ts=1727162177885" 
                title="Kalsubai"
                  description="The highest peak in Maharashtra, promises an exhilarating trek with breathtaking panoramic views."
              />
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center md:basis-1/1 lg:basis-1/1  md:pl-0.1"> {/* Reduced padding */}
              <UpcomingCard
                //   image="https://s7ap1.scene7.com/is/image/incredibleindia/rock-garden-chandigarh-1-attr-nearby?qlt=82&ts=1727353621313"
                // image = "https://s7ap1.scene7.com/is/image/incredibleindia/reiek-mountain-reiek-mizoram-rural-hero?qlt=82&ts=1727162177885" 
                image = "https://s7ap1.scene7.com/is/image/incredibleindia/kanthalloor-village-kerala-rural-hero?qlt=82&ts=1726643529094"
                title="Kalsubai"
                  description="The highest peak in Maharashtra, promises an exhilarating trek with breathtaking panoramic views."
              />
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center md:basis-1/1 lg:basis-1/1  md:pl-0.1"> {/* Reduced padding */}
              <UpcomingCard
                //   image="https://s7ap1.scene7.com/is/image/incredibleindia/rock-garden-chandigarh-1-attr-nearby?qlt=82&ts=1727353621313"
                // image = "https://s7ap1.scene7.com/is/image/incredibleindia/reiek-mountain-reiek-mizoram-rural-hero?qlt=82&ts=1727162177885" 
                // image = "https://s7ap1.scene7.com/is/image/incredibleindia/kanthalloor-village-kerala-rural-hero?qlt=82&ts=1726643529094"
                 image = "https://s7ap1.scene7.com/is/image/incredibleindia/madla-village-mp-rural-hero?qlt=82&ts=1726643529094"
                title="Kalsubai"
                  description="The highest peak in Maharashtra, promises an exhilarating trek with breathtaking panoramic views."
              />
            </CarouselItem>

            
 

          </CarouselContent>
          <CarouselPrevious className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-black p-3 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 transition" />
          <CarouselNext className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-red-500 text-black p-3 rounded-full shadow-lg hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-300 transition" />
        </Carousel>
      </div>
    </>
  );
}

export default UpcomingSlider;
