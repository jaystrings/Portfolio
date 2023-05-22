import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const Services = () => {
  return (
    <section id ='services'>
      <h3 className='move' style={{textAlign:'center'}}>Services</h3>
      <div className='container services__container'>
        <article className='services'>
           <div className='service__head'>
            <h3>WEB DEVELOPMENT</h3>
           </div>
           <ul className='service__list'>
            <li>
              <BiCheck className='service__list-iocn'/>
              <p>Web design and development</p>
            </li>
            <li>
              <BiCheck className='service__list-iocn'/>
              <p>Responsive design</p>
            </li>
            <li>
              <BiCheck className='service__list-iocn'/>
              <p>Ongoing website maintenance</p>
            </li>
            <li>
              <BiCheck className='service__list-iocn'/>
              <p>Hosting</p>
            </li>
            <li>
              <BiCheck className='service__list-iocn'/>
              <p>Analytics</p>
            </li>
            <li>
              <BiCheck className='service__list-iocn'/>
              <p>Email Marketing</p>
            </li>
           </ul>
        </article>
        <article className='services'>
           <div className='service__head'>
            <h3>CONTENT CREATION </h3>
           </div>
           <ul className='service__list'>
            <li>
              <BiCheck className='service__list-iocn'/>
              <p>Logo design</p>
            </li>
            <li>
              <BiCheck className='service__list-iocn'/>
              <p>Graphic design</p>
            </li>
            <li>
              <BiCheck className='service__list-iocn'/>
              <p>Ad Design</p>
            </li>
           </ul>
        </article>
      </div>
    </section>
  )
}

export default Services
