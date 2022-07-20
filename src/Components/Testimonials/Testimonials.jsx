import React from 'react'

const Testimonials = () => {
  return (
    <section id="testimonials">
        <h2> What Our Clients Say</h2>
        <p className='lead'>
            Explore the feed back from clients we have worked with in the past
        </p>
        <div className="testimonials__container">
            <article className="testimonial">
                <p>
                    "our company emphasizes on clean code because of ite readability and the ease to understand for future update and changes, working with Utibeabasi he made sure all his projects came with clean codes. "
                </p>
                <div className="testimonial__client">
                    <span className='avatar'><img src="" alt="" /></span>
                </div>
            </article>
        </div>
    </section>
  )
}

export default Testimonials