import React from 'react'
import "./header.css"
import ME from '../../Assets/pic.png'
import {BsInstagram} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import Nav from '../Nav/Nav'
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
                    <img src={ME} alt="profile" />
                </div>
                <div className="header__right-bg">
                </div>
                    <ul className='header__socials'>
                        <li><a href="https://www.instagram.com/utibeabasiukeme/" target='_blank'> <BsInstagram/></a></li>
                        <li><a href="https://web.facebook.com/utibeabasi.ukeme.9/" target='_blank'> <BsFacebook/></a></li>
                        <li><a href="https://github.com" target='_blank'> <BsGithub/></a></li>
                        <li><a href="https://twitter.com" target='_blank'> <BsTwitter/></a></li>
                    </ul>
            </div> 
       </div>
   </header>
  )
}

export default Header