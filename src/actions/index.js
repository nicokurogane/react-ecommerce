import {
  LOAD_PRODUCTS_LIST,
  LOAD_CATEGORIES_LIST,
  LOAD_CATEGORY,
  SEARCH_PRODUCTS,
  FILTER_PRODUCT_BY_CATEGORY,
  FETCH_PRODUCT_DETAILS,
  FETCH_PRODUCT_REVIEWS
} from "./constants";

import {
  getAllProducts,
  getAllCategories,
  getCategoryDetails,
  getProductsBySearchTerm,
  getProductsFilteredByCategory,
  getProductDetails,
  getProductReviews
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

export const fetchProductDetail = productId => async dispatch =>{
  const response = await getProductDetails(productId);
  dispatch({ type: FETCH_PRODUCT_DETAILS , payload: response.data[0]})
}

export const fetchProductReviews = productId => async dispatch => {
  const response = await getProductReviews(productId);
  dispatch({ type: FETCH_PRODUCT_REVIEWS, payload: response.data})
}