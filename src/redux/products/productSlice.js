import { createSlice } from "@reduxjs/toolkit";
import { getProductsThunk } from "./productActions";

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: [],
    error: null,
    query: {},
  },
  reducers: {
    setLimit: (state, action) => {
      state.query.limit = action.payload;
    },

    setSort: (state, action) => {
      state.query.sort = action.payload;
    },

    setFilters: (state, action) => {
      state.query.filters = action.payload;
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

export const { setLimit, setSort, setFilters } = productSlice.actions;
export default productSlice.reducer;
