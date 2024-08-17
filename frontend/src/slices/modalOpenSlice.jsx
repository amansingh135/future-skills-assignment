import { configureStore, createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
  name: "modalOpen",
  initialState: {
    value: false,
  },
  reducers: {
    changeToFalse: (state) => {
      state.value = false;
    },
    changeToTrue: (state) => {
      state.value = true;
    },
  },
});

export const { changeToFalse, changeToTrue } = modalSlice.actions;

export default modalSlice.reducer;
