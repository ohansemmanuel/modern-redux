import React from "react";
import ReactDOM from "react-dom";
import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import "./index.css";

//action type
export const UPDATE_MOOD = "UPDATE_MOOD";

export const MOODS = {
  SAD: "sad",
  SHOCKED: "shocked",
  HAPPY: "happy",
  BLISSFUL: "blissful",
  LOVESTRUCK: "lovestruck",
  EXCITED: "excited",
  KO: "ko",
};
const INITIAL_STATE = { mood: MOODS.SAD };

//action creators
export const updateCatMood = createAction(UPDATE_MOOD);
//reducer
export const reducer = createReducer(
  INITIAL_STATE,
  {
    [updateCatMood]: (state, action) => {
      state.mood = action.payload;
    },
  },
  [],
  (state) => state
);
//store
const store = configureStore({ reducer });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
