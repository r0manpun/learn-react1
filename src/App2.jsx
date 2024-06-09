import React, { createContext, useState } from "react";
import Links from "./login-management/Links";
import Router from "./login-management/Router";
import MyLinks from "./roughComponent/learnRouting/MyLinks";
import ProductsRoute from "./roughComponent/learnRouting/ProductsRoute";
import TeachersRoute from "./roughComponent/learnRouting/TeachersRoute";

export let GlobalVariableContext = createContext();
const App2 = () => {
  let [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <GlobalVariableContext.Provider value={{ token, setToken }}>
      <div>
        <MyLinks />
        {/* <MyRoutes /> */}
        <ProductsRoute />
        {/* <TeachersRoute /> */}
        {/* <CollegesRoute />
      <TeachersRoute /> */}
        {/* <NestingRoute /> */}
        {/* LOGIN MANAGEMENT */}
        {/* <Links />
        <Router /> */}
      </div>
    </GlobalVariableContext.Provider>
  );
};

export default App2;
