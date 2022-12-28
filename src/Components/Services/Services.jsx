import React from 'react'
import {CgWebsite} from 'react-icons/cg'
import {DiDjango} from 'react-icons/di'
import {DiCss3} from 'react-icons/di'
import {DiHtml5} from 'react-icons/di'
import {DiJsBadge} from 'react-icons/di'
import {DiReact} from 'react-icons/di'
import {DiMysql} from 'react-icons/di'
import {DiPython} from "react-icons/di"
import "./services.css"
const Services = () => {
  return (
    <section id='services'>
        <div className='container services__container'>
            <div className="services__left">
                <h1> 1+ </h1>
                <h4> Years Experience </h4>
                <small> I have experience in both frontend and backend technologies. which i use in combination with my creativity to create simple and beautiful sites the users will love.</small>
            </div>
            <div className="services__right">
                <h2> Full Stack Developer, Specialized in frontend, and backend.</h2>
                <div className="services__cards">
                    <div className="services__card">
                        <span className='services__card-icon'> <DiCss3/> <DiHtml5/> <DiJsBadge/> <DiReact/> </span>
                        <h5> Frontend Development </h5>
                        {/* <a href="#">Discover More <AiOutlineArrowRight/> </a> */}
                    </div>
                    <div className="services__card">
                        <span className='services__card-icon'> <DiDjango/> <DiPython/> <DiMysql/> </span>
                        <h5> Backend Development </h5>
                        {/* <a href="#">Discover More <AiOutlineArrowRight/> </a> */}
                    </div>
                    <div className="services__card">
                        <span className='services__card-icon'> <CgWebsite/> </span>
                        <h5> Full Stack  </h5>
                        {/* <a href="#">Discover More <AiOutlineArrowRight/> </a> */}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services