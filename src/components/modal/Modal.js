import React from "react";
import ReactDOM from "react-dom";

import './modal.css';

const JSX_MODAL = (
  <div className="background">  
    <div className="modal">
      THIS IS SOME TEXT IN THE MODAL 
    </div>
  </div>
);


function Modal(props) {
  return ReactDOM.createPortal(JSX_MODAL, document.querySelector("#modal"));
}


export default Modal;