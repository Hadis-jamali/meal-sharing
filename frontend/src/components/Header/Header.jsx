import React from "react";
import "./Header.css";
function Header() {
  return (
    <div>
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
                <a className="navbarLink"> About </a>
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
    </div>
  );
}

export default Header;
