import React from 'react'
import '../components/styles/Footer.css'
const Footer = () => {
  return (
    <div className='footer-container'>
       <div className='footer-card'>
       <p className='footer'>Öppet tider Måndag-fredag</p>
       <p className='footer'>7.00 - 16:00</p>
       <p className='footer'>Lördag - Söndag - <span className='company-name'>Stängt</span></p>
       </div>
       <div className='footer-card'>
       <p className='footer'>Besöks  adress</p>
       <p className='footer'>Blästergatan 5 212-22 Malmö</p>
       <p className='footer'>&copy; 2022 RK Bilskadecenter AB</p>
       </div>
    </div>
  )
}

export default Footer
