import { ADD_PRODUCT_TO_CART } from "../actions/constants";

const initialState = {
  list: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default cartReducer;
