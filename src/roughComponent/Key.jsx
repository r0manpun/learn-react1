import React from "react";

const Key = () => {
  let data = [
    {
      name: "roman",
      age: 24,
    },
    {
      name: "luffy",
      age: 20,
    },
  ];
  return (
    <>
      {data.map((item, i) => {
        return <div key={i}>{item.name}</div>;
      })}
    </>
  );
};

export default Key;
