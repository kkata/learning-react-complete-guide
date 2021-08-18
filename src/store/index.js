import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = {
  value: 0,
  showCounter: true,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      // reduxtoolkitがmutationしないようにしてくれるのでOK
      state.value++;
    },
    decrement(state) {
      state.value--;
    },
    increase(state, action) {
      state.value = state.value + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const initialAuthState = {
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
  // reducer: counterSlice.reducer, 1つのreducerの場合
  // reducer: { counter: counterSlice.reducer }, 複数のreducerがある場合
});

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
