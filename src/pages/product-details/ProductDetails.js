import React from "react";
import { connect } from "react-redux";
import { fetchProductDetail } from "../../actions";

import "./product-details.css";

class ConnectedProductDetails extends React.Component {
  render() {
    console.log(this.props.selectedProduct);
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
    );
  }

  componentDidMount() {
    this.props.fetchProductDetail(this.props.match.params.id);
  }
}

const mapStateToProps = state => {
  return { selectedProduct: state.products.selectedProduct };
};

const ProductDetails = connect(
  mapStateToProps,
  { fetchProductDetail }
)(ConnectedProductDetails);

export default ProductDetails;
