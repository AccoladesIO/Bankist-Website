import React, { useState } from 'react'
import data from './slideData'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa';


const Slider = () => {
    const [people, setPeople] = useState(data)
    const [current, setCurrent] = useState(0);

    const length = people.length;

    const nextSlide = () => {
        setCurrent(current === length - 1? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }
    console.log(current)
    if(!Array.isArray(people) || people.length <= 0){
        return null
    }


  return (
    <article className='section--main'>
        <div className='title'>
            <h2 className='feautures-heading-alt'>
                <span className='feautures-heading-main'>/ </span>Testimonials
            </h2>
        </div>
        <div className='section-center'>
                
                <FaArrowAltCircleLeft className='left' onClick={prevSlide}/>
                 <FaArrowAltCircleRight className='right' onClick={nextSlide}/>


            {people.map((person, index) =>{
                const {id, image, name, title, quote} = person;
                const style = index === current? 'slide active' : 'slide';
                return( <article key={id} className={style}>
                   
                    {index === current && (
                        <div className='section--alt'>
                        <p className='text'>{quote}</p>
                        <img src={image} alt={name} className='person-img' />
                        <p className='title'>{title}</p>
                        <p className='title'>{name}</p>
                        </div>
                    )}
                    {/* <AiOutlineCaretRight/> */}
                </article>)
            })}
        </div>
    </article>
  )
}

export default Slider