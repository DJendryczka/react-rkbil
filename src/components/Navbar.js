import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='navbar'>
        <div className='left-side'>
            <Link to='/' className='logo className='>RK Bilskadecenter AB</Link>
        </div>
        <div className='right-side'>
           <Link className='links' to='/'>HEM</Link>
           <Link className='links' to='/About'>OM OSS</Link>
           <Link className='links' to='/Services'>TJÄNSTER</Link>
           <Link className='links' to='/Projects'>PROJEKT</Link>
           <Link className='links' to='/Contact'>KONTAKT</Link>
        </div>
      
    </div>
  )
}

export default Navbar
