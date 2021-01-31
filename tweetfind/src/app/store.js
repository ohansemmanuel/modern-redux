import { configureStore } from "@reduxjs/toolkit";

import finderReducer from "../features/finder/finderSlice";
import numberOfResultsReducer from "../features/numberOfResults/numberOfResultsSlice";

export default configureStore({
  reducer: {
    finder: finderReducer,
    numberOfResults: numberOfResultsReducer,
  },
  devTools: {
    name: "TweetFind",
  },
});
