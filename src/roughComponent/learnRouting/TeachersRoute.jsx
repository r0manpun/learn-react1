import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import GetTeachers from "../teacher-component/GetTeachers";
import CreateTeacher from "../teacher-component/CreateTeacher";
import TeacherDetails from "../teacher-component/TeacherDetails";

const TeachersRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route path="teachers" element={<Outlet />}>
            <Route path="create" element={<CreateTeacher />}></Route>
            <Route index element={<GetTeachers />}></Route>
            <Route path=":id" element={<TeacherDetails />}></Route>
            <Route path="update" element={<Outlet />}>
              <Route
                path=":id"
                element={<div>Update specific teacher</div>}
              ></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default TeachersRoute;
