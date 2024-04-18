import React from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="container-navbar">
      <div className="navbar-div">
        <a className="logo">MealSharing</a>
        <nav>
          <ul className="nav-list">
            <li className="nav-hover">
              <NavLink to="/" className="navbarLink">
                Home
              </NavLink>
            </li>
            <li className="nav-hover">
              <NavLink to="/Menu" className="navbarLink">
                Menu
              </NavLink>
            </li>
            <li className="nav-hover">
              <NavLink to="/Meals" className="navbarLink">
                Meals
              </NavLink>
            </li>
            <li className="nav-hover">
              <NavLink to="/Contact" className="navbarLink">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
