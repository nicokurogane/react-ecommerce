import {
  LOAD_PRODUCTS_LIST,
  LOAD_CATEGORIES_LIST,
  LOAD_CATEGORY
} from "./constants";
import {
  getAllProducts,
  getAllCategories,
  getCategoryDetails
} from "../data/request-handler";

export const fetchProducts = () => async dispatch => {
  const response = await getAllProducts();
  dispatch({ type: LOAD_PRODUCTS_LIST, payload: response.data.rows });
};

export const fetchCategories = () => async dispatch => {
  const response = await getAllCategories();
  dispatch({ type: LOAD_CATEGORIES_LIST, payload: response.data });
};

export const fetchCategory = id => async dispatch => {
  const response = await getCategoryDetails(id);
  dispatch({ type: LOAD_CATEGORY, payload: response.data });
};
