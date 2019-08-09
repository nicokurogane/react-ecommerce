import React from "react";

import closeCircle from "../../assets/close-circle.png";
import "./remove-button.css";

class RemoveButton extends React.Component {
  handleClick = () => {
    this.props.onRemoveItemClick(this.props.itemId);
  };

  render() {
    return (
      <button
        className="remove-item-button"
        onClick={this.handleClick}
      >
        <img src={closeCircle} alt="remove product" />
      </button>
    );
  }
}

export default RemoveButton;
