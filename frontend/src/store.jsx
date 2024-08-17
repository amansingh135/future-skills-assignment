// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./slices/modalOpenSlice"; // You'll create this slice next

export const store = configureStore({
  reducer: {
    modal: modalReducer,
  },
});

export default store;
