import React from "react";
import { connect } from "react-redux";
import { fetchShoppingCartById } from "../../actions/";
import LocalStorageHandler from "../../data/local-storage/LocalStorage";

import "./cart-detail.css";

class ConnectedCartDetail extends React.Component {
  render() {
    return (
      <div className="cart-detail-container">
        <h2>SHOPPING CART</h2>
        <div className="product-list">
          <table>
            <thead>
              <tr>
                <th />
                <th>name</th>
                <th>price</th>
                <th>quantity</th>
                <th>subtotal</th>
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
                    <th>
                      <img
                        src={`https://backendapi.turing.com/images/products/${image}`}
                        alt="buy this product here!"
                      />
                    </th>
                    <th> {name}</th>
                    <th>{price}</th>
                    <th>{quantity}</th>
                    <th>{subtotal}</th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // console.log(this.props.cart);
    if (!LocalStorageHandler.getShoppingCartIdFromLocalStorage()) {
      this.props.fetchShoppingCartById(
        LocalStorageHandler.getShoppingCartIdFromLocalStorage()
      );
    }
    console.log(this.props.cart);
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.list
  };
};

const CartDetail = connect(
  mapStateToProps,
  { fetchShoppingCartById }
)(ConnectedCartDetail);

export default CartDetail;
