import React from 'react'
import images from "../src/images/about.jpg";
import Common from './Common';

const About = () => {
  return (
    <>
      <Common name='Welcome to About Page ' imgsrc={images} visit="/contact" btname="Contact Now" />
    </>
  )
}

export default About