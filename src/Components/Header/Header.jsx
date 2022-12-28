import React from 'react'
import "./header.css"
import CE from '../../Assets/new_profile.png'
import {BsInstagram} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {BsLinkedin} from "react-icons/bs"
// import Nav from '../Nav/Nav'
const Header = () => {
  return (

   <header id='header'>
      
       <div className='container header__container'>
            <div className="header__left">
               <div>
                    <h3> Hello There! I'm </h3>
                    <h1> Utibeabasi <br/> Ekpenyong</h1>
                    <p>
                        A Full Stack Web Developer. I have helped clients worldwide bring their ideas to the online market. Lets collaborate today!
                    </p>
                    <a href="#contact" className='btn btn-primary btn-lg' id='button'> Get in Touch </a>
               </div>
            </div>  
            <div className="header__right">
                <div className="header__image">
                    <img src={CE} alt="profile" />
                </div>
                <div className="header__right-bg">
                </div>
                    <ul className='header__socials'>
                        <li><a href="https://www.instagram.com/utibeabasi_dev/" target='_blank' rel="noreferrer"> <BsInstagram/></a></li>
                        <li><a href="https://facebook.com" target='_blank' rel="noreferrer"> <BsFacebook/></a></li>
                        <li><a href="https://github.com/yhtiee" target='_blank' rel="noreferrer"> <BsGithub/></a></li>
                        <li><a href="https://twitter.com" target='_blank' rel="noreferrer"> <BsTwitter/></a></li>
                        <li><a href="https://www.linkedin.com/in/utibeabasi-ekpenyong-4768a017a/" target='_blank' rel="noreferrer"> <BsLinkedin/></a></li>
                    </ul>
            </div> 
       </div>
   </header>
  )
}

export default Header