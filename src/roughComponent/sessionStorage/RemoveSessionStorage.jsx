import React from "react";

const RemoveSessionStorage = () => {
  sessionStorage.removeItem("address");
  return <div>RemoveSessionStorage</div>;
};

export default RemoveSessionStorage;
