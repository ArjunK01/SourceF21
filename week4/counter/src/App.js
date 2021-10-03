import React, { useState } from "react";
import "./Styles/app.css";

function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    <div className="container">
      <h1>Count: {count}</h1>
      <button onClick={() => increaseCount()}>Increase</button>

      <button onClick={() => decreaseCount()}>Decrease</button>
      <button
        onClick={() => {
          console.log("Hello World");
        }}
      >
        Print out hello world!
      </button>
    </div>
  );
}

export default App;
