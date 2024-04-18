import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer">
      <div className="SocialIcons">
        <a href="" target="_blank" rel="noopener noreferrer">
          <FaFacebook />
        </a>
        <a href="" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
      <div className="information">
        <p>
          <span>Address</span> : Eya Jensens gade 54, 8240 Risskov
        </p>
        <p>
          <span>Tel</span> : 50 70 90 75
        </p>
      </div>
    </div>
  );
}

export default Footer;
