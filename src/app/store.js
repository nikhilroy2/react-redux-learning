import { configureStore } from '@reduxjs/toolkit';
import {counterSlice} from '../state/counter/counterSlice';
import { todoSlice } from '../state/todo/todo';
import { PersonalInfoSlice } from '../state/personalInfo/personalInfoSlice';
export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    todo: todoSlice.reducer,
    personalInfo: PersonalInfoSlice.reducer
  },
});
