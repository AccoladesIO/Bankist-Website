import React from 'react'
import Slider from './slider/slider'
import './TestimonialStyles.css'

const Testimonials = () => {
  return (
    <section className='testimonial-page' id='testimonial'>
        <div className='feauture'>
            <h2 className='feautures-heading-main'> Not sure yet?</h2>
            <h1 className='feautures-heading-alt'>Millions of bankist are already making their lifes simpler; so should you!</h1>
        </div>
        <article>
            <Slider/> 
        </article>
    </section>
  )
}

export default Testimonials