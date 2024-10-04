import React from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from '../ui/carousel';
import TripCard from "../TripCard/TripCard.jsx";

function Slider() {
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
            <CarouselItem className="flex items-center justify-center md:basis-1/1 lg:basis-1/4  md:pl-0.1"> {/* Reduced padding */}
              <TripCard
                  image="https://s7ap1.scene7.com/is/image/incredibleindia/rock-garden-chandigarh-1-attr-nearby?qlt=82&ts=1727353621313"
                  title="Trip to Mars"
              />
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center md:basis-1/1 lg:basis-1/4  md:pl-0.1"> {/* Reduced padding */}
              <TripCard
                  image="https://s7ap1.scene7.com/is/image/incredibleindia/1-sri-harmandir-sahib-(golden-temple)-amritsar-punjab-attr-nearby?qlt=82&ts=1726662259743"
                  title="Trip to Mars"
              />
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center md:basis-1/1 lg:basis-1/4  md:pl-0.1"> {/* Reduced padding */}
              <TripCard
                  image="https://s7ap1.scene7.com/is/image/incredibleindia/har-ki-pauri-haridwar1-attr-nearby?qlt=82&ts=1726645912765"
                  title="Trip to Mars"
              />
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center md:basis-1/1 lg:basis-1/4 md:pl-0.1"> {/* Reduced padding */}
              <TripCard
                  image="https://s7ap1.scene7.com/is/image/incredibleindia/sri-jagannath-temple-puri-odisha-1-attr-nearby?qlt=82&ts=1726663729229"
                  title="Trip to Mars"
              />
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center md:basis-1/1 lg:basis-1/4  md:pl-0.1"> {/* Reduced padding */}
              <TripCard
                  image="https://s7ap1.scene7.com/is/image/incredibleindia/chidiya-tapu-port-blair-andaman-nicobar-island-1-attr-nearby?qlt=82&ts=1726746290743"
                  title="Trip to Mars"
              />
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center md:basis-1/1 lg:basis-1/4  md:pl-0.1"> {/* Reduced padding */}
              <TripCard
                //   image="https://s7ap1.scene7.com/is/image/incredibleindia/chidiya-tapu-port-blair-andaman-nicobar-island-1-attr-nearby?qlt=82&ts=1726746290743"
                image = "https://s7ap1.scene7.com/is/image/incredibleindia/brahma-sarovar-kurukshetra-haryana-1-attr-nearby?qlt=82&ts=1726732428341"
                  title="Trip to Mars"
              />
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center md:basis-1/1 lg:basis-1/4  md:pl-0.1"> {/* Reduced padding */}
              <TripCard
                //   image="https://s7ap1.scene7.com/is/image/incredibleindia/chidiya-tapu-port-blair-andaman-nicobar-island-1-attr-nearby?qlt=82&ts=1726746290743"
                image ="https://s7ap1.scene7.com/is/image/incredibleindia/mahabodhi-temple-gaya-bihar-1-attr-nearby?qlt=82&ts=1726740857751"
                  title="Trip to Mars"
              />
            </CarouselItem>
            <CarouselItem className="flex items-center justify-center md:basis-1/1 lg:basis-1/4  md:pl-0.1"> {/* Reduced padding */}
              <TripCard
                //   image="https://s7ap1.scene7.com/is/image/incredibleindia/chidiya-tapu-port-blair-andaman-nicobar-island-1-attr-nearby?qlt=82&ts=1726746290743"
                image ="https://s7ap1.scene7.com/is/image/incredibleindia/anjuna-beach-goa-goa-anjuna-beach--goa-1-attr-nearby?qlt=82&ts=1726735611350"
                  title="Trip to Mars"
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

export default Slider;
