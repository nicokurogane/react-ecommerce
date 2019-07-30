import axiosInstance from './axios-config';

export const  getAllProducts = async() =>{
   let serverResponse = await axiosInstance.get("/products");
   return serverResponse;
}  