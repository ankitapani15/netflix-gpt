import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
  name: "gptSearch",
  initialState: {
    toggleGptSearchView: false,
  },
  reducers: {
    setToggleGptSearchView: (state) => {
      state.toggleGptSearchView = !state.toggleGptSearchView;
    },
  },
});

export const { setToggleGptSearchView } = gptSearchSlice.actions;
export default gptSearchSlice.reducer;
