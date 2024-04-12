import React from "react";

function NavBar() {
  return (
    <div className="container-navbar">
      <div className="navbar-div">
        <a className="logo">
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
  );
}

export default NavBar;
