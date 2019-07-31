import React from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../../actions";

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

  renderDropdownFilter = () => {
    return (
      <div class="dropdown">
        <button class="dropbtn">Categories</button>
        <div class="dropdown-content">
          {this.props.categories.rows.map(category => {
            return (
              <div className="category-item" key={category.category_id}>
                <span className="title">{category.name}</span>
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
  { fetchCategories }
)(ConnectedCategoriesList);

export default CategoriesList;
