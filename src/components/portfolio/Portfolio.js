import React from 'react';
import './portfolio.css';
import IMG4 from '../../assets/me8.png'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/me7.png'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
      
        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src={IMG6} alt="" />
        </div>
          <h3>My Personal Portfolio</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com" className='btn' target="_blank" rel="noreferrer">Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src={IMG5} alt="" />
        </div>
          <h3>News Jet</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/jayantmehta18/NewsJet" className='btn' target="_blank" rel="noreferrer">Github</a>
          <a href="https://dribbble.com/Alien_pixels" className='btn' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>

        <article className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src={IMG4} alt="" />
        </div>
          <h3>TextUtils Website</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/jayantmehta18/TextUtils-React" className='btn' target="_blank" rel="noreferrer">Github</a>
          <a href="" className='btn' target='_blank' rel="noreferrer">Live Demo</a>
          </div>
        </article>
    
      </div>
    </section>
  )
}

export default Portfolio