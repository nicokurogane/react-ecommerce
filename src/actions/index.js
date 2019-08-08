import {
  LOAD_PRODUCTS_LIST,
  LOAD_CATEGORIES_LIST,
  LOAD_CATEGORY,
  SEARCH_PRODUCTS,
  FILTER_PRODUCT_BY_CATEGORY,
  FETCH_PRODUCT_DETAILS,
  FETCH_PRODUCT_REVIEWS,
  SHOW_MESSAGE,
  HIDE_MESSAGE,
  ADD_PRODUCT_TO_CART,
  LOAD_SHOPPING_CART
} from "./constants";

import {
  getAllProducts,
  getAllCategories,
  getCategoryDetails,
  getProductsBySearchTerm,
  getProductsFilteredByCategory,
  getProductDetails,
  getProductReviews,
  sendProductToCart,
  getShoppingCart
} from "../data/request-handler";

export const fetchProducts = () => async dispatch => {
  await getAllProducts()
    .then(response => {
      dispatch({ type: LOAD_PRODUCTS_LIST, payload: response.data.rows });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SHOW_MESSAGE,
        payload: { message: "Couldn't connect to the server. try again later" }
      });
    });
};

export const fetchCategories = () => async dispatch => {
  await getAllCategories()
    .then(response => {
      dispatch({ type: LOAD_CATEGORIES_LIST, payload: response.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SHOW_MESSAGE,
        payload: { message: "Couldn't connect to the server. try again later" }
      });
    });
};

export const fetchCategory = id => async dispatch => {
  await getCategoryDetails(id)
    .then(response => {
      dispatch({ type: LOAD_CATEGORY, payload: response.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SHOW_MESSAGE,
        payload: { message: "Couldn't connect to the server. try again later" }
      });
    });
};

export const searchProductsByTerm = term => async dispatch => {
  const response = await getProductsBySearchTerm(term);
  dispatch({ type: SEARCH_PRODUCTS, payload: response.data.rows });
};

export const fetchFilteredProductsByCategory = categoryId => async dispatch => {
  const response = await getProductsFilteredByCategory(categoryId);
  dispatch({ type: FILTER_PRODUCT_BY_CATEGORY, payload: response.data.rows });
};

export const fetchProductDetail = productId => async dispatch => {
  await getProductDetails(productId)
    .then(response => {
      dispatch({ type: FETCH_PRODUCT_DETAILS, payload: response.data[0] });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SHOW_MESSAGE,
        payload: { message: "Couldn't connect to the server. try again later" }
      });
    });
};

export const fetchProductReviews = productId => async dispatch => {
  await getProductReviews(productId)
    .then(response => {
      dispatch({ type: FETCH_PRODUCT_REVIEWS, payload: response.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SHOW_MESSAGE,
        payload: { message: "Couldn't connect to the server. try again later" }
      });
    });
};

export const showMessageToUser = () => async dispatch => {
  dispatch({ type: SHOW_MESSAGE, payload: { message: "test message" } });
};

export const hideMessageToUser = () => async dispatch => {
  dispatch({ type: HIDE_MESSAGE });
};

export const addProductToCart = (
  cartId,
  productId,
  attributes
) => async dispatch => {
  await sendProductToCart(cartId, productId, attributes)
    .then(response => {
      dispatch({ type: ADD_PRODUCT_TO_CART, payload: response.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SHOW_MESSAGE,
        payload: { message: "Couldn't add product to cart. try again later" }
      });
    });
};

export const fetchShoppingCartById = cartId => async dispatch => {
  await getShoppingCart(cartId)
    .then(response => {
      dispatch({ type: LOAD_SHOPPING_CART, payload: response.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({
        type: SHOW_MESSAGE,
        payload: { message: "Couldn't get your shopping cart. try again later" }
      });
    });
};
