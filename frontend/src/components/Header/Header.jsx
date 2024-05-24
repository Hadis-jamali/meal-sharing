import React from "react";
import "./Header.css";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";
import Slider from "./Slider";
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
      <div className="slider-title">
        <p>
          When we prepare food for our customers, we emphasize quality, service and cleanliness.
        </p>
        <p>Large selection of delicious experiences for the palate.</p>
      </div>
      <Slider />
    </>
  );
}

export default Header;
