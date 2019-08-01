import {
  LOAD_PRODUCTS_LIST,
  SEARCH_PRODUCTS,
  FILTER_PRODUCT_BY_CATEGORY,
  FETCH_PRODUCT_DETAILS
} from "../actions/constants";

const initialState = {
  list: [],
  selectedProduct: null
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_PRODUCTS_LIST:
      return { ...state, list: action.payload };
    case SEARCH_PRODUCTS:
      return { ...state, list: action.payload };
    case FILTER_PRODUCT_BY_CATEGORY:
      return { ...state, list: action.payload };
    case FETCH_PRODUCT_DETAILS: 
      return { ...state, selectedProduct: action.payload }
    default:
      return state;
  }
};

export default productsReducer;
