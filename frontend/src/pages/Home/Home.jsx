import React from 'react'
import "./Home.css"
import WhoWeAre from '../../components/whoWeare/WhoWeAre'

function Home() {
  return (
    <div>
      {/* main video or image */}
      <div className="mainPhotoContainer">
        <img src="stargazing.jpg" alt="stargazing" />
      </div>
      <WhoWeAre />
    </div>
  )
}

export default Home