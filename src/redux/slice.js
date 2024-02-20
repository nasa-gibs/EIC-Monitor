import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'main',
  initialState: {
    selectedContent: 'layers'
  },
  reducers: {
    selectContent: (state, action) => {
      state.selectedContent = action.payload;
    }
  },
});

export const { selectContent } = counterSlice.actions;

export default counterSlice.reducer;
