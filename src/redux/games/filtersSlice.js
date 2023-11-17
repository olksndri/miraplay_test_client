import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedGenre: "ALL",
};

const fltersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setGenre(state, action) {
      state.selectedGenre = action.payload;
    },
  },
});

export const { setGenre } = fltersSlice.actions;

export const filtersReducer = fltersSlice.reducer;
