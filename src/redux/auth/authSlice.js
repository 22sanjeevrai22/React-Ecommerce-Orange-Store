import { createSlice } from "@reduxjs/toolkit";
import { loginUser } from "./authAction";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    user: null,
    error: null,
  },
  reducers: {
    //Not required because the below thunk action does the work
    // setUser(state, action) {
    //   state.user = action.payload;
    // },
    logOutUser(state) {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logOutUser } = authSlice.actions;
export default authSlice.reducer;
