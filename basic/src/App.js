import { Cat } from "react-kawaii";
import { useDispatch, useSelector } from "react-redux";
import { updateCatMood, MOODS } from ".";

import "./App.css";

function App() {
  const dispatch = useDispatch();
  const currentMood = useSelector((state = {}) => state.mood);

  const handleMoodUpdate = (evt) => {
    const mood = evt.target.dataset.type;
    dispatch(updateCatMood(mood));
  };

  return (
    <div className="App">
      <Cat size={320} mood={currentMood} color="#596881" />
      <section>
        {Object.values(MOODS).map((mood) => (
          <button
            data-type={mood}
            key={mood}
            className={`${currentMood === mood ? "selected" : ""}`}
            onClick={handleMoodUpdate}
          >
            {mood}
          </button>
        ))}
      </section>
    </div>
  );
}

export default App;
