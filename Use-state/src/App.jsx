import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  let increment = () => {
    setCount(count + 1);
  };

  let decrement = () => {
    setCount(count - 1);
    if (count <= 0) {
      setCount(0);
    }
  };

  return (
    <div className="app-wrapper">
      <div className="counter-card">
        
        <h1 className="counter-title">Counter</h1>
        
        <div className="divider" />

        <div className="display-circle">
          <span className="count-text">{count}</span>
        </div>

        <div className="buttons-container">
          <button onClick={decrement} className="btn-round btn-decrement">
            -
          </button>

          <button onClick={() => setCount(0)} className="btn-reset">
            Reset
          </button>

          <button onClick={increment} className="btn-round btn-increment">
            +
          </button>
        </div>

      </div>
    </div>
  );
}