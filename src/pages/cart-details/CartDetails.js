import React from "react";
import { connect } from "react-redux";
import { fetchShoppingCartById, setCartTotalAmount } from "../../actions/";
import LocalStorageHandler from "../../data/local-storage/LocalStorage";
import TotalDisplay from "../../components/total-display/TotalDisplay";

import "./cart-detail.css";

class ConnectedCartDetail extends React.Component {

  render() {
    return (
      <div className="cart-detail-container">
        <div className="product-list">
          <h2>SHOPPING CART</h2>
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
        <div>
        <TotalDisplay total={this.props.total}/>
        </div>
      </div>
    );
  }

  componentDidMount() {
    console.log(this.props.cart);
    if (this.props.cart.length === 0) {
      let shoppingCartId = LocalStorageHandler.getShoppingCartIdFromLocalStorage();
      if (!shoppingCartId) {
        this.props.fetchShoppingCartById(shoppingCartId);
      }
    }
    this.props.setCartTotalAmount();
    console.log(this.props.total);
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
  { fetchShoppingCartById, setCartTotalAmount }
)(ConnectedCartDetail);

export default CartDetail;
