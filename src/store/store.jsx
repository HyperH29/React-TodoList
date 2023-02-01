import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todo";

const store = configureStore({
  reducer: {
    // Add reducers here
    todo: todoReducer,
  },
});

export default store;
