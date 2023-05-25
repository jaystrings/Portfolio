import React from 'react'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {FiFacebook} from 'react-icons/fi'
import {BsGithub} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target='_blank '><AiOutlineLinkedin/></a>
        <a href="httpps://github.com/jaystrings" target='_blank '><BsGithub/></a>
        <a href="https://web.facebook.com/john.adejumo2" target='_blank '><FiFacebook/></a>
        
      
    </div>
  )
}

export default HeaderSocials
