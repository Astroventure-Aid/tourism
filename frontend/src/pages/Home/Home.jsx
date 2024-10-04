import React from "react";
import "./Home.css";
import WhoWeAre from "../../components/whoWeare/WhoWeAre";
import MustSee from "../../components/MustSee/MustSee";
import Slider from "@/components/Slider/Slider";
import Upcoming from "../../components/Upcoming/Upcoming";
import UpcomingSlider from "@/components/Slider/UpcomingSlider";

function Home() {
  return (
    <div>
      <div className="video-container">
        <video
          src="https://www.incredibleindia.gov.in/content/dam/incredible-india/videos/home/Adventure.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="background-video"
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <WhoWeAre />


      <MustSee />
      <Slider />

      <Upcoming />
      <UpcomingSlider />
    </div>
  );
}

export default Home;
