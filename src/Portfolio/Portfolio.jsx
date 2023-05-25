import React from 'react'
import './portfolio.css'
import imgfirst from '../Assets/imgfirst.jpg'
import IMG2 from '../Assets/studios.jpg'
import IMG3 from '../Assets/fylo.jpg'
 
const data = [
  {
    id:1,
    image:imgfirst,
    title:'TMDB MOVIES',
    github: 'https://github.com/jaystrings/movie.git',
    demo : 'https://johnademovies.netlify.app/'
  },
  {
    id:2,
    image:IMG2,
    title:'STUDIO3',
    github: 'https://https://github.com/jaystrings/drum-kits.git',
    demo : 'https://studio4john.netlify.app/'
  },
  {
    id:3,
    image:IMG3,
    title:'FYLO',
    github: 'https://github.com/jaystrings/newfylo.git',
    demo : 'https://jayfylochal.netlify.app'
  },

]

const Portfolio = () => {

  return ( 
    <section id='portfolio'>
      <h3 style={{textAlign:'center'}}>Portfolio</h3>
      <div className="container portfolio__container">
        {data.map((c)=>{
            return(
            <article key={c.id} className='portfolio__item'>
                <div className="portfolio__item-image">
                    <img src={c.image} alt={c.title} />
                </div>
                <h3>{c.title}</h3>
                <div className="portfolio__item-cta">
                    <a href={c.github} className='btn' target ='_blank'>Github</a>
                    <a href={c.demo} className='btn btn-primary' target='_blank'>Live Demo</a>
                </div>
            </article>
            )
        })}
      </div>
    </section>
  )
}

export default Portfolio
