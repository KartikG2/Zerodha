import React from "react";
import './home/Hero.css';
import {Link} from "react-router-dom";

function NavBar() {
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg border-bottom fixed "
      style={{ backgroundColor: "#fff" }}
    >
      <div className="container d-flex">
        <div>
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "25%" }}
          />
        </Link>
        </div>
        
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 py-2">
            <li className="nav-item ">
              <Link className="nav-link px-4" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item" >
              <Link className="nav-link px-4" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-4" to="/products">
                Products
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link px-4 " to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-4 " to="/support">
                Support
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-4" to="#">
              <i className="fa-solid fa-bars" style={{fontSize:"1.27rem"}}></i>
              </Link>
            </li>
          </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
