import React from "react";

const ButtonClick = () => {
  //   const handleClick = (e) => {
  //     console.log("button is clicked");
  // 	};
  const handleClick = (name) => {
    return (e) => {
      console.log(name);
    };
  };
  return (
    <div>
      {/* <button
        onClick={() =>
          console.log("button is clicked")
        }
      >
        Click Me
      </button> */}

      {/* <button onClick={handleClick}>Click Me</button> */}

      <button onClick={handleClick("roman")}>
        Click Me
      </button>
    </div>
  );
};

export default ButtonClick;
