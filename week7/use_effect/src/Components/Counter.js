import React, { useState, useEffect } from "react";
import axios from "axios";

const Counter = () => {
  const [count, setCount] = useState(0);

  // setTimeout(() => setCount(count + 2), 10);

  useEffect(() => {
    setTimeout(() => {
      setCount(100);
    }, 2000);
  }, []);

  return (
    <div>
      {count}
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
};

export default Counter;
