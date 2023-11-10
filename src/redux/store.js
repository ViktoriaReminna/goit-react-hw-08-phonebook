import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './contactSlice';
import filterReducer from './filterSlice.js';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
});
