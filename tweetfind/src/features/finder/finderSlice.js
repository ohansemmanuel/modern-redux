import { createSlice, current } from "@reduxjs/toolkit";
import { findTweets } from "./findTweets";

const initialState = { tweets: [], isLoading: false, error: null };

const finderSlice = createSlice({
  name: "finder",
  initialState,
  reducers: {
    loadingTweetsSuccess(state, { payload }) {
      state.tweets = payload;
      state.isLoading = false;
      state.error = null;
    },
    isLoadingTweets(state) {
      console.log("Before isLoading: ", current(state));
      state.isLoading = true;
      console.log("After isLoading: ", current(state));
    },
    loadingTweetsFailed(state, payload) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const {
  isLoadingTweets,
  loadingTweetsSuccess,
  loadingTweetsFailed,
} = finderSlice.actions;
export default finderSlice.reducer;

export const fetchTweets = (searchValue, numberOfResults) => async (
  dispatch
) => {
  try {
    dispatch(isLoadingTweets());
    const tweets = await findTweets(searchValue, numberOfResults);
    dispatch(loadingTweetsSuccess(tweets));
  } catch (error) {
    const errorMsg = error.toString();
    dispatch(loadingTweetsFailed(errorMsg));
  }
};
