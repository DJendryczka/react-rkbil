import React from 'react'
import Rep1 from '../../assets/rep1.jpg'
import Rep2 from '../../assets/rep2.jpg'
import Rep3 from '../../assets/rep3.jpg'
import Rep4 from '../../assets/rep4.jpg'
import Rep5 from '../../assets/rep5.jpg'
import Rep6 from '../../assets/rep6.jpg'
import '../styles/Project.css'

const Projects = () => {
  return (
    <div className='projects'>
           <h1>Några av Våra Projekt</h1>
           <div class="img-container">
              <div className='img-card'><img src={Rep1} alt='Rep ab bil' /></div>
              <div className='img-card'><img src={Rep2} alt='Rep ab bil' /></div>
              <div className='img-card'><img src={Rep3} alt='Rep ab bil' /></div>
            </div>
            <div class="img-container">
              <div className='img-card'><img src={Rep4} alt='Rep ab bil' /></div>
              <div className='img-card'><img src={Rep5} alt='Rep ab bil' /></div>
              <div className='img-card'><img src={Rep6} alt='Rep ab bil' /></div>
            </div>
    </div>
  )
}

export default Projects
