import { combineReducers } from "redux";
import productsReducer from './ProductsReducer';
import categoriesReducer from './CategoriesReducers';

const ecommerceApp = combineReducers({
  products: productsReducer,
  categories: categoriesReducer
});

export default ecommerceApp;
