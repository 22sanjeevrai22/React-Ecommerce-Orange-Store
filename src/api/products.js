import axios from "axios";
import config from "../config/config";

// const baseApiUrl = import.meta.env.VITE_API_URL;
const baseApiUrl2 = "https://node-20240823.vercel.app";

const getProducts = async () => {
  const response = await axios.get(`${config.baseApiUrl}/api/products`);
  return response;
  //   console.log(response);
};

const getProductById = async () => {
  const response = await axios.get(`${config.baseApiUrl}/api/products/${id}`);
  return response;
};

export { getProducts, getProductById };
