import { configureStore } from '@reduxjs/toolkit';
import carReducer from "../features/carApp/carSlice"

export const store = configureStore({
  reducer: {
    car:carReducer
  },
});
