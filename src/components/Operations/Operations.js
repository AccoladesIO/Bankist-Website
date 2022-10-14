import React from 'react'
import { AiOutlineTransaction } from 'react-icons/ai'
import './OperationsStyle.css'

const Operations = () => {
  return (
    <section className='operation-page' id='operations'>
        <div className='feauture'>
            <h2 className='feautures-heading-main'> Operations</h2>
            <h1 className='feautures-heading-alt'>Everything as simple as possible, but no simpler.</h1>
        </div>
        <article className='operation-wrap'>
           <div className='space'>
           <div className='red'>
                <p></p>
            </div>
            <div className='yellow'>
                
            </div>
            <div className='green'>
                
             </div>
    
           </div>
            <h1 className='operation-heading-main'>
            <div className='icon-wrap'>
                <AiOutlineTransaction className='icons'/>
            </div>
                Transfer Money to anyone instantly! No fees, No BS.
            </h1>
            <p className='operation-para-main'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, ut doloremque ad aliquid voluptate molestiae maxime consequatur saepe laborum unde beatae neque nesciunt cum corporis, nostrum expedita. Autem, quae magnam</p>
        </article>
    </section>
  )
}

export default Operations