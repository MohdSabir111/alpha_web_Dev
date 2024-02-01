import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Common(props) {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
   {/* --------------  page lines using props------------ */}
                    {props.pageLines} 
                    <strong className="brand-name"> Apha Devs </strong>
                  </h1>
                  <h2> We are the FullStack Team Let's grow with us </h2>
                  <div className="mt-3">
   {/* -------------- page link and button name using props------------ */}
                    <NavLink to={props.visit} className="btn-get-started ">
                      {props.btnName}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imageSrc}
                    className="img-fluid animated "
                    alt="Common-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;
