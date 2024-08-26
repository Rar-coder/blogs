import React from 'react'
import NavigationBar from '../Components/NavigationBar'

function Aboutus() {
  return (
    <div>
        <NavigationBar/>
      <h1>I am in Home page</h1>
      <div className='Container-fluid'>
      <div className='Container'>
       
          <div className='row'>
            <div className='col-6'>
              <img class="im1" src='https://health-care-hospital.vercel.app/assets/images/about-banner.jpg'></img>
            </div>
            <div className='col-6'>
              <h1>We Care For Your Health</h1>
              <p>Dedicated to your well-being, we prioritize comprehensive care with compassion. Your health is our commitment. Through expert services and personalized attention, we strive to ensure your utmost wellness and comfort.

At our core, we are devoted to your health. Our team of professionals is committed to providing exceptional care, ensuring your peace of mind. Trust us to prioritize your well-being every step of the way</p>
<button class='bt1'>Read More</button>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aboutus
