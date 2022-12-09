import { configureStore } from '@reduxjs/toolkit';

import {counterSlice} from '../state/counter/counterSlice';
import { todoSlice } from '../state/todo/todo';
import { personalInfoSlice } from '../state/personalInfo/personalInfoSlice';
import { countrySlice } from '../state/country/countrySlice';
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todo: todoSlice.reducer,
    personalInfo: personalInfoSlice.reducer,
    countryInfo: countrySlice.reducer
  }
});
