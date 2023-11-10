import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    changeFilterAction: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeFilterAction } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
