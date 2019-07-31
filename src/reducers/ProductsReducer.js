import {
  LOAD_PRODUCTS_LIST,
  SEARCH_PRODUCTS,
  FILTER_PRODUCT_BY_CATEGORY
} from "../actions/constants";

const initialState = {
  list: []
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS_LIST:
      return { ...state, list: action.payload };
    case SEARCH_PRODUCTS:
      return { ...state, list: action.payload };
    case FILTER_PRODUCT_BY_CATEGORY:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default productsReducer;
