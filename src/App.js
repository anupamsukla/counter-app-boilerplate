import "./App.css";
import React, { useState } from "react";
function App() {
  const [X, setX] = useState(0)
  const onclick = (value) => {
    if (X > 0) {
      setX(X + value)
    }
    else if (X == 0 && value == 1) {
      setX(X + value)
    }
  }

  return (
    <div className="App">
      <h2 data-testid="counter-value">{X}</h2>
      <button data-testid="counter-decrement-button" onClick={() => onclick(-1)}>-</button>
      <button data-testid="counter-increment-button" onClick={() => onclick(1)}>+</button>
    </div>
  );
}

export default App;
