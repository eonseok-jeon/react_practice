import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { toggle: true },
  reducers: {
    toggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
