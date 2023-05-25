import React from 'react'
import './header.css'
import Cv from './Cv'
import me from '../Assets/johncena.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <div>
       <header>
    <div className='container header__container'>
      <h4>Hi I'm</h4>
      <h1>Adejumo John</h1>
      <h5 className='text-light'>FullStack Developer</h5>
      <Cv/>
      <HeaderSocials/>
      <div className='me' >
        <img src={me}   alt="me" />
      </div>
      <a href="#contact" className ='scrolls'>Scroll Down</a>
    </div>
    <nav/>
    </header>
    </div>
  )
}

export default Header
