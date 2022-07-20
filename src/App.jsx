import React from 'react'
import Nav from './Components/Nav/Nav'
import Header from "./Components/Header/Header"
import Services from "./Components/Services/Services"
import Portfolio from "./Components/Portfolio/Portfolio"
import Testimonials from "./Components/Testimonials/Testimonials"
import Contact from "./Components/Contact/Contact"
import Companies from './Components/Companies/Companies'
import Footer from './Components/Footer/Footer'
const App = () => {

  return (
    <>
        <Nav/>
        <Header/>
        <Companies/>
        <Services/>
        <Portfolio/>
        {/* <Testimonials/> */}
        <Contact/>
        <Footer/>
    </>
  )
}

export default App