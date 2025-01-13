import { useState } from "react";
import "./counter.css";

const Counter = () => {
  let [number, setNumber] = useState(2);

  const removeValue = () => {
    if (number > 0) {
      setNumber(number - 1);
    }
  };
  return (
    <div>
      <h3>Use State Hook #5</h3>
      <h5>Number {number}</h5>
      <button onClick={() => setNumber(number + 1)}>Increment</button>
      <button onClick={removeValue}>Decrement</button>
    </div>
  );
};

export default Counter;
