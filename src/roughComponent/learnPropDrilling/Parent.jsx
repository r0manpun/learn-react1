import React from "react";
import Child from "./Child";

const Parent = (props) => {
  return (
    <div>
      Parent
      {/* <Child name={props.name} /> */}
      <Child />
    </div>
  );
};

export default Parent;
