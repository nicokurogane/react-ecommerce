import React from "react";
import "./action-button.css";

const ActionButton = ({ onActionClick, text }) => {
  return (
    <button className="action-button" onClick={onActionClick}>
      {text}
    </button>
  );
};

export default ActionButton;
