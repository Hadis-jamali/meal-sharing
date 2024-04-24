import React from "react";
import { Link } from "react-router-dom";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="about">
      <div className="main-about">
        <div className="animation"/>
        <div className="about-text">
          <h1>About Us</h1>
          <p>
            Italian culinary tradition and Danish coziness meet here, where our chef has created a
            menu driven by passion. With a background rich in experience and a deep love for the
            Italian cuisine, our chef offers a true taste of Italy. Our menu is a journey through
            Italy's gastronomic landscape, where fresh Danish ingredients meet classic Italian
            recipes.let our chef take you on a culinary adventure and you can share your favorite
            food here! Welcome everyone!
          </p>

          <div className="social-media">
            <div>
              <Link to="https://www.linkedin.com/in/hadisjamali/">
                <button type="button">Let's Talk</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
