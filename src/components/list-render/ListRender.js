import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from "../../actions";

import "./list-render.css";

class ConnectedListRender extends React.Component {
  render() {
    return <div className="list-container">{
       
      this.props.products === null ? 'no items': this.renderList()
   
   }</div>;
  }

  renderList = () => {
  return  this.props.products.rows.map(product => {
      return (
        <div className="product-item" key={product.product_id}>
          <span>{product.name}</span>
          <p>{product.description}</p>
        </div>
      );
    });
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
