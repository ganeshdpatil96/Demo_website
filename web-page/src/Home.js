import React from 'react'
import images from "../src/images/brovi.jpg";
import Common from './Common';

const Home = () => {
  return (
   <>
     <Common name='Grow your Buiness with ' imgsrc={images} visit="/service" btname="Get Started" />
   </>
  )
}

export default Home