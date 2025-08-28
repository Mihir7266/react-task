import React, { useState } from "react";
import "./test1.css";

const colors = [
  "red", "green", "blue", "yellow", "orange",
  "purple", "pink", "brown", "cyan", "gray"
];

function ColorBox({ title }) {
  const [bg, setBg] = useState("white");

  return (
    <div className="box" style={{ backgroundColor: bg }}>
      
      <div className="buttons">
        {colors.map((color, index) => (
          <button
            key={index}
            style={{ backgroundColor: color }}
            onClick={() => setBg(color)}
          >
            {color}
          </button>
        ))}
      </div>
    </div>
  );
}

function Test1() {
  return (
    <div className="container">
     
      <ColorBox className="box1" />

      <div className="container1">
      
        <ColorBox className="box2" />

        <div className="container2">
      
          <ColorBox className="box3" />

        
          <div className="container3">
            <ColorBox className="box4" />
            <ColorBox className="box4" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test1;
