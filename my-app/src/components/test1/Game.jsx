import React, { useState } from "react";
import "./Game.css"

function Game() {
  const [top, setTop] = useState(50);
  const [left, setLeft] = useState(50);

  const moveSmiley = () => {
    setTop(Math.random() * 90);   
    setLeft(Math.random() * 90); 
  };

  return (
    <div className="game">
  <div className="game-box">
    <button
      className="smiley-btn"
      style={{ top: `${top}%`, left: `${left}%` }}
      onMouseEnter={moveSmiley}
    >
      😄
    </button>
  </div>
</div>

  );
}

export default Game;
