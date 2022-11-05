import React from 'react'
import { useState } from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom'
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
function Navbar() {

    const [openLinks, setOpenLinks] = useState(false)

    const toggleButton = () => {
        setOpenLinks(!openLinks)
    }
    //
  return (
    <div className='navbar'>
        <div className='left-side'>
            <Link to='/' className='logo className='>LOGO</Link>
        </div>
        <div className='right-side'>
           <div className='links'>
           <Link to='/'>HEM</Link>
           <Link to='/About'>OM OSS</Link>
           <Link to='/Services'>TJÄNSTER</Link>
           <Link to='/Projects'>PROJEKT</Link>
           <Link to='/Contact'>KONTAKT</Link>
           </div>
           <button  onClick={toggleButton}>
            <ReorderOutlinedIcon />
           </button>
           <div className='hidden' id={openLinks ? 'open' : 'close'} >
           <Link to='/'>HEM</Link>
           <Link to='/About'>OM OSS</Link>
           <Link to='/Services'>TJÄNSTER</Link>
           <Link to='/Projects'>PROJEKT</Link>
           <Link to='/Contact'>KONTAKT</Link>
           </div>
        </div>
      
    </div>
  )
}

export default Navbar
