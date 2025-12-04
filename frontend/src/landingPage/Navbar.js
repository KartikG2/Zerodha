import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav
      className="navbar sticky-top navbar-expand-lg border-bottom bg-white"
      style={{ zIndex: 1000 }} 
    >
      <div className="container">
        
        {/* Logo Section */}
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logo.svg"
            alt="logo"
            style={{ width: "150px" }} 
          />
        </Link>

        {/* Hamburger Menu Button (Visible on Mobile) */}
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Links Section */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0"> {/* ms-auto pushes links to the right */}
            
            <li className="nav-item">
              <Link className="nav-link text-muted active-link px-3" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted active-link px-3" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted active-link px-3" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted active-link px-3" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-muted active-link px-3" to="/support">
                Support
              </Link>
            </li>
          
            <li className="nav-item d-none d-lg-block"> 
              <Link className="nav-link px-3" to="#">
                <i className="fa-solid fa-bars"></i>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;