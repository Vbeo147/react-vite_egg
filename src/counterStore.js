import { configureStore, createSlice } from "@reduxjs/toolkit";

const localState = localStorage.getItem("count");
const initialValue = 1000;

const SaveLocal = (state) => {
  localStorage.setItem("count", state);
  return state;
};

const initialState = {
  value: localState ? parseInt(localState) : initialValue,
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
    resetvalue: (state) => {
      state.value = initialValue;
      SaveLocal(state.value);
    },
  },
});

export const { increment, decrement, resetvalue } = counterSlice.actions;

export default configureStore({ reducer: counterSlice.reducer });
