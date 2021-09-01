import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [emoji, setEmoji] = useState("");
  const emojiDictionary = {
    "😊": "smiling",
    "🤔": "thinking",
    "🤗": "hug",
    "😴": "sleeping",
    "😳": "flushed"
  };
  const emojiTeller = (e) => {
    setEmoji(e.target.value);
  };
  const emojiClick = (item) => {
    setEmoji(item);
  };
  return (
    <div className="App">
      <h1>Learning React!</h1>
      <input onChange={emojiTeller} />
      <h3>
        {emojiDictionary[emoji] === undefined
          ? `We don't have this in our database`
          : emojiDictionary[emoji]}
      </h3>
      <p>Emojis we know</p>
      <ul>
        {Object.keys(emojiDictionary).map((em, id) => (
          <span onClick={() => emojiClick(em)} key={id}>
            {em}
          </span>
        ))}
      </ul>
    </div>
  );
}
