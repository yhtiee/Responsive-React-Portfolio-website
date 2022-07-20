import React from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import PI from "../../Assets/projectimage1.PNG"
import P2 from "../../Assets/projectimage2.PNG"
import P3 from "../../Assets/projectimage3.PNG"
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
          <article className='portfolio__project'>
            <span className='portfolio__project-img'> <img src={PI}  /></span>
            <div className="portfolio__CTA">
              <a href="https://github" className='btn' target="_blank" id='specialbtn'>Github</a>
              <a href="https://behance.net" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          </article>
          <article className='portfolio__project'>
            <span className='portfolio__project-img'> <img src={P2}  /></span>
            <div className="portfolio__CTA">
              <a href="https://github" className='btn' target="_blank" id='specialbtn'>Github</a>
              <a href="https://behance.net" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          </article>
          <article className='portfolio__project'>
            <span className='portfolio__project-img'> <img src={P3}  /></span>
            <div className="portfolio__CTA">
              <a href="https://github" className='btn' target="_blank" id='specialbtn'>Github</a>
              <a href="https://behance.net" className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Portfolio