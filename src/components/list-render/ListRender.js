import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions";

import "./list-render.css";

class ConnectedListRender extends React.Component {
  render() {
    return (
      <div className="list-container">
        {this.props.products === null ? this.renderError() : this.renderList()}
      </div>
    );
  }

  renderList = () => {
    return this.props.products.rows.map(product => {
      return (
        <div className="product-item" key={product.product_id}>
          <img
            src={`https://backendapi.turing.com/images/products/${product.thumbnail}`}
            alt="buy this product here!"
          />
          <div>
          <span>{product.name}</span>
          <p className="description">{product.description}</p>
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
  return { products: state.products };
};

const ListRender = connect(
  mapStateToProps,
  { fetchProducts }
)(ConnectedListRender);

export default ListRender;
