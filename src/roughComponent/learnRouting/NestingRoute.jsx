import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

const NestingRoute = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <div>
            <Outlet />
          </div>
        }
      >
        <Route index element={<div>Home Page</div>}></Route>
        <Route
          path="student"
          //   element={<div>Student Page</div>}
          element={
            <div>
              <Outlet />
            </div>
          }
        >
          <Route
            index
            element={<div>Student Page</div>}
          ></Route>
          <Route
            path="1"
            element={<div>1 path of Student Page</div>}
          ></Route>
          <Route
            path="roman"
            element={<div>Roman of Student Page</div>}
          ></Route>
        </Route>
        <Route
          path="*"
          element={<div>Error 404 Page</div>}
        ></Route>
      </Route>
    </Routes>
  );
};

export default NestingRoute;
