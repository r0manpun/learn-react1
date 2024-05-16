import React, { useState } from "react";

const LearnUseState2 = () => {
  let [count, setCount] = useState(0);
  console.log(count);

  let handleIncrement = (e) => {
    setCount(count + 1);
  };
  let handleDecrement = (e) => {
    setCount(count - 1);
  };
  return (
    <div>
      <p>count is {count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default LearnUseState2;
