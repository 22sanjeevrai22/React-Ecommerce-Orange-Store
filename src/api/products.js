import axios from "axios";
import config from "../config/config";

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
