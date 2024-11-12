import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../api/products";

const getProductsThunk = createAsyncThunk(
  "products/all",
  async (query, { rejectWithValue }) => {
    try {
      console.log("query in productActions", query);
      const response = await getProducts(query || {});
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export { getProductsThunk };
