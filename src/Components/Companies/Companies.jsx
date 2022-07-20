import React from 'react'
import './companies.css'
import CO from '../../Assets/roothublogo.png'

const Companies = () => {
  return (
    <section id='companies'> 
        <div className='container companies__container'>
            <span><img src={CO} alt="companies" /></span>
        </div>
    </section>
  )
}

export default Companies