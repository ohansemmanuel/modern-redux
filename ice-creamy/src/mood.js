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
