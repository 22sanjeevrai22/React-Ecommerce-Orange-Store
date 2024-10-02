import { createAsyncThunk } from "@reduxjs/toolkit";
import { login } from "../../api/auth";

const loginUser = createAsyncThunk(
  "auth/login",
  async (data, { rejectWithValue }) => {
    try {
      const response = await login(data);

      localStorage.setItem("authToken", response.data?.token);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export { loginUser };
