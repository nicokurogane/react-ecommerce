import React from "react";
import { connect } from "react-redux";
import { fetchProductDetail, fetchProductReviews } from "../../actions";

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
              <button className="add-to-cart-button">
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
                      <span>posted on {new Date(review.created_on).toUTCString()}</span>
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
  { fetchProductDetail, fetchProductReviews }
)(ConnectedProductDetails);

export default ProductDetails;
