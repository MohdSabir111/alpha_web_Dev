import React from "react";
import img from "../src/images/home1.png";
import Common from './Common'
import Services from './Services'
import About from './About'
import Contact from './Contact'


function Home() {
  return (
    <>
     <Common
        pageLines = 'Lets Grow Together with'
        imageSrc = {img}
        btnName = 'Get Started'
        visit = '/about'
         />
         <Services/>
         <About/>
         <Contact/>

    </>
  );
}

export default Home;
