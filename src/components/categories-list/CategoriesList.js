import React from "react";
import { connect } from "react-redux";
import {
  fetchCategories,
  fetchFilteredProductsByCategory
} from "../../actions";

import "./categories-list.css";

class ConnectedCategoriesList extends React.Component {
  render() {
    return (
      <div className="categories-list-container">
        {this.props.categories.length === 0
          ? this.renderEmptyState()
          : this.renderDropdownFilter()}
      </div>
    );
  }

  handleClickCategory = id => {
    this.props.fetchFilteredProductsByCategory(id);
  };

  renderDropdownFilter = () => {
    return (
      <div className="dropdown">
        <button className="dropbtn">Categories</button>
        <div className="dropdown-content">
          {this.props.categories.rows.map(category => {
            return (
              <div className="category-item" key={category.category_id}>
                <button
                  className="link"
                  onClick={() => this.handleClickCategory(category.category_id)}
                >
                  {category.name}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  renderEmptyState = () => {
    return <span className="category-empty-state">Loading categories...</span>;
  };

  componentDidMount() {
    this.props.fetchCategories();
  }
}

const mapStateToProps = state => {
  return { categories: state.categories.list };
};

const CategoriesList = connect(
  mapStateToProps,
  { fetchCategories, fetchFilteredProductsByCategory }
)(ConnectedCategoriesList);

export default CategoriesList;
