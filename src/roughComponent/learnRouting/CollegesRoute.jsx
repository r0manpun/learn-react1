import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

const CollegesRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="colleges" element={<Outlet />}>
            <Route path="create" element={<div>Create college</div>}></Route>
            <Route index element={<div>Get all colleges</div>}></Route>
            <Route path=":id" element={<div>Get specific college</div>}></Route>
            <Route path="update" element={<Outlet />}>
              <Route
                path=":id"
                element={<div>Update specific college</div>}
              ></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default CollegesRoute;
