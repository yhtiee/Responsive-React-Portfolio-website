import React from 'react'
import {BsInstagram} from "react-icons/bs"
import {BsFacebook} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsTwitter} from "react-icons/bs"
import {AiOutlineArrowRight} from 'react-icons/ai'
import "./contact.css"
import { useRef } from 'react'
import emailjs from 'emailjs-com'


const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_0rcejky', 'template_ft55ltg', form.current, 'a5Pwok6HKtzHX5H8m')

        e.target.reset()

        alert("Message Sent")
    }
  return (
    <section id="contact">
        <div className="container contact__container">
            <div className="contact__left">
                <h2> Lets Talk </h2>
                <p> 
                    Contact me so we can collaborate and build interactive web applications to scale up your company.
                </p>
                <ul className='contact__socials'>
                        <li><a href="https://instagram.com" target='_blank' rel="noreferrer"> <BsInstagram/></a></li>
                        <li><a href="https://facebook.com" target='_blank' rel="noreferrer"> <BsFacebook/></a></li>
                        <li><a href="https://github.com" target='_blank' rel="noreferrer"> <BsGithub/></a></li>
                        <li><a href="https://twitter.com" target='_blank' rel="noreferrer"> <BsTwitter/></a></li>
                </ul>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div> <label htmlFor="name"> Your Name:</label> <input type="text" name='name' /></div>
             
               <div><label htmlFor="email"> Your Email:</label> <input type="email" name='email' /></div>
                
               <div> <label htmlFor="message">Message:</label>  <textarea name="message" rows="6" ></textarea></div>
               
                <button type='submit'  className='btn' id='btn1'> Send <AiOutlineArrowRight/> </button>
            </form>
        </div>
    </section>

  )
}

export default Contact