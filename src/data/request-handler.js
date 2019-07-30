import axiosInstance from './axios-config';

export const  getAllProducts = async() =>{
   let serverResponse = await axiosInstance.get("/products");
   return serverResponse;
}  

export const getAllCategories = async() =>{
   let serverResponse = await axiosInstance.get("/categories");
   return serverResponse;
}