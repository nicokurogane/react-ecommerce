import { combineReducers } from "redux";
import { LOAD_PRODUCTS_LIST,LOAD_CATEGORIES_LIST } from "../actions/constants";

const productsReducer = (state = null, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS_LIST:
      return action.payload;
    default:
      return state;
  }
};

const categoriesReducer = (state = null, action) =>{
  switch(action.type) {
    case LOAD_CATEGORIES_LIST:
      return action.payload;
    default:
      return state;  
  }
}


const ecommerceApp = combineReducers({
  products: productsReducer,
  categories: categoriesReducer
});

export default ecommerceApp;
