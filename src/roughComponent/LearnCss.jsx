import React from "react";

const LearnCss = () => {
  return (
    <div>
      <p
        style={{
          backgroundColor: "rebeccapurple",
          color: "white",
        }}
      >
        This is paragraph
      </p>
      <p
        style={{
          fontSize: "20px",
        }}
      >
        This is another paragraph
      </p>
      <p className="success"> This is third paragraph</p>
      <p className="error"> This is fourth paragraph</p>
    </div>
  );
};

export default LearnCss;
