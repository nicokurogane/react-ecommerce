import React from "react";
import ReactDOM from "react-dom";

import "./modal.css";

const ModalWindow = props => {
  console.table(props);
  const { title, content, actions, showModal } = props;
  return (
    <div style={{ display: showModal ? "block" : "none" }}>
      <div className="background">
        <div className="modal">
          <div className="modal-title">{title}</div>
          <div className="modal-content">{content}</div>
          <div className="modal-actions">{actions}</div>
        </div>
      </div>
    </div>
  );
};

function Modal(props) {
  return ReactDOM.createPortal(
    <ModalWindow {...props} />,
    document.querySelector("#modal")
  );
}

export default Modal;
