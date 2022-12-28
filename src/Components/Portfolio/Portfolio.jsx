import React from 'react'
// import {AiOutlineArrowRight} from 'react-icons/ai'
// import PI from "../../Assets/sfh.PNG"
// import P2 from "../../Assets/projectimage2.PNG"
// import P3 from "../../Assets/projectimage3.PNG"
import "./portfolio.css"

const Portfolio = () => {
  return (
    <section id="portfolio">
      <div className="container portfolio__container">

        <div className="portfolio__head">
          <h3> My Succesfully Finished Projects</h3>
          <div className="portfolio__head-right">
            <p> I have built projects, ranging from frontend projects to full-stack applications.And have worked in a team to bring most of this projects to actualization. I know this projects are eye cathing, have fun!</p>
            {/* <a href="#">Discover More  <AiOutlineArrowRight/> </a> */}
          </div>
        </div>

        <div className="portfolio__projects">
          <div className="wrap">
            <article className='portfolio__project'>
              <div className='portfolio__project-img'>
                <div className="portfolio_display">
                  <div className="portfolio_descriptions">
                    <div className="portfolio_description1">
                      <p> An e-commerece web application for a clothing brand which specializes on tie-dye designs.</p>
                      <p> I worked on both the backend and frontend</p>
                      <p> Tech Stack: React + Django </p>
                    </div>
                    <div className="portfolio__CTA">
                      <a href="https://github.com/yhtiee/React-E-Commerce-Website-Clothing" className='btn' target="_blank" id='specialbtn'  rel="noreferrer">Github Frontend</a>
                      <a href="https://github.com/yhtiee/React-Ecommercer-website-Backend-Using-Django" className='btn' target="_blank" id='specialbtn'  rel="noreferrer">Github Backend</a>
                      {/* <a href="https://behance.net" className='btn btn-primary' target="_blank">Website</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className='portfolio__project'>
              <div className='portfolio__project2-img'>
                <div className="portfolio_display">
                  <div className="portfolio_descriptions">
                    <div className="portfolio_description1">
                      <p>A Management System that focuses on solving the managemnt of employees and trainees problems at the RootHub it includes major functionalities like being able to Create, View, Edit, Delete informations.</p>
                      <p> I worked on both the backend and frontend</p>
                      <p> Tech Stack: React + Django </p>
                    </div>
                    <div className="portfolio__CTA">
                      <a href="https://github.com/yhtiee/Roothub-Management-System-Frontend-for-Management" className='btn' target="_blank" id='specialbtn'  rel="noreferrer">Github Frontend</a>
                      <a href="https://github.com/yhtiee/Roothub-Management-System-Backend" className='btn' target="_blank" id='specialbtn' rel="noreferrer">Github Backend</a>
                      {/* <a href="https://behance.net" className='btn btn-primary' target="_blank">Website</a> */}
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <article className='portfolio__project'>
              <div className='portfolio__project3-img'>
                <div className="portfolio_display">
                  <div className="portfolio_descriptions">
                    <div className="portfolio_description1">
                      <p>As a freelance backend Developer i worked with a Saudi Arabia based Company to restructure and build new features to the Firmware Analyser Software</p>
                      <p> I worked on the backend</p>
                      <p> Tech Stack: Django </p>
                    </div>
                    <div className="portfolio__CTA">
                      {/* <a href="https://github.com/yhtiee/Roothub-Management-System-Frontend-for-Management" className='btn' target="_blank" id='specialbtn'  rel="noreferrer">Github Frontend</a>
                      <a href="https://github.com/yhtiee/Roothub-Management-System-Backend" className='btn' target="_blank" id='specialbtn' rel="noreferrer">Github Backend</a> */}
                      <a href="http://tfapstaging.trustedpartners.software/signup" className='btn btn-primary' target="_blank" rel="noreferrer">Website</a>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
          {/* <article className='portfolio__project'>
            <span className='portfolio__project-img'> <img src={P2}  /></span>
            <div className="portfolio__CTA">
              <a href="https://github" className='btn' target="_blank" id='specialbtn'>Github</a>
              <a href="https://behance.net" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          </article> */}
          {/* <article className='portfolio__project'>
            <span className='portfolio__project-img'> <img src={P3}  /></span>
            <div className="portfolio__CTA">
              <a href="https://github" className='btn' target="_blank" id='specialbtn'>Github</a>
              <a href="https://behance.net" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          </article> */}
        </div>
      </div>
    </section>
  )
}

export default Portfolio