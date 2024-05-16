import React, { useState } from "react";

const LearnUseState1 = () => {
  // DEFINING VARIABLE USING USESTATE HOOK
  let [name, setName] = useState("roman");

  const handleClick = () => {
    setName("jack");
  };

  return (
    <div>
      name is {name}
      <div>
        <button onClick={handleClick}>Change Name</button>
      </div>
    </div>
  );
};

export default LearnUseState1;
