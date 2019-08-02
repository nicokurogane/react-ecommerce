import React from "react";
import { connect } from "react-redux";
import { fetchProductDetail, fetchProductReviews } from "../../actions";

import "./product-details.css";

class ConnectedProductDetails extends React.Component {
  render() {
    if (this.props.selectedProduct === null) {
      return <div className="product-details-container">LOADING</div>;
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
            <span>{`price: ${price}   discount:${discounted_price}`}</span>
            <p className="product-description">{description}</p>
          </div>
        </div>
        <div className="product-reviews-container">
          {this.props.productReviews.length === 0
            ? "no reviews"
            : this.props.productReviews.map(review => {
                return (
                  <div className="review-container">
                    <div className="review-header">
                      <span>{review.name}</span>
                      <span>{new Date(review.created_on).toUTCString()}</span>
                    </div>
                    <div className="review-body">{review.review}</div>
                    <hr></hr>
                    {/*PUT THE COMPONENT RATING HERE*/}
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
