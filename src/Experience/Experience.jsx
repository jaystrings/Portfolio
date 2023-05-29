import { BsPatchCheckFill } from 'react-icons/bs'
import './experience.css'
import React from 'react'

const Experience = () => {
  return (
   <section id='experience'>
    <h3 className='yourguy' style={{textAlign:'center'}}>Experience</h3>

    <div className="container experience__container">
        <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience_content">
                <article className="experience_details">
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                    <h4> HTML</h4>
                    <small className="text-light">Experienced</small>
                    </div>
                </article>
                <article className="experience_details">
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                    <h4>CSS</h4>
                    <small className="text-light">Intermediate</small>
                    </div>
                </article>
                <article className="experience_details">
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                    <h4>Bootstrap</h4>
                    <small className="text-light">Intermediate</small>
                    </div>
                </article>
                <article className="experience_details">
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                    <h4>Javascript</h4>
                    <small className="text-light">Experienced</small>
                    </div>
                </article>
                <article className="experience_details">
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                    <h4>React</h4>
                    <small className="text-light">Intermediate</small>
                    </div>
                </article>
            </div>
        </div>
        <div className="experienced__backend">
        <h3>Backend Development</h3>
            <div className="experience_content">
                <article className="experience_details">
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                    <h4> Node JS</h4>
                    <small className="text-light">Experienced</small>
                    </div>
                </article>
                <article className="experience_details">
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                    <h4>MongoDB</h4>
                    <small className="text-light">Intermediate</small>
                    </div>
                </article>
                <article className="experience_details">
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                    <h4>Python</h4>
                    <small className="text-light">Intermediate</small>
                    </div>
                </article>
                <article className="experience_details">
                    <BsPatchCheckFill className='experience__details-icon'/>
                    <div>
                    <h4>MySQL</h4>
                    <small className="text-light">Intermediate</small>
                    </div>
                </article>
            </div>

        </div>
    </div>

   </section>
  )
}

export default Experience
