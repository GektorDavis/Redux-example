import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Counter/reducer';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
