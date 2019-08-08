import React from "react";
import { connect } from "react-redux";
import {
  fetchProductDetail,
  fetchProductReviews,
  addProductToCart
} from "../../actions";

import LocalStorageHandler from "../../data/local-storage/LocalStorage";
import { getShoppingCartId } from "../../data/request-handler";

import "./product-details.css";
import cart from "../../assets/cart.png";

class ConnectedProductDetails extends React.Component {
  render() {
    if (this.props.selectedProduct === null) {
      return <div className="product-details-container">LOADING...</div>;
    }

    const {
      name,
      price,
      discounted_price,
      description,
      image
    } = this.props.selectedProduct;

    return (
      <>
        <div className="product-details-container">
          <div className="left-panel">
            <img
              src={`https://backendapi.turing.com/images/products/${image}`}
              alt="buy this product here!"
            />
          </div>
          <div className="right-panel">
            <span className="product-name">{name}</span>
            <div>
              {discounted_price === "0.00" ? (
                <span className="final-price">{`$${price}`}</span>
              ) : (
                <>
                  <span className="normal-price">{`$${price}`}</span>
                  <span className="final-price">{`$${discounted_price}`}</span>
                </>
              )}
              <button
                className="add-to-cart-button"
                onClick={this.addProductToCart}
              >
                <img src={cart} alt="cart" />
              </button>
            </div>
            <p className="product-description">{description}</p>
          </div>
        </div>
        <div className="product-reviews-container">
          <div className="review-title">Reviews</div>
          {this.props.productReviews.length === 0
            ? "No one has reviewed this product yet"
            : this.props.productReviews.map(review => {
                return (
                  <div className="review-container">
                    <div className="review-header">
                      <span>{review.name}</span>
                      <span>
                        posted on {new Date(review.created_on).toDateString()}
                      </span>
                    </div>
                    <div className="review-body">{review.review}</div>
                    <hr />
                  </div>
                );
              })}
        </div>
      </>
    );
  }

  addProductToCart = () => {
    if (LocalStorageHandler.getShoppingCartIdFromLocalStorage() === "") {
      this.fetchShoppingCartId();
    }

    let shoppingCartId = LocalStorageHandler.getShoppingCartIdFromLocalStorage();

    this.props.addProductToCart(shoppingCartId, this.props.match.params.id, "");
  };

  fetchShoppingCartId() {
    getShoppingCartId()
      .then(response => {
        LocalStorageHandler.saveShoppingCartIdToLocalStorage(
          response.data.cart_id
        );
      })
      .catch(err => {
        console.log(err);
      });
  }

  componentDidMount() {
    this.props.fetchProductDetail(this.props.match.params.id);
    this.props.fetchProductReviews(this.props.match.params.id);
  }
}

const mapStateToProps = state => {
  return {
    selectedProduct: state.products.selectedProduct,
    productReviews: state.products.reviews
  };
};

const ProductDetails = connect(
  mapStateToProps,
  { fetchProductDetail, fetchProductReviews, addProductToCart }
)(ConnectedProductDetails);

export default ProductDetails;
