import { combineReducers } from "@reduxjs/toolkit";

import finderReducer from "../features/finder/finderSlice";
import numberOfResultsReducer from "../features/numberOfResults/numberOfResultsSlice";

export const rootReducer = combineReducers({
  finder: finderReducer,
  numberOfResults: numberOfResultsReducer,
});
