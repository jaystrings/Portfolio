import React from 'react'
import './portfolio.css'
import imgfirst from '../Assets/imgfirst.jpg'
import IMG2 from '../Assets/apparel.png'
import IMG3 from '../Assets/portfolio3.jpg'
 
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
    title:'ESTORE',
    github: '',
    demo : ''
  },
  {
    id:3,
    image:IMG3,
    title:'lll',
    github: 'gitsx',
    demo : 'urld'
  },

]

const Portfolio = () => {

  return ( 
    <section id='portfolio'>
      <h2>Portfolio</h2>
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
