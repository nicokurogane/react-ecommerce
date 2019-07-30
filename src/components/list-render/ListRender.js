import React from "react";
import { connect } from "react-redux";
import { fetchProducts } from '../../actions';


class ConnectedListRender extends React.Component{
   render(){
    return(<div className="list-container">
       {console.log(this.props.products)}
    </div>);
  }
  componentDidMount(){
      this.props.fetchProducts();
  }
}

const mapStateToProps = state =>{
   return {products: state.products } 
}

const ListRender = connect(mapStateToProps,{fetchProducts})(ConnectedListRender);

export default ListRender;
