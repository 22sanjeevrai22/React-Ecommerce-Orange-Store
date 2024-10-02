import { createAsyncThunk } from "@reduxjs/toolkit";
import { getProducts } from "../../api/products";

const getProductsThunk = createAsyncThunk(
  "products/all",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getProducts();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export { getProductsThunk };
