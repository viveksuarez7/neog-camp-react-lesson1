import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "😊": "smiling",
  "😳": "disbelief",
  "😔": "sad",
  "🥡": "takeout box",
  "❤️": "love",
  "😑": "annoyance"
};
let emojiWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");
  const emojiEventHandler = (event) => {
    let userInput = event.target.value;
    let meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "The value is not in our data base";
    }
    setMeaning(meaning);
  };
  function emojiClickHandler(emoji) {
    let meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>
        Welcome <span>Vivek</span>
      </h1>
      <input onChange={emojiEventHandler} />
      <h2>{meaning}</h2>
      <h3>Emoj's We Know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "ponter" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}

// use state in react
/** VISER -> VIEW -> INTERACT ->STATE IN EVENT HANDLER->RENDER*/
