import { createSlice } from "@reduxjs/toolkit";
import { getProductsThunk } from "./productActions";

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    error: null,
    products: [],
    query: {
      limit: 10,
    },
  },
  reducers: {
    setLimit: (state, action) => {
      state.query.limit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProductsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(getProductsThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setLimit } = productSlice.actions;
export default productSlice.reducer;
