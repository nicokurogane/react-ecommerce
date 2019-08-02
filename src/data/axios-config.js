import axios from "axios";

const BASE_URL = "https://backendapi.turing.com/";

const axiosInstance = axios.create({
  baseURL: BASE_URL
});

export default axiosInstance;
