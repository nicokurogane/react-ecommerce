import React from 'react';
//import { connect } from "react-redux";
//import { searchProductsByTerm } from "../../actions";

class ConnectedProductSearcher extends React.Component{

    state = { searchTerm: ''}

    onClickSearch = () =>{
     // this.state.searchTerm;
      

    }

    handleChangeText = (event)=>{
      this.setState({ searchTerm: event.target.value});
    }

    render(){
        return (<>
            <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Search_Noun_project_15028.svg/1046px-Search_Noun_project_15028.svg.png"
            alt="zoom"
            className="search-image"
          />
          <input
            type="text"
            className="search-input"
            placeholder="search your product here"
            value={this.state.searchTerm}
            onChange={e=>this.handleChangeText(e)}
          />
          <button onClick={this.onClickSearch}>Search!</button>
          </>
        );
    }


}

export default ConnectedProductSearcher;