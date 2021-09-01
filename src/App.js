import React, { useState } from "react";
import "./index.css";

export default function App() {
  const [emoji, setEmoji] = useState("");
  const emojiDictionary = {
    "🤔": "Thinking Face",
    "😉": "Winking Face",
    "😍": "Heart Eyes and Smiling Face",
    "🤣": "Rolling on the floor laughing",
    "🤑": "Money Mouth Face",
    "🤫": "Shushing Face",
    "😛": "Face with Tongue ",
    "😑 ": "Expressionless Face",
    "😌": "Relieved Face",
    "😬": "Grimacing Face",
    "😨": "Fearful Face ",
    "😈": "Smiling Face with Horns",
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
