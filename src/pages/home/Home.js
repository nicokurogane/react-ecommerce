import React from "react";
import ProductsList from  '../../components/products-list/ProductsList'  
import CategoriesList from "../../components/categories-list/CategoriesList";
import ProductSearcher from "../../components/product-searcher/ProductSeacher";
import "./home.css";

const Home = () => {
  return (
    <div>
      <div className="main-body">
        <div className="search-container">
          <ProductSearcher />
          <CategoriesList />
        </div>
        <ProductsList />
      </div>
    </div>
  );
};

export default Home;
