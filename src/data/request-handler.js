import axiosInstance from "./axios-config";

export const getAllProducts = async () => {
  let serverResponse = await axiosInstance.get("/products");
  return serverResponse;
};

export const getAllCategories = async () => {
  let serverResponse = await axiosInstance.get("/categories");
  return serverResponse;
};

export const getCategoryDetails = async id => {
  let serverResponse = await axiosInstance.get(`/categories/${id}`);
  return serverResponse;
};

export const getProductsBySearchTerm = async term => {
  let serverResponse = await axiosInstance.get(
    `/products/search?query_string=${term}`
  );
  return serverResponse;
};

export const getProductsFilteredByCategory = async categoryId => {
  let serverResponse = await axiosInstance.get(
    `/products/inCategory/${categoryId}`
  );
  return serverResponse;
};

export const getProductDetails = async productId => {
  let serverResponse = await axiosInstance.get(
    `/products/${productId}/details`
  );
  return serverResponse;
};

export const getProductReviews = async productId => {
  let serverResponse = await axiosInstance.get(
    `/products/${productId}/reviews`
  );
  return serverResponse;
};

export const getShoppingCartId = async () => {
  let serverResponse = await axiosInstance.get(
    "/shoppingcart/generateUniqueId"
  );
  return serverResponse;
};

export const getShoppingCart = async cartId => {
  let serverResponse = await axiosInstance.get(`/shoppingcart/${cartId}`);
  return serverResponse;
};

export const sendProductToCart = async (cartId, productId, attributes) => {
  let serverResponse = await axiosInstance.post("shoppingcart/add", {
    cart_id: cartId,
    product_id: productId,
    attributes
  });
  return serverResponse;
};

export const deleteAllItemsFromCart = async cartId => {
  let serverResponse = await axiosInstance.delete(
    `/shoppingcart/empty/${cartId}`
  );
  return serverResponse;
};

export const getShippingRegions = async () => {
  let serverResponse = await axiosInstance.get("/shipping/regions");
  return serverResponse;
};

export const getShippingCostAndDaysByRegionId = async shippingRegionId => {
  let serverResponse = await axiosInstance.get(
    `/shipping/regions/${shippingRegionId}`
  );
  return serverResponse;
};
