import React from "react";

const GetSessionStorage = () => {
  console.log(sessionStorage.getItem("address"));
  return <div>GetSessionStorage</div>;
};

export default GetSessionStorage;
