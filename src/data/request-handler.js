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
  let serverResponse = await axiosInstance.get(`/products/search?query_string=${term}`);
  return serverResponse;
};
