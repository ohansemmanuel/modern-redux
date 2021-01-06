import React from "react";
import ReactDOM from "react-dom";
import { configureStore } from "@reduxjs/toolkit";
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
export const updateCatMood = (payload) => ({
  type: UPDATE_MOOD,
  payload,
});

//reducer
export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UPDATE_MOOD:
      return { ...state, mood: action.payload };

    default:
      return state;
  }
};

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
