import { createSlice } from "@reduxjs/toolkit";

const initialState = { tweets: [] };

const finderSlice = createSlice({
  name: "finder",
  initialState,
  reducers: {
    addTweet(state, payload) {
      state.tweets = payload;
    },
  },
});

export const { addTweet } = finderSlice.actions;
export default finderSlice.reducer;
