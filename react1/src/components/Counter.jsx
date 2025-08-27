import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center" }}>
      <h3 style={{ marginBottom: "1rem" }}>Count: {count}</h3>
      <button className="btn-success" onClick={() => setCount(count + 1)}>
        ➕ Increase
      </button>{" "}
      <button className="btn-danger" onClick={() => setCount(count - 1)}>
        ➖ Decrease
      </button>
    </div>
  );
}

export default Counter;
