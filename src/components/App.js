import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchShoppingCartById } from "../actions";
import MessagePopUp from "./message-popup/MessagePopUp";
import LocalStorageHandler from "../data/local-storage/LocalStorage";

import cartImg from "../assets/cart.png";

import "./App.css";

class ConnectedApp extends React.Component {
  render() {
    return (
      <header className="App">
        <header className="app-header">
          <span>Turing Ecommerce</span>
          <div className="links-container">
            <Link to="/" className="link-header">
              Home
            </Link>
            <Link to="/about" className="link-header">
              About
            </Link>
            <Link to="/cart/details" className="link-header">
              <img src={cartImg} alt="cart" />
              <span
                className="cart-counter"
                style={{
                  display: this.props.cartCounter > 0 ? "block" : "none"
                }}
              >
                {this.props.cartCounter}
              </span>
            </Link>
          </div>
        </header>
        <div className="container">{this.props.children}</div>
        <MessagePopUp />
      </header>
    );
  }

  componentDidMount() {
    if (this.props.cart === undefined) {
      let shoppingCartId = LocalStorageHandler.getShoppingCartIdFromLocalStorage();
      if (shoppingCartId) {
        this.props.fetchShoppingCartById(shoppingCartId);
      }
    }
  }
}

const mapStateToProps = state => {
  return {
    cartCounter: state.cart.list.length
  };
};

const App = connect(
  mapStateToProps,
  { fetchShoppingCartById }
)(ConnectedApp);

export default App;
