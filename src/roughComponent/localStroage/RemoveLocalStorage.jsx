import React from "react";

const RemoveLocalStorage = () => {
  localStorage.removeItem("name");
  localStorage.removeItem("datas");

  return <div>RemoveLocalStorage</div>;
};

export default RemoveLocalStorage;
