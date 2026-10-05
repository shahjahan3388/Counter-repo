import React, { useState } from "react";
import "./index.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="counter">
      <h1>Counter</h1>

      <div className="number">
        {count}
      </div>

      <div className="buttons">
        <button onClick={() => setCount(count + 1)}>
          +
        </button>

        <button onClick={() => setCount(count - 1)}>
          -
        </button>

        <button onClick={() => setCount(0)}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;