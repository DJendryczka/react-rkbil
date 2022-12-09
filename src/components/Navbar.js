import React from 'react';
import { useState } from 'react';
import './styles/Navbar.css';
import { Link } from 'react-router-dom';
import ReorderOutlinedIcon from '@mui/icons-material/ReorderOutlined';
function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleButton = () => {
    setOpenLinks(!openLinks);
  };
  //
  return (
    <div>
      <div className='navbar'>
        <div className='left-side'>
          <Link to='/' className='logo className='>
            <p>RK Bilskadecenter AB</p>
          </Link>
        </div>
        <div className='right-side'>
          <div className='links'>
            <Link to='/'>HEM</Link>
            <Link to='/About'>OM OSS</Link>

            <Link to='/Projects'>PROJEKT</Link>
            <Link to='/Contact'>KONTAKT</Link>
          </div>
          <button className='nav-btn' onClick={toggleButton}>
            <ReorderOutlinedIcon />
          </button>
          <div className='hidden' id={openLinks ? 'open' : 'close'}>
            <Link onClick={toggleButton} to='/'>
              HEM
            </Link>
            <Link onClick={toggleButton} to='/About'>
              OM OSS
            </Link>

            <Link onClick={toggleButton} to='/Projects'>
              PROJEKT
            </Link>
            <Link onClick={toggleButton} to='/Contact'>
              KONTAKT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
