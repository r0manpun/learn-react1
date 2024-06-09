import React from "react";

const GetLocalStorage = () => {
  console.log(localStorage.getItem("name"));
  console.log(localStorage.getItem("age"));
  console.log(localStorage.getItem("isMarried"));

  console.log(JSON.parse(localStorage.getItem("fatherInfo")));
  console.log(JSON.parse(localStorage.getItem("datas")));

  return <div>GetLocalStorage</div>;
};

export default GetLocalStorage;

// always parse array and object
