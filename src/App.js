import React, { useState } from 'react'

import './index.css';
import Home from './Home'
import './home.css'
import Navbar from './Navbar'
import './navbar.css'
import About from './About.js';
import './about.css'
import Project from './components/project/Project.js'
import './components/project/project.css'

// import Skills from './components/skills/Skills.js';
import './components/skills/skills.css'
// import Education from './components/education/Education.js';
import './components/education/edu.css'
import ContactForm from './components/Contact.jsx';
import { BentoGridSecondDemo } from './components/Bento.jsx';
import AboutPageBento from './components/Aboutme.jsx';
// import Project from './components/project/Project.js';
// import './components/project/project.css'


function App() {

  const [active, setactive]=useState('About');

  const activefromnav=(a)=>{
    setactive(a);
  }

  return (
    <>
      <div style={{ display: 'flex',alignItems: 'center', flexDirection: 'column', minHeight: '100vh' }}> 
        {/* Ensuring the main container takes up the full viewport height */}
        <Navbar activecomponent={activefromnav} />

        <div style={{ flexGrow: '1', overflowY: 'scroll', scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
          {/* flexGrow keeps this div flexible, overflowY allows scrolling within it */}
          {active === 'About' && <About />}
          {active === 'Projects' && <Project />}
          {active === 'Contact' && (
            <div style={{ height: 'fit-content' }}>
              <AboutPageBento />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
