import { LOAD_PRODUCTS_LIST, LOAD_CATEGORIES_LIST } from "./constants";
import { getAllProducts, getAllCategories } from "../data/request-handler";

export const fetchProducts = () => async dispatch => {
  const response = await getAllProducts();
  dispatch({ type: LOAD_PRODUCTS_LIST, payload: response.data });
};

export const fetchCategories = () => async dispatch => {
  const response = await getAllCategories();
  dispatch({ type: LOAD_CATEGORIES_LIST, payload: response.data });
};
