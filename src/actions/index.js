import {
  LOAD_PRODUCTS_LIST,
  LOAD_CATEGORIES_LIST,
  LOAD_CATEGORY,
  SEARCH_PRODUCTS,
  FILTER_PRODUCT_BY_CATEGORY
} from "./constants";

import {
  getAllProducts,
  getAllCategories,
  getCategoryDetails,
  getProductsBySearchTerm,
  getProductsFilteredByCategory
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

export const searchProductsByTerm = term => async dispatch => {
  const response = await getProductsBySearchTerm(term);
  dispatch({ type: SEARCH_PRODUCTS, payload: response.data.rows });
};

export const fetchFilteredProductsByCategory = categoryId => async dispatch => {
  const response = await getProductsFilteredByCategory(categoryId);
  dispatch({ type: FILTER_PRODUCT_BY_CATEGORY, payload: response.data.rows });
};
