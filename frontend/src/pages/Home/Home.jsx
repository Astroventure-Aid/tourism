import React from 'react'
import "./Home.css"
import WhoWeAre from '../../components/whoWeare/WhoWeAre'
import MustSee from '../../components/MustSee/MustSee'
import TripCard from '@/components/TripCard/TripCard'

function Home() {
  return (
    <div>
      {/* main video or image */}
      <div className="mainPhotoContainer">
        <img src="stargazing.jpg" alt="stargazing" />
      </div>

      <WhoWeAre />

      <MustSee/>
      
      <TripCard/>
      
    </div>
  )
}

export default Home