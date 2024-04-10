import React from "react";
import "./Header.css";
function Header() {
  return (
    <div class="container">
      <div className="container-navbar">
        <div className="navbar-div">
          <a href="#section1" className="logo">
            MealSharing
          </a>
          <nav>
            <ul className="nav-list">
              <li className="nav-hover">
                <a href="#section1" className="navbarLink">
                  Home
                </a>
              </li>
              <li className="nav-hover">
                <a className="navbarLink"> Menu </a>
              </li>
              <li className="nav-hover">
                <a className="navbarLink"> Foods </a>
              </li>
              <li className="nav-hover">
                <a className="navbarLink"> Contact </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
          <h1 class="head-title">Order your </h1>
          <h1 class="head-desc">favorite food here</h1>
        </div>
    </div>
  );
}

export default Header;
