import React from 'react'
import HeroSection from '../Components/HeroSection/HeroSection.jsx'
import AboutUs from '../Components/AboutUs/AboutUs.jsx'
import Services from '../Components/ServicesSection/Services.jsx'
import Footer from '../Components/Footer/Footer.jsx'

const MainPage = () => {
  return (
    <div>
        <HeroSection/>
        <AboutUs/>
        <Services/>
        <Footer/>
    </div>
  )
}

export default MainPage