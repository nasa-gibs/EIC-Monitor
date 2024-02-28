import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'main',
  initialState: {
    selectedContent: 'eic',
    selectedScenario: 1,
  },
  reducers: {
    selectContent: (state, action) => {
      state.selectedContent = action.payload;
    },
    selectScenario: (state, action) => {
      state.selectedScenario = action.payload;
    }
  },
});

export const { selectContent, selectScenario } = counterSlice.actions;

export default counterSlice.reducer;
