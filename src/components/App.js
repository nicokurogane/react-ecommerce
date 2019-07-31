import React from "react";
import ProductsList from "./products-list/ProductsList";
import CategoriesList from "./categories-list/CategoriesList";
import ConnectedProductSearcher from './product-searcher/ProductSeacher';
import CategoriesDetail from "./category-detail/CategoryDetail";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <span>turing ecommerce</span>
        <div className="filters">
          <span>
            <CategoriesList />
          </span>
        </div>
      </header>
      <div className="container">
        <div className="main-body">
          <div className="search-container">
          <ConnectedProductSearcher/>
          </div>
          <ProductsList />
        </div>
      </div>
    </div>
  );
}

export default App;
