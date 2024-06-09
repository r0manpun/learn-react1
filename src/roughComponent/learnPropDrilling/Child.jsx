import React from "react";
import GrandChild from "./GrandChild";

const Child = (props) => {
  return (
    <div>
      Child
      {/* <GrandChild name={props.name}  */}
      <GrandChild/>
    </div>
  );
};

export default Child;
