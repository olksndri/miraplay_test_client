import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  gamesArr: [],
  isLoading: false,
  isError: null,
};

const gamesSlice = createSlice({
  name: "games",
  initialState,
  reducers: {
    getGamesPending(state) {
      state.isLoading = true;
    },
    getGamesFulfilled(state, action) {
      state.isLoading = false;
      state.gamesArr = action.payload.toClear
        ? []
        : [...state.gamesArr, ...action.payload.games];
    },
    getGamesRejected(state, action) {
      state.isLoading = false;
      state.isError = action.payload;
    },
  },
});

export const { getGamesPending, getGamesFulfilled, getGamesRejected } =
  gamesSlice.actions;

export const gamesReducer = gamesSlice.reducer;
