import { createSlice } from "@reduxjs/toolkit";
import { findTweets } from "./findTweets";

const initialState = { tweets: [], isLoading: false, error: null };

const finderSlice = createSlice({
  name: "finder",
  initialState,
  reducers: {
    loadingTweetsSuccess(state, payload) {
      state.tweets = payload;
      state.isLoading = false;
      state.error = null;
    },
    isLoadingTweets(state) {
      state.isLoading = true;
    },
  },
});

export const { isLoadingTweets, loadingTweetsSuccess } = finderSlice.actions;
export default finderSlice.reducer;

export const fetchTweets = (searchValue) => async (dispatch) => {
  // loading ...
  dispatch(isLoadingTweets());
  // perform actual data fetch
  const tweets = await findTweets(searchValue);
  // success
  dispatch(loadingTweetsSuccess(tweets));
};
