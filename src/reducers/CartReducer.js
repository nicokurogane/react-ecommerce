import {
  ADD_PRODUCT_TO_CART,
  LOAD_SHOPPING_CART,
  SET_CART_TOTAL_AMOUNT
} from "../actions/constants";

const initialState = {
  list: [],
  total: 0
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT_TO_CART:
      return { ...state, list: action.payload };
    case LOAD_SHOPPING_CART:
      return { ...state, list: action.payload };
    case SET_CART_TOTAL_AMOUNT:

      let total = state.list.reduce((acc, product) => {
        const { price, quantity } = product;
        return acc + price * quantity;
      }, 0);

      return { ...state, total };
    default:
      return state;
  }
};

export default cartReducer;
