import './about.css'
import React from 'react'
import aboutMe from '../Assets/johncena.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h3 style={{textAlign:'center'}}>↓</h3>
      <div className='container about__container '>
        <div className="about__me">
          <div className="about__me_image">
            <img src={aboutMe} alt="" />
          </div>
        </div>
      <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h4>Experience</h4>
            <small>2+ Years Working experience</small>
          </article>
          <article className='about__card'>
            <FiUsers className='about__icon'/>
            <h4>Collaboration</h4>
            <small>A  good team player</small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
            <h4>Projects</h4>
            <small>7+ Completed projects</small>
          </article>
        </div>
        <p>An innovative, goal oriented and passionate software developer, aiming to leverage my expertise to improve the software development community.
        </p>
        <a href="#contact" className='talk btn btn-primary'>Let's talk</a>
      </div>
      </div>
    </section>
  )
}

export default About