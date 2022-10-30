import { configureStore, createSlice } from "@reduxjs/toolkit";

const localState = localStorage.getItem("count");

const SaveLocal = (state) => {
  localStorage.setItem("count", state);
  return state;
};

const initialState = {
  value: localState ? localState : 1000,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      SaveLocal(state.value);
    },
    decrement: (state) => {
      if (state.value > 0) state.value -= 1;
      SaveLocal(state.value);
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default configureStore({ reducer: counterSlice.reducer });
