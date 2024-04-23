import React from "react";
import "./Modal.css";
import { Link } from "react-router-dom";
function Modal() {
  return (
    <div>
      <div className="container-modal">
        <div className="Content" id="Popup">
          <Link to="/Meals">
            <button className="close">✖</button>
          </Link>
          <p className="modal-text">Thanks fo your reservation.</p>
          <Link to="/">
            <button className="accept">back home</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;
