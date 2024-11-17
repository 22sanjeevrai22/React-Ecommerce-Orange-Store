import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCategories, getProducts } from "../../api/products";

const getProductsThunk = createAsyncThunk(
  "products/all",
  async (query, { rejectWithValue }) => {
    try {
      const response = await getProducts(query || {});
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const getCategoriesThunk = createAsyncThunk(
  "products/categories",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCategories();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

export { getProductsThunk, getCategoriesThunk };
