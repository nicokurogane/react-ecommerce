import { combineReducers } from "redux";
import { LOAD_PRODUCTS_LIST } from "../actions/constants";

const productsReducer = (state = [], action) => {
  switch (action.type) {
    case LOAD_PRODUCTS_LIST:
      return action.payload;
    default:
      return state;
  }
};

const ecommerceApp = combineReducers({
  products: productsReducer
});

export default ecommerceApp;
