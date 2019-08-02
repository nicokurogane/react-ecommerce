import React from "react";
import { connect } from "react-redux";

import "./message-popup.css";

class ConnectedMessagePopUp extends React.Component {
  render() {
    const { message, showToUser } = this.props;
    return (
      <div
        className="message-popup-container"
        style={{ opacity: showToUser ? 1 : 0 }}
      >
        {message}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    message: state.message.message,
    showToUser: state.message.showToUser
  };
};

const MessagePopUp = connect(
  mapStateToProps,
  null
)(ConnectedMessagePopUp);

export default MessagePopUp;
