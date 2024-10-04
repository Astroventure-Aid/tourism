import React from "react";
import "./Home.css";
import WhoWeAre from "../../components/whoWeare/WhoWeAre";
import MustSee from "../../components/MustSee/MustSee";
import TripCard from "@/components/TripCard/TripCard";
import Slider from "@/components/Slider/Slider";
import Upcoming from "../../components/Upcoming/Upcoming"

function Home() {
  return (
    <div>
      {/* main video or image */}
      <div className="mainPhotoContainer">
        <img src="stargazing.jpg" alt="stargazing" />
      </div>

      <WhoWeAre />
      {/* <TripCard /> */}
      <MustSee />
      <Slider/>
      <Upcoming/>
      
    </div>
  );
}

export default Home;
