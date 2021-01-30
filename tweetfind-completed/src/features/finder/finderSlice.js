import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { findTweets } from "./findTweets";

const initialState = { tweets: [], isLoading: false, error: null };

const FETCH_TWEETS = "FETCH_TWEETS";
export const fetchTweets = createAsyncThunk(
  FETCH_TWEETS,
  async (params, thunkAPI) =>
    await findTweets(params.searchValue, params.numberOfResults)
);

const finderSlice = createSlice({
  name: "finder",
  initialState,
  extraReducers: {
    [fetchTweets.fulfilled]: (state, { payload }) => {
      state.tweets = payload;
      state.isLoading = false;
      state.error = null;
    },
    [fetchTweets.pending]: (state) => {
      state.isLoading = true;
    },
    [fetchTweets.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export default finderSlice.reducer;
