import React from 'react'
import './HeroSection.css'
import hero_img from '../../assets/images/hero-img.png'
import waves from '../../assets/images/wavy.png'

const HeroSection = () => {
  return (
    <div className="heroSection" id='home'>
        <div className="heroSec-left">
            <h1>We offer modern solutions for growing your business</h1>
            <p>We help businesses digitally transform, build new products, and accelerate digital teams - Fast and Effiecient</p>
            <button>Learn More</button>
            
        </div>
        <div className="heroSec-right">
            <img src={hero_img} alt="" />
        </div>
        <img className='wave' src={waves} alt="" />
    </div>
  )
}

export default HeroSection