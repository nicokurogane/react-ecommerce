import { LOAD_PRODUCTS_LIST } from "./constants";
import { getAllProducts } from "../data/request-handler";

export const fetchProducts = () => async dispatch => {
  const response = await getAllProducts();

  dispatch({ type: LOAD_PRODUCTS_LIST, payload: response.data });
};
