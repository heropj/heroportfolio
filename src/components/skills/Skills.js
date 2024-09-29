import React from 'react'
import svgs from './skillsvgs'


function Skills() {
    let skillarr=['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind', 'NodeJS']
  return (
    <div className='skillscontainer' >
        {/* {svgs.map((svg, index) => (
            <div key={index} className="svg-container">
            <span  className="svgicon" dangerouslySetInnerHTML={{ __html: svg }} title={skillarr[index]} />
            </div>
        ))} */}

        {svgs.map((svg, index) => (
            <div key={index} className="svg-container"
            dangerouslySetInnerHTML={{ __html: svg }} title={skillarr[index]}
            />
        ))}
    </div>
  )
}

export default Skills
