import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProducts, showMessageToUser } from "../../actions";

import "./product-list.css";

class ConnectedProductListRender extends React.Component {
  render() {
    return (
      <div className="list-container">
        {this.props.products.length === 0
          ? this.renderError()
          : this.renderList()}
      </div>
    );
  }

  renderList = () => {
    return this.props.products.map(product => {
      return (
        <div className="card" key={product.product_id}>
          <div className="product-photo-container">
            <img
              src={`https://backendapi.turing.com/images/products/${
                product.thumbnail
              }`}
              alt="buy this product here!"
            />
          </div>
          <div className="container">
            <div className="container-header">
              <span>{product.name}</span>
              <span>{`$${
                product.discounted_price === "0.00"
                  ? product.price
                  : product.discounted_price
              }`}</span>
            </div>
            <p className="description">{product.description}</p>
            <Link to={`/product-detail/${product.product_id}`} className="link">
              Check it out!
            </Link>
          </div>
        </div>
      );
    });
  };

  renderError = () => {
    return "no items";
  };

  componentDidMount() {
    this.props.fetchProducts();
  }
}

const mapStateToProps = state => {
  return { products: state.products.list };
};

const ProductsList = connect(
  mapStateToProps,
  { fetchProducts, showMessageToUser }
)(ConnectedProductListRender);

export default ProductsList;
