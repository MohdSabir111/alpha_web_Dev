import React from "react";
import img from "../src/images/home1.png";
import Common from './Common'


function Home() {
  return (
    <>
     <Common
        pageLines = 'Lets Grow Together with'
        imageSrc = {img}
        btnName = 'Get Started'
        visit = '/about'
         />
    </>
  );
}

export default Home;
