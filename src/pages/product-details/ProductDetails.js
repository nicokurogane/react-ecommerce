import React from "react";
import { connect } from "react-redux";

class ConnectedProductDetails extends React.Component {
  render(){
    return(
      <div className="product-details-container">
        PRODUCTO DETALLE ID {this.props.match.params.id}
      </div>
    )
  }
}

export default ConnectedProductDetails;