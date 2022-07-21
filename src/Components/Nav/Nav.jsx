import React from 'react'
import "./nav.css"
import CV from "../../Assets/Resume.pdf"
import {BsDownload} from "react-icons/bs"
import {GiHamburgerMenu} from "react-icons/gi"
import {AiOutlineClose} from "react-icons/ai"
import { useState } from 'react'
const Nav = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [activeNav, setActiveNav] = useState("#header")
  const openToogle = ()=>{
      setNavbarOpen(prev => !prev)
  }
  const handleFunctionHeader = () => {

    setNavbarOpen(false)
    setActiveNav("#header")
   
  }
  const handleFunctionServices = () => {

    setNavbarOpen(false)
    setActiveNav("#services")
  
  }
  const handleFunctionPortfolio = () => {

    setNavbarOpen(false)
    setActiveNav("#portfolio")
    
  }
  const handleFunctionContact = () => {

    setNavbarOpen(false)
    setActiveNav("#contact")
  }
  const handleFunction = () => {

    setNavbarOpen(false)
    
  }
  return (
    <nav>
      <div className="container nav__container">

        <a href="#header" className='nav__logo'>
         <h3> Yhutiee </h3>
        </a>

        <ul className={`nav__menu ${navbarOpen ? " show__menu" : ""}`}>
            <li><a href="#header" onClick={handleFunctionHeader} className={activeNav === "#header" ? "active": " "}>HOME</a></li>
            <li><a href="#services"  onClick={handleFunctionServices} className={activeNav === "#services" ? "active": " "}>SERVICES</a></li>
            <li><a href="#portfolio"  onClick={handleFunctionPortfolio} className={activeNav === "#portfolio" ? "active": " "}>PORTFOLIO</a></li>
            <li><a href="#contact"  onClick={handleFunctionContact} className={activeNav ==="#contact" ? "active": " "}>CONTACT</a></li>
            <li><a href={CV} download className="btn btn-primary" onClick={handleFunction}> <BsDownload/> Download CV </a></li>
        </ul>

        <button onClick={openToogle}> {navbarOpen? <AiOutlineClose id='close-menu-btn'/> : <GiHamburgerMenu id='open-menu-btn' /> }</button>
       
      </div>
    </nav>
  )
}

export default Nav