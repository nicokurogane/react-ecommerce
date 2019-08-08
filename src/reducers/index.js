import { combineReducers } from "redux";
import productsReducer from "./ProductsReducer";
import categoriesReducer from "./CategoriesReducers";
import messageReducer from "./MessagesReducers";
import cartReducer from "./CartReducer";

const ecommerceApp = combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  message: messageReducer,
  cart: cartReducer,
});

export default ecommerceApp;
