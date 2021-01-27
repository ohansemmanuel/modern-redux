import { configureStore } from "@reduxjs/toolkit";
import finderReducer from "../features/finder/finderSlice";

export default configureStore({
  reducer: finderReducer,
});
