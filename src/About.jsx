import React from 'react'
import img from '../src/images/about.png'
import Common from './Common'

function About() {
  return (
    <>  
     <div className="my-5">
      <h1 className="text-center" id='about'>About Us </h1>
      </div>
         <Common
           pageLines = 'we are the community of Software Developers'
           imageSrc = {img}
           btnName = 'Services'
           visit = '/services'
      />
    </>
  )
}

export default About
