import React from 'react'

import about_img from '../../assets/images/aboutUs-img.png'
import './AboutUs.css'

const AboutUs = () => {
  return (
    <div className="aboutUs" id='services'>
        <div className="aboutSec-left">
            <img src={about_img} alt="" />
        </div>
        <div className="aboutSec-right">
            <h1>WHO WE ARE</h1>
            <h3>Unleashing Digital Brilliance: Meet Our Web App Wizards</h3>
            <p>At VERTUZE, we are a passionate team of web app aficionados on a mission to redefine digital excellence. With a keen eye for design and a flair for innovation, we craft powerful and user-centric web applications that drive growth and elevate brands. Our relentless pursuit of perfection and commitment to cutting-edge technologies enable us to create seamless, scalable, and secure web experiences. Join us on this digital journey and unlock the true potential of your online presence. Let's turn your ideas into reality!</p>
        </div>
    </div>
  )
}

export default AboutUs