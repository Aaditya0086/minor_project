import { createSlice } from "@reduxjs/toolkit";

const initialState = {  
  userData: null,
  error: null,
  isLoading: false,
  token: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action) => {
      state.isLoading = false;
      state.userData = action.payload.user;
      state.token = action.payload.token;
    },
    loginFailure: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      state.userData = null;
      state.isLoading = false;
      state.error = false;
    },
    fetchStart: (state, action) => {
      state.isLoading = true;
    },
    
  },
});

export const {
  userLogin,
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  fetchStart,
  fetchFailure,
} = userSlice.actions;

export default userSlice.reducer;