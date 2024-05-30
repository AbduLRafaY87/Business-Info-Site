import React, { useEffect, useState } from 'react'
import logo from '../../assets/images/logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {

  const[menu, setMenu] = useState("home")
  const[isScrolled, setIsScrolled] = useState(false)
  const[isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className={`navbar ${isScrolled === true ? 'small' : ''}`}>
        <div className={`nav-logo ${isScrolled === true? 'small': ''}`}>
          <img src={logo} alt="" />
        </div>
        <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
            <ul className={`links ${isScrolled === true? 'small' : '' }`}>
            <p onClick={toggleMenu}>CLOSE</p>
            <li onClick={()=>{setMenu("home"); scrollToSection('home');}} ><Link className={menu === 'home' ? 'active' : ''} to='#home' style={{ textDecoration: 'none', color: menu==='home'?'black': '#36454F' }} >HOME</Link></li>

            <li onClick={()=>{setMenu("services"); scrollToSection('services');}}><Link className={menu === 'services' ? 'active' : ''} to='#services' style={{textDecoration: 'none', color: menu==='services'?'black': '#36454F'}} >SERVICES</Link></li>

            <li onClick={()=>{setMenu("portfolio"); scrollToSection('portfolio');}}><Link className={menu === 'portfolio' ? 'active' : ''} to='#portfolio' style={{textDecoration: 'none', color: menu==='portfolio'?'black': '#36454F'}}>PORTFOLIO</Link></li>

            <li onClick={()=>{setMenu("careers"); scrollToSection('careers');}}><Link className={menu === 'careers' ? 'active' : ''} to='#careers' style={{textDecoration: 'none', color: menu==='careers'?'black': '#36454F'}}>CAREERS</Link></li>

            <li onClick={()=>{setMenu("contact"); scrollToSection('contact');}}><Link className={menu === 'contact'? 'active' : ''} to='#contact' style={{textDecoration: 'none', color: menu==='contact'?'black': '#36454F'}}>CONTACT</Link></li>
          </ul>
        </div>
        <div className={`nav-button ${setIsScrolled === true ? 'small' : ''}`}>Get a Quote</div>
        <div className="menu-icon"><i className='fa-solid fa-bars' onClick={toggleMenu} id='menuBars'></i></div>
    </div>
  )
}

export default Navbar

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import logo from '../../assets/images/logo.png';
// import './Navbar.css';

// const Navbar = () => {
//   const [menu, setMenu] = useState('home');

//   return (
//     <div className="navbar">
//       <div className="nav-logo">
//         <img src={logo} alt="Logo" />
//       </div>
//       <div className="nav-links">
//         <ul className="links">
//           <li onClick={() => setMenu('home')}>
//             <Link
//               style={{
//                 textDecoration: 'none',
//                 color: menu === 'home' ? 'black' : '#36454F',
//               }}
//               to="#home"
//             >
//               HOME
//             </Link>
//           </li>
//           <li onClick={() => setMenu('services')}>
//             <Link
//               style={{
//                 textDecoration: 'none',
//                 color: menu === 'services' ? 'black' : '#36454F',
//               }}
//               to="#services"
//             >
//               SERVICES
//             </Link>
//           </li>
//           <li onClick={() => setMenu('portfolio')}>
//             <Link
//               style={{
//                 textDecoration: 'none',
//                 color: menu === 'portfolio' ? 'black' : '#36454F',
//               }}
//               to="#portfolio"
//             >
//               PORTFOLIO
//             </Link>
//           </li>
//           <li onClick={() => setMenu('careers')}>
//             <Link
//               style={{
//                 textDecoration: 'none',
//                 color: menu === 'careers' ? 'black' : '#36454F',
//               }}
//               to="#careers"
//             >
//               CAREERS
//             </Link>
//           </li>
//           <li onClick={() => setMenu('contact')}>
//             <Link
//               style={{
//                 textDecoration: 'none',
//                 color: menu === 'contact' ? 'black' : '#36454F',
//               }}
//               to="#contact"
//             >
//               CONTACT
//             </Link>
//           </li>
//         </ul>
//       </div>
//       <div className="nav-button">Get a Quote</div>
//     </div>
//   );
// };

// export default Navbar;
