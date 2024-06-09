import React from "react";

const SetSessionStorage = () => {
  sessionStorage.setItem("address", "galkot");
  return <div>SetSessionStorage</div>;
};

export default SetSessionStorage;

/*
session storage's data will be removed if the browser/tab/session is closed 
session storage is different in different tab
*/ 