import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FiFacebook} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='_blank '><AiOutlineLinkedin/></a>
        <a href="https://github.com" target='_blank '><BsGithub/></a>
        <a href="https://facebook.com" target='_blank '><FiFacebook/></a>
        
      
    </div>
  )
}

export default HeaderSocials
