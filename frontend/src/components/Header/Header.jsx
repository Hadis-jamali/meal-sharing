import React from "react";
import "./Header.css";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
function Header() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="div-container">
          <h1 className="head-title">Order your </h1>
          <h1 className="head-desc">favorite food here</h1>
          <Link to="/Meals">
          <button className="button-header">See Foods</button>
          </Link>
          
        </div>
      </div>
    </>
  );
}

export default Header;
