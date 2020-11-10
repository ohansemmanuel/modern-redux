import { Cat } from "react-kawaii";
import "./App.css";

const MOODS = [
  "sad",
  "shocked",
  "happy",
  "blissful",
  "lovestruck",
  "excited",
  "ko",
];

function App() {
  return (
    <div className="App">
      <Cat size={320} mood="excited" color="#596881" />
      <section>
        {MOODS.map((mood) => (
          <button data-type={mood} key={mood}>
            {mood}
          </button>
        ))}
      </section>
    </div>
  );
}

export default App;
