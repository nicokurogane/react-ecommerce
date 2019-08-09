import {
  ADD_PRODUCT_TO_CART,
  LOAD_SHOPPING_CART,
  SET_CART_TOTAL_AMOUNT,
  DELETE_ITEM_FROM_CART,
  CLEAR_CART
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
        return acc + price * Number(quantity);
      }, 0);
      return { ...state, total };
    case DELETE_ITEM_FROM_CART:
      let list = state.list.filter(product => {
        if (product.item_id !== action.payload) {
          return product;
        }
      });
      return { ...state, list };
    case CLEAR_CART:
      return { ...state, list: [] };
    default:
      return state;
  }
};

export default cartReducer;
