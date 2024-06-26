import React from "react";
import "./Navbar.css";
//import { NavLink } from "react-router-dom";
 import { HashLink as NavLink } from "react-router-hash-link";
function Navbar() {
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto">
            <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-none">
                <div className="container-fluid">
                  <NavLink className="navbar-brand " smooth to="#">
                    Alpha Devs
                  </NavLink>
                  <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div
                    className="collapse navbar-collapse"
                    id="navbarSupportedContent"
                  >
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                      <li className="nav-item">
                        <NavLink
                          
                          className="nav-link "
                          aria-current="page"
                         smooth to="/"
                        >
                          Home
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          
                          className="nav-link"
                         smooth to="#services"
                        >
                          Services
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          
                          className="nav-link"
                          smooth to="#about"
                        >
                          About
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <NavLink
                          
                          className="nav-link"
                          smooth to="#contact"
                        >
                          Contact
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
