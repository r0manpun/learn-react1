import React, { useState } from "react";

const IncrementByChoice = () => {
  const [count, setCount] = useState(0);

  const handleClick = (value) => {
    return (e) => {
      setCount(count + value);
    };
  };

  return (
    <div>
      <p>count is {count}</p>
      <button onClick={handleClick(2)}>
        IncrementBy 2
      </button>
      <button onClick={handleClick(100)}>
        IncrementBy 100
      </button>
      <button onClick={handleClick(1000)}>
        IncrementBy 1000
      </button>
    </div>
  );
};

export default IncrementByChoice;
