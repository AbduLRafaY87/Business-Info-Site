import React from 'react'
import './Footer.css'
import logo from '../../assets/images/logo.png'

const Footer = () => {
  return (
    <div className="footer">
        <div className="newsletter-sec">
            <h3>Our Newsletter</h3>
            <form action="#">
                <input type="text" placeholder='Enter email address' />
                <button type="submit">Subscribe</button>
            </form>
        </div>
        <div className="main-footer">
            <div className="part-one">
                <img src={logo} alt="" />
                <p>With a team of experienced professionals, we provide end-to-end software development services, from requirements gathering to deployment. Their expertise spans across various technologies, enabling us to develop tailored software solutions that meet clients' unique business needs.</p>
                <div className="icons">
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-youtube"></i>
                </div>
            </div>
            <div className="part-two">
                <h3>Useful Links</h3>
                <ul>
                    <li>- Home</li>
                    <li>- Services</li>
                    <li>- Portfolio</li>
                    <li>- Careers</li>
                    <li>- Contact</li>
                </ul>
            </div>
            <div className="part-three">
                <h3>Our Solutions</h3>
                <ul>
                    <li>- Mobile Development</li>
                    <li>- Web Development</li>
                    <li>- BlockChain Development</li>
                    <li>- Training</li>
                    <li>- UI/UX Design</li>
                </ul>
            </div>
            <div className="part-four">
                <h3>Contact Us</h3>
                <ul>
                    <li><b>Phone: </b> 012-35467</li>
                    <li><b>Email: </b> example.info@gmail.com</li>
                </ul>
            </div>
        </div>
        <div className="footer-end">
            <p>© Copyright <b>VERTUZE</b>. All Rights Reserved</p>
            <p>Designed by <span>Abdul Rafay</span></p>
        </div>
    </div>
  )
}

export default Footer