import React from "react";
import ProductsList from "./list-render/ProductsList";
import CategoriesList from './categories-list/CategoriesList';
import CategoriesDetail from './category-detail/CategoryDetail';
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="app-header">turing ecommerce</header>
      <div className="container">
        <div className="side-panel">
          <ul>
            <li>item 1</li>
            <li>item 2</li>
            <li>item 3</li>
            <li>item 4</li>
          </ul>
        </div>
        <div className="main-body">
          <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="search your product here"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Search_Noun_project_15028.svg/1046px-Search_Noun_project_15028.svg.png"
              alt="zoom"
              className="search-image"
            />
          </div>
        <ProductsList />
        </div>
      </div>
    </div>
  );
}

export default App;
