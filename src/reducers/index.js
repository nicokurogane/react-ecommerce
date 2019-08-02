import { combineReducers } from "redux";
import productsReducer from "./ProductsReducer";
import categoriesReducer from "./CategoriesReducers";
import messageReducer from "./MessagesReducers";

const ecommerceApp = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  message: messageReducer
});

export default ecommerceApp;
