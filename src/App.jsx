import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar.jsx'
import MainPage from './Pages/MainPage';
import HeroSection from './Components/HeroSection/HeroSection';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<MainPage />} />
          <Route exact path="/" element={<HeroSection />} />
          {/* <Route path="/#services" element={<HeroSection />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App