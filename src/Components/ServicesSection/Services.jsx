import React from 'react'
import './Services.css'

const Services = () => {
  return (
    <div className="services">
        <span>WHAT WE OFFER</span>
        <h1>Comprehensive Services and Solution</h1>
        <div className="services-container">
            <div className="service-item">
                <i class="fa-solid fa-fire"></i>
                <h3>Web Development</h3>
                <p>Efficient, innovative web app development bringing your ideas to life with cutting-edge technology and design.</p>
            </div>
            <div className="service-item">
                <i class="fa-solid fa-chart-line"></i>
                <h3>Blockchain Development</h3>
                <p>Empower projects with secure, transparent, and efficient blockchain solutions. Transforming industries through innovative development.</p>
            </div>
            <div className="service-item">
                <i class="fa-solid fa-code"></i>
                <h3>Mobile App Development</h3>
                <p>Crafting innovative mobile apps to elevate user experiences, transforming ideas into seamless digital realities.</p>
            </div>
            <div className="service-item">
                <i class="fa-solid fa-rocket"></i>
                <h3>UI/UX Design</h3>
                <p>Creating intuitive and visually appealing user interfaces and experiences, enhancing user engagement and satisfaction.</p>
            </div>
            <div className="service-item">
                <i class="fa-solid fa-robot"></i>
                <h3>Artificial Intelligence</h3>
                <p>Utilizing advanced AI technologies to automate processes, enhance decision-making, and drive innovation</p>
            </div>
            <div className="service-item">
                <i class="fa-solid fa-comment"></i>
                <h3>Trainings</h3>
                <p>Master web & app development through our comprehensive training. Code, design, and deploy with expert guidance.</p>
                <button>Learn more <i class="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
    </div>
  )
}

export default Services