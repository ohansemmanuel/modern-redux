import { createSlice } from "@reduxjs/toolkit";
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
      state.isLoading = true;
    },
    loadingTweetsFailed(state, { payload }) {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

export const {
  addTweets,
  isLoadingTweets,
  loadingTweetsSuccess,
  loadingTweetsFailed,
} = finderSlice.actions;
export default finderSlice.reducer;

export const fetchTweets = (searchValue) => async (dispatch) => {
  try {
    dispatch(isLoadingTweets());
    const tweets = await findTweets(searchValue);
    dispatch(loadingTweetsSuccess(tweets));
  } catch (error) {
    dispatch(loadingTweetsFailed(error.toString()));
  }
};
