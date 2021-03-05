import React, { useReducer } from "react";

import { useCounter } from "./hooks/useCounter";
import "./App.css";

function App() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <div className="container">
      <button onClick={() => increment()}>+</button>
      <h1 onClick={() => reset()}>{count}</h1>
      <button onClick={() => decrement()}>-</button>
    </div>
  );
}

export default App;
