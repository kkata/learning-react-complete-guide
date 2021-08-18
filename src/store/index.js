import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter";
import authReducer from "./auth";

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
  // reducer: counterSlice.reducer, 1つのreducerの場合
  // reducer: { counter: counterSlice.reducer }, 複数のreducerがある場合
});

export default store;
