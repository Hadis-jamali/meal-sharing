import React from "react";
import "./Header.css";
import NavBar from "../NavBar";
function Header() {
  return (
    <div class="container">
      <NavBar />
      <div data-aos="fade-right" data-aos-offset="300" data-aos-easing="ease-in-sine">
        <h1 class="head-title">Order your </h1>
        <h1 class="head-desc">favorite food here</h1>
      </div>
    </div>
  );
}

export default Header;
