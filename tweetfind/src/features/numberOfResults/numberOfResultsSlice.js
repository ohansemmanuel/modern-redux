import { createSlice } from "@reduxjs/toolkit";

const numberOfResultsSlice = createSlice({
  name: "numberOfResults",
  initialState: "10",
  reducers: {
    setNumberOfResults(state, action) {
      return action.payload;
    },
  },
});

export const { setNumberOfResults } = numberOfResultsSlice.actions;
export default numberOfResultsSlice.reducer;
