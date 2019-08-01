import React from "react";
import { connect } from "react-redux";
import { searchProductsByTerm, fetchProducts } from "../../actions";

import "./product-searcher.css";

class ConnectedProductSearcher extends React.Component {
  state = { searchTerm: "" };

  onClickSearch = () => {
    if (this.state.searchTerm.length === 0) this.props.fetchProducts();
    else this.props.searchProductsByTerm(this.state.searchTerm);
  };

  handleChangeText = event => {
    this.setState({ searchTerm: event.target.value });
  };

  render() {
    return (
      <div className="product-searcher-container">
 
          <input
            type="text"
            className="search-input"
            placeholder="Search your product here"
            value={this.state.searchTerm}
            onChange={e => this.handleChangeText(e)}
          />

        <button onClick={this.onClickSearch} className="search-button">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Search_Noun_project_15028.svg/1046px-Search_Noun_project_15028.svg.png"
            alt="search"
            className="search-image"
          />
        </button>
      </div>
    );
  }
}

const ProductSearcher = connect(
  null,
  { searchProductsByTerm, fetchProducts }
)(ConnectedProductSearcher);

export default ProductSearcher;
