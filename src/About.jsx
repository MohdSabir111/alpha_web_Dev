import React from 'react'
import img from '../src/images/about.png'
import Common from './Common'

function About() {
  return (
    <>
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
