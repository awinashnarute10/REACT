// Counter.js
import React, { useState } from "react";

const Counter = () => {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber((prevalue) =>  prevalue + 1 );
  }

  const decrement = () => {
    setNumber((prevalue) =>  prevalue -1 );
  }

  return (
    <div>
      <h2>Counter: {number}</h2>
      <button onClick = {increment}>Increment</button>
      <button onClick = {decrement}>Decrement</button>
      <button onClick={() => {setNumber(0)}}>Reset</button>
    </div>
  );
};

export default Counter;