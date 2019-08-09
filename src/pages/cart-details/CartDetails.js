import React from "react";
import { connect } from "react-redux";
import {
  fetchShoppingCartById,
  setCartTotalAmount,
  deleteAllCartItems,
  deleteItemFormCart
} from "../../actions/";
import LocalStorageHandler from "../../data/local-storage/LocalStorage";
import TotalDisplay from "../../components/total-display/TotalDisplay";
import RemoveButton from "../../components/remove-button/RemoveButton";
import ShippingDetail from "../../components/shipping-detail/ShippingDetail";
import Modal from "../../components/modal/Modal";

import CurrencyFormatter from "../../utilities/CurrencyFormatter";

import "./cart-detail.css";

class ConnectedCartDetail extends React.Component {
  render() {
    return (
      <div className="cart-detail-container">
        <div className="product-list">
          <h2>SHOPPING CART</h2>
          <table className="product-list-table">
            <thead>
              <tr>
                <th colSpan="2">product</th>
                <th>price</th>
                <th>quantity</th>
                <th>subtotal</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {this.props.cart.map(product => {
                const {
                  item_id,
                  name,
                  image,
                  price,
                  quantity,
                  subtotal
                } = product;

                return (
                  <tr key={item_id}>
                    <td>
                      <img
                        className="product-image"
                        src={`https://backendapi.turing.com/images/products/${image}`}
                        alt="buy this product here!"
                      />
                    </td>
                    <td> {name}</td>
                    <td>{CurrencyFormatter.formatNumberToUSCurrency(price)}</td>
                    <td>{quantity}</td>
                    <td>
                      <span>
                        {CurrencyFormatter.formatNumberToUSCurrency(subtotal)}
                      </span>
                    </td>
                    <td>
                      <RemoveButton
                        itemId={item_id}
                        onRemoveItemClick={this.onRemoveItemClick}
                      />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div
            className="cart-actions-container"
            style={{ display: this.props.cart.length > 0 ? "block" : "none" }}
          >
            <button
              className="clear-cart-button"
              onClick={this.onClearCartClick}
            >
              Clear Cart
            </button>
          </div>
        </div>
        <div>
          <TotalDisplay total={this.props.total} />
          <ShippingDetail />
        </div>
        <div>
          {/* content={this.renderContentProp()}   
          header="Delete this?"                
          actions={this.renderActionButtons()}
          onDismiss={this.onDismiss}*/}
          <Modal />
        </div>
      </div>
    );
  }

  onClearCartClick = () => {
    this.props.deleteAllCartItems();
    this.props.setCartTotalAmount();
  };

  onRemoveItemClick = itemId => {
    this.props.deleteItemFormCart(itemId);
    this.props.setCartTotalAmount();
  };

  componentDidMount() {
    if (this.props.cart.length === 0) {
      let shoppingCartId = LocalStorageHandler.getShoppingCartIdFromLocalStorage();
      if (shoppingCartId) {
        this.props.fetchShoppingCartById(shoppingCartId);
      }
    }
    this.props.setCartTotalAmount();
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.list,
    total: state.cart.total
  };
};

const CartDetail = connect(
  mapStateToProps,
  {
    fetchShoppingCartById,
    setCartTotalAmount,
    deleteAllCartItems,
    deleteItemFormCart
  }
)(ConnectedCartDetail);

export default CartDetail;
