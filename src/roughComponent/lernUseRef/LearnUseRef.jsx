import React, { useRef, useState } from "react";

const LearnUseRef = () => {
  const [toggle, setToggle] = useState(false);

  // 1) Define ref
  let r1 = useRef();
  let r2 = useRef();

  const handleClick = (e) => {
	  r1.current.style.backgroundColor = "red";
	  r1.current.textContent= "hello paragraph 1"
    r2.current.style.backgroundColor = "blue";
  };

  return (
    <div>
      {/* 2) Attach Ref */}
      <p ref={r1}>Hello I am paragraph 1</p>
      <p ref={r2}>Hello I am paragraph 2</p>
      <button onClick={handleClick}>Paragraph 1</button>
    </div>
  );
};

export default LearnUseRef;
