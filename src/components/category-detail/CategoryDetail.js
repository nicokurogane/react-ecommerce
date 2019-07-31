import React from "react";
import { connect } from "react-redux";
import { fetchCategory } from "../../actions";

import "./category-detail.css";

class ConnectedCategoryDetail extends React.Component {
  render() {
    console.log(this.props);
    const {category} = this.props;
    if (!category) {
      return <div>no category to return</div>;
    }

    return (
      <div className="category-detail-container">
        <div>{this.props.category.name}</div>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchCategory(this.props.categoryId);
  }
}

const mapStateToProps = (state, ownProps) => {
  return { category: state.categories.find(category => category.category_id === ownProps.categoryId) };
};

const CategoryDetail = connect(
  mapStateToProps,
  { fetchCategory }
)(ConnectedCategoryDetail);

export default CategoryDetail;
