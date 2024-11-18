import { createSlice } from "@reduxjs/toolkit";
import { getCategoriesThunk, getProductsThunk } from "./productActions";

const initialQueryState = {
  filters: {
    name: "",
    category: "",
  },
  sort: JSON.stringify({ createdAt: -1 }),
  limit: 10,
};

const productSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    products: [],
    categories: [],
    error: null,
    query: initialQueryState,
  },
  reducers: {
    setLimit: (state, action) => {
      state.query.limit = action.payload;
    },

    setSort: (state, action) => {
      state.query.sort = action.payload;
    },

    setFilters: (state, action) => {
      state.query.filters = { ...state.query.filters, ...action.payload };
    },

    resetQuery: (state, action) => {
      state.query = initialQueryState;
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
      })
      //Handling Categories
      .addCase(getCategoriesThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategoriesThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getCategoriesThunk.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { setLimit, setSort, setFilters, resetQuery } =
  productSlice.actions;
export default productSlice.reducer;
