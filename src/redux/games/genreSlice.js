import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedGenre: "ALL",
};

const genresSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    setGenre(state, action) {
      state.selectedGenre = action.payload;
    },
  },
});

export const { setGenre } = genresSlice.actions;

export const genresReducer = genresSlice.reducer;
