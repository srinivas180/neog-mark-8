import React, { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🍕": "Pizza",
  "🍔": "Burger",
  "🍟": "French Fries",
  "🌭": "Hot Dog",
  "🍿": "Pop Corn",
  "🧂": "Salt",
  "🥚": "Egg",
  "🍗": "Poultry Leg",
  "🥩": "Meat",
  "🍚": "Rice",
  "🥣": "Soup",
  "🎂": "Cake"
};

var emojisList = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setMeaning] = useState("");

  function emojiOnChangeHandler(event) {
    var emojiInput = event.target.value;
    var emojiText = emojiDictionary[emojiInput];

    if (emojiText === undefined) {
      emojiText = "This emoji is not available in our database.";
    }
    setMeaning(emojiText);
  }

  function emojiClickHandler(emoji) {
    var emojiMeaning = emojiDictionary[emoji];
    setMeaning(emojiMeaning);
  }

  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input onChange={emojiOnChangeHandler} />
      <h2>{meaning}</h2>
      <h3>List of Emojis </h3>
      {emojisList.map((emoji) => {
        return (
          <span
            key={emoji}
            onClick={() => emojiClickHandler(emoji)}
            style={{ cursor: "pointer", fontSize: "2rem", padding: "1rem" }}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
