import React, { useState } from "react";

const State = () => {
  const [counter, setCounter] = useState(0);
  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <>
    <h1>useState</h1>
      <h1>increment decrement using useState</h1>
      <button className="btn btn-primary" onClick={increment}>UP</button>
      <span>  Bidding  {counter}</span>
      <button onClick={decrement}>DOWN</button>
    </>
  );
};

export default State;
