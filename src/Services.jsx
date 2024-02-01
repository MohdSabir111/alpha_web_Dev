import React from "react";
import img from "../src/images/services.png";
import Common from "./Common";
import Card from './Card'
import ServiceData from './ServicesData'


function Services() {
  return (
    <>
      <Common
        pageLines="we are the community of Software Developers"
        imageSrc={img}
        btnName="Contact Us"
        visit="/contact"
      />

<div className="my-5">
      <h1 className="text-center">Our Services </h1>
      </div>
        <div className="container-fluid mb-5 ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4" >
              
      {
         ServiceData.map((value, index)=>
         {
            return   <Card key={index}
                        imageSrc = {value.image}
                        title  = {value.title}
                               />
         }) }
     
               </div>
            </div>
          </div>
        </div>
   
    </>
  );
}

export default Services;
