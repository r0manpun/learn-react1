import React from "react";
import { json } from "react-router-dom";

const SetLocalStorage = () => {
  localStorage.setItem("name", "roman");
  localStorage.setItem("age", 24);
  localStorage.setItem("isMarried", false);
  let data = [
    { name: "roman", age: 10 },
    { name: "luffy", isMarried: false },
  ];

  let fatherInfo = { name: "lil bahadur pun", age: 56 };
  localStorage.setItem("data", JSON.stringify(data));
  localStorage.setItem("fatherInfo", JSON.stringify(fatherInfo));

  return <div>SetLocalStorage</div>;
};

export default SetLocalStorage;
