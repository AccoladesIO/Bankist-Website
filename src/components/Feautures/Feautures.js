import React from 'react'
import './FeauturesStyle.css'
import card from '../../Assets/card.jpg'
import digital from '../../Assets/digital.jpg'
import grow from '../../Assets/grow.jpg'
import {AiOutlineCreditCard, AiOutlineBank, AiOutlineMobile} from 'react-icons/ai'

const Feautures = () => {
  return (
    <section className='feauture-page' id='feautures'>
        <div className='feauture'>
            <h2 className='feautures-heading-main'> Feautures</h2>
            <h1 className='feautures-heading-alt'>Everything you need in a modern bank and more</h1>
        </div>
        <article className='feauture-grid'>
            <div className='img-box'>
                <img src={digital} alt=''/>
            </div>
            <div className='text-box-f'>
                <div className='icon-wrap'>
                    <AiOutlineMobile className='icons' />
                </div>
                <h1 className='feautures-heading-alt'>100% digital</h1>
                <p className='para-main'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ut doloremque ad aliquid voluptate molestiae maxime consequatur saepe laborum unde beatae neque nesciunt cum corporis, nostrum expedita. Autem, quae magnam!</p>
            </div>
            {/* next part */}

            <div className='text-box-f'>
                    <div className='icon-wrap'>
                    <AiOutlineCreditCard className='icons'/>
                    </div>
                <h1 className='feautures-heading-alt'>Free credit card</h1>
                <p className='para-main'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ut doloremque ad aliquid voluptate molestiae maxime consequatur saepe laborum unde beatae neque nesciunt cum corporis, nostrum expedita. Autem, quae magnam!</p>
            </div>
            <div className='img-box'>
                <img src={card} alt=''/>
            </div>


            {/* next part */}

            <div className='img-box'>
                <img src={grow} alt=''/>
            </div>
            <div className='text-box-f'>
                     <div className='icon-wrap'>
                    <AiOutlineBank className='icons' />
                    </div>
                <h1 className='feautures-heading-alt'>Watch your money grow</h1>
                <p className='para-main'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ut doloremque ad aliquid voluptate molestiae maxime consequatur saepe laborum unde beatae neque nesciunt cum corporis, nostrum expedita. Autem, quae magnam!</p>
            </div>


        </article>
    </section>
  )
}

export default Feautures