import React from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../../actions";

import './categories-list.css';

class ConnectedCategoriesList extends React.Component {
  render() {
    return (
      <div className="categories-list-container">
        {this.props.categories === null
          ? this.renderEmptyState()
          : this.renderList()}
      </div>
    );
  }

  renderList = () => {
    return this.props.categories.rows.map(category => {
      return (
        <div className="category-item" key={category.category_id}>
          <span className="title">{category.name}</span>
          <p className="description">{category.description}</p>
        </div>
      );
    });
  };

  renderEmptyState = () => {
    return "no category";
  };

  componentDidMount() {
    this.props.fetchCategories();
  }
}

const mapStateToProps = state => {
  return { categories: state.categories };
};

const CategoriesList = connect(
  mapStateToProps,
  { fetchCategories }
)(ConnectedCategoriesList);

export default CategoriesList;
