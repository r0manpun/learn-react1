import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./Home";
import GetDynamicRouteParameter from "./GetDynamicRouteParameter";
import About from "./About";
import Error from "./Error";

const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route
        path="/contact"
        element={<div>Contact Page</div>}
      ></Route>
      <Route path="*" element={<Error />}></Route>
      <Route
        path="a/a1"
        element={<div>a1 page</div>}
      ></Route>
      <Route
        path="a/:any"
        element={<div>any page</div>}
      ></Route>
      <Route
        path="b/:id1/id/:id2"
        element={<GetDynamicRouteParameter />}
      ></Route>
      {/* nesting route */}
      <Route
        path="c"
        element={
          <div>
            <Outlet></Outlet>
          </div>
        }
      >
        {/*
        Rules;
        1> Parent must have Outlet 
        2> Path should not have '/'
         */}
        <Route
          path="c1"
          element={<div>c1 of c page</div>}
        ></Route>
        {/*path = c/c1 */}
        <Route
          path=":any"
          element={<div>any of c page</div>}
        ></Route>
        {/*path = c/:any */}
        <Route
          path="c2"
          element={
            <div>
              c2 of c page <Outlet />
            </div>
          }
        >
          <Route
            path="C2-1"
            element={<div>C2-1 of c2 page</div>}
          ></Route>
        </Route>
        {/*path = c/:any */}
      </Route>
    </Routes>
  );
};

export default MyRoutes;
