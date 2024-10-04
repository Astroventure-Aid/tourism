import React from "react";
import "./Home.css";
import WhoWeAre from "../../components/whoWeare/WhoWeAre";
import MustSee from "../../components/MustSee/MustSee";
import TripCard from "@/components/TripCard/TripCard";
import Slider from "@/components/Slider/Slider";
import Upcoming from "../../components/Upcoming/Upcoming";
import UpComingTripCard from "@/components/UpComingTripCard/UpComingTripCard";
import UpcomingSlider from "@/components/Slider/UpcomingSlider";

function Home() {
  return (
    <div>
      {/* main video or image */}
      {/* <div className="mainPhotoContainer"> */}
      {/* <img src="stargazing.jpg" alt="stargazing" /> */}
      {/* <video  src="https://www.incredibleindia.gov.in/content/dam/incredible-india/videos/home/India-360-v2.mp4"  alt ="ye na cholbe"></video> */}
      {/* <iframe src="https://www.incredibleindia.gov.in/content/dam/incredible-india/videos/home/India-360-v2.mp4" frameborder="0">Vedio</iframe> */}
      {/* </div> */}
      <div className="mainPhotoContainer">
        <video
          width="100%"
          height="auto"
          autoplay
          muted
          loop
          controlsList="nodownload nofullscreen noremoteplayback"
          disablePictureInPicture
        >
          <source
            src="https://www.incredibleindia.gov.in/content/dam/incredible-india/videos/home/India-360-v2.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* </div>   */}
      </div>

      <WhoWeAre />
      {/* <TripCard /> */}
      <MustSee />
      <Slider />
      <Upcoming />
      {/* <UpComingTripCard/> */}
      <UpcomingSlider />
    </div>
  );
}

export default Home;
