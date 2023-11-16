import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: { email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    refreshUserPending(state) {
      state.isRefreshing = true;
    },
    refreshUserFulfilled(state, action) {
      state.isRefreshing = false;
      state.isLoggedIn = true;
      state.user.email = action.payload;
    },
    refreshUserRejected(state) {
      state.isRefreshing = false;
      state.isLoggedIn = false;
      state.token = null;
      state.user.email = null;
    },
    signUpPending(state) {
      state.isRefreshing = true;
    },
    signUpFulfilled(state, action) {
      state.isRefreshing = false;
      state.isLoggedIn = true;
      state.user.email = action.payload.email;
      state.token = action.payload.token;
    },
    signUpRejected(state) {
      state.isRefreshing = false;
      state.isLoggedIn = false;
      state.user.email = null;
    },
    signInPending(state) {
      state.isRefreshing = true;
    },
    signInFulfilled(state, action) {
      state.isRefreshing = false;
      state.isLoggedIn = true;
      state.user.email = action.payload.email;
      state.token = action.payload.token;
    },
    signInRejected(state) {
      state.isRefreshing = false;
      state.isLoggedIn = false;
      state.user.email = null;
    },
  },
});

export const {
  refreshUserPending,
  refreshUserFulfilled,
  refreshUserRejected,
  signUpPending,
  signUpFulfilled,
  signUpRejected,
  signInPending,
  signInFulfilled,
  signInRejected,
} = authSlice.actions;

export const authReducer = authSlice.reducer;
