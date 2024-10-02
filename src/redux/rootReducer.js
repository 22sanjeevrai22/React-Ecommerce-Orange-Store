import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import productsReducer from "./products/productSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  products: productsReducer,
});

export default rootReducer;
