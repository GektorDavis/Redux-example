import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: 0, show: true };

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state, action) {
      state.value += action.payload;
    },
    decrement(state, action) {
      state.value -= action.payload;
    },
    changeView(state) {
      state.show = !state.show;
    },
  },
});

export const { increment, decrement, changeView } = counterSlice.actions;

export default counterSlice.reducer;
