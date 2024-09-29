import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function Navbar({ activecomponent }) {
  const [active,setactive]=useState('About');
  const handleClick=(ac)=>{
    setactive(ac);
    activecomponent(ac);
  }

  return (
    <div className='navcontainer'>
      <div className='logobox' ><Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>PJ.</Link></div>
      <div className='navlinkbox'>
        <div className={`about ${active === 'About' ? 'navactive' : ''}`} onClick={() => handleClick('About')}>About</div>
        <div className={`projects ${active === 'Projects' ? 'navactive' : ''}`} onClick={() => handleClick('Projects')}>Projects</div>
        <div className={`contact ${active === 'Contact' ? 'navactive' : ''}`} onClick={() => handleClick('Contact')}>Contact</div>
      </div>
      
    </div>
  )
}

export default Navbar
