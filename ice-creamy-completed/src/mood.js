import { createSlice } from "@reduxjs/toolkit";

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

const flappyMoodSlice = createSlice({
  name: "mood",
  initialState: INITIAL_STATE,
  reducers: {
    updateCatMood: (state, action) => {
      state.mood = action.payload;
    },
  },
});

export const { updateCatMood } = flappyMoodSlice.actions;
export default flappyMoodSlice.reducer;
