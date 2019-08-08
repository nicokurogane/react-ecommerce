import React from "react";
import { Link } from "react-router-dom";
import MessagePopUp from "./message-popup/MessagePopUp";

import "./App.css";

function App(props) {
  return (
    <header className="App">
      <header className="app-header">
        <span>Turing Ecommerce</span>
        <div className="links-container">
          <Link to="/" className="link-header">
            Home
          </Link>
          <Link to="/" className="link-header">
            Login
          </Link>
          <Link to="/cart/details" className="link-header">
            My Cart
          </Link>
        </div>
      </header>
      <div className="container">{props.children}</div>
      <MessagePopUp />
    </header>
  );
}

export default App;
