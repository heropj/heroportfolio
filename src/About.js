import React, {useEffect, useState} from 'react'
import Skills from './components/skills/Skills';
import Education from './components/education/Education';
// import Experience from './components/Experience';
// import Connect from './Connect';

function About() {

    const [activeComponent, setActiveComponent] = useState('Skills');

    const handleClick = (component) => {
      setActiveComponent(component);
    };
    useEffect(() => {
        
    }, [activeComponent]);

  return (
    <div className='aboutcontainer'>
        
        {/* <h3>Hi there,</h3> */}

        <p>Hello! i'm Pranjal.<br/> ----intro----</p>
        <hr style={{width: '350px'}}/>
        
        <div className="showcase">
            <div className="skills" onClick={() => handleClick('Skills')} style={activeComponent === 'Skills' ? {color: "#2399C4"} : {}}>Skills</div>
            <div className={`education ${activeComponent === 'Education' ? 'active' : ''}`} onClick={()=> handleClick('Education')}>Education</div>
            <div className={`experience ${activeComponent === 'Experience' ? 'active' : ''}`} onClick={() => handleClick('Experience')}>Experience</div>
            <div className={`connect ${activeComponent === 'Connect' ? 'active' : ''}`} onClick={() => handleClick('Connect')}>Connect</div>
        </div>

        {activeComponent === 'Skills' && <Skills />}
        {activeComponent === 'Education' && <Education />}
        {activeComponent === 'Experience' && <h2>NIL</h2>/*<Experience />*/}
        {activeComponent === 'Connect' && <h2>NIL</h2>/*<Connect />*/}
      
    </div>
  )
}

export default About
