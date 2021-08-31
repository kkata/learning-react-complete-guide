import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isVisibleCart: false },
  reducers: {
    toggle(state) {
      state.isVisibleCart = !state.isVisibleCart;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
