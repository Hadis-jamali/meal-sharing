import React from "react";
import "./Modal.css";
import { Link } from "react-router-dom";
function Modal() {
  return (
    <div>
      <div class="container-modal">
        <div class="Content" id="Popup">
          <Link to="/Meals">
            <button class="close">✖</button>
          </Link>
          <p className="modal-text">Thanks fo your reservation</p>
          <Link to="/">
            <button class="accept">That's fine! back home!</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Modal;
