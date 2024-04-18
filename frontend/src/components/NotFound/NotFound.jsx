import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css";
import myImage from "../../assets/images/oops.png";

function NotFound() {
  return (
    <div className="not-found">
      <img src={myImage} alt="My Image" />
      <h1>Page Not Found</h1>
      <Link to="/">
        <button>Back to Home Page</button>
      </Link>
    </div>
  );
}

export default NotFound;
