import React, {useState} from 'react'
import img from '../Assets/logo.png'
import './NavbarStyles.css'
import {links} from '../Data'
import { AiOutlineBars, AiOutlineClose } from 'react-icons/ai'
// import Sidebar from '../Sidebar/Sidebar'


const Navbar = () => {
    const handleClick = (e) => {
        e.preventDefault()
        // document.getElementById("mySidenav").style.width = "0";
        const target = e.target.getAttribute('href');
        const element = document.querySelector(target).offsetTop;
        window.scrollTo({
            left: 0,
            top: element - 80,
        })
    }
    const openNav = () => {
        document.getElementById("mySidenav").style.width = "70%";
      }
    
    const closeNav = () => {
        // const newClass = document.getElementsById("mySidenav")
        
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("mySidenav").style.transition = "0.8s";
    }

  return (

      <div className='navbar-wrapper'>
        {/* <Sidebar openModal={mobile} closeModal={() => setMobile(false)}/> */}
        <nav className='navbar'>
            <div className='logo-box'>
                <img src={img} alt=''/>
            </div>
            
            <div className='link' id='mySidenav'>
                {links.map((link) => {
                    return <a href={link.url} key={link.id} onClick={handleClick}>{link.text}</a>
                })}
                <AiOutlineClose className='icons--bar close' onClick={() => closeNav()}/>
            </div>
                <AiOutlineBars className='icons--bar' onClick={() => openNav()}/>
        </nav>
        
    </div>
  )
}

export default Navbar