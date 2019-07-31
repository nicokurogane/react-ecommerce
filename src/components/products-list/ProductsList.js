import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions";

import "./list-render.css";

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
      
          <div className="card"  key={product.product_id}>
            <img
              src={`https://backendapi.turing.com/images/products/${product.thumbnail}`}
              alt="buy this product here!"
            />
            <div className="container">
              <span>{product.name}</span>
              <p className="description">{product.description}</p>
              <Link to={`/product-detail/${product.product_id}`}>Check it out!</Link>
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
  { fetchProducts }
)(ConnectedProductListRender);

export default ProductsList;
