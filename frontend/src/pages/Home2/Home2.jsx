import React from 'react'
import "./Home2.scss"
import image from "../../assets/photo.jpg"
const home2 = () => {
  return (
    <div className='home2'>
        <h1>What we do Here</h1>
        <p>
            Avefiles Foundation is a dedicated non-govermental organization (NGO) deeply
            committed to fostering the holistic dvevlopment and employment of youth in the 
            enchanting region of Jammu and Kashmir, specifically situated in the heart of Rajbagh, Srinagar.
        </p>
        <div className="image-section">
            <img
            src={image}
            />
        </div>


    </div>
    
  )
}

export default home2