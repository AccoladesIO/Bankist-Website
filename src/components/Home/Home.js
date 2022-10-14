import React from 'react'
import './HomeStyles.css'
import hero from '../../Assets/hero.png'

const Home = () => {
  return (
    <section className='home-page' id='home'>
        <div className='text-box'>
            <h1 className='heading-main'>
                When <span className='text-span'>banking</span> meets <span className='text-span'>minimalist</span>
            </h1>
            <h2 className='heading-alt'>
                A simpler banking Experience for a simpler life.
            </h2>
            <button className='learn-more'>Learn More &darr;</button>
        </div>
        <div className='img-box'>
            <img src={hero} alt='hero-img' />
        </div>
    </section>
  )
}

export default Home