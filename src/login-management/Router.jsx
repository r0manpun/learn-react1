import React, { useContext } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Register from "./RegisterStudents";
import Login from "./Login";
import RegisterStudents from "./RegisterStudents";
import RegisterAdmin from "./RegisterAdmin";
import AdminVerify from "./AdminVerify";
import AdminLogin from "./AdminLogin";
import AdminProfile from "./Admin/AdminProfile";
import AdminLogout from "./AdminLogout";
import UpdateProfile from "./Admin/UpdateProfile";
import UpdatePassword from "./Admin/UpdatePassword";
import AdminForgetPassword from "./Admin/AdminForgetPassword";
import AdminResetPassword from "./Admin/AdminResetPassword";
import ReadAllUsers from "./User/ReadAllUsers";
import ReadSpecificUser from "./User/ReadSpecificUser";
import UpdateSpecificUser from "./User/UpdateSpecificUser";
import { GlobalVariableContext } from "../App2";

const Router = () => {
  let { token, setToken } = useContext(GlobalVariableContext);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<div>Home Page</div>}></Route>
          <Route path="verify-account" element={<AdminVerify />}></Route>
          {/* <Route path="students" element={<Outlet />}>
            <Route index element={<div>Students page</div>}></Route>
            <Route path="register" element={<RegisterStudents />}></Route>
          </Route> */}
          <Route path="admin" element={<Outlet />}>
            <Route path="register" element={<RegisterAdmin />}></Route>
            {!token ? (
              <>
                <Route path="login" element={<AdminLogin />}></Route>
              </>
            ) : (
              <>
                <Route index element={<div>Admin Dashboard</div>}></Route>
                <Route path="my-profile" element={<AdminProfile />}></Route>
                <Route path="logout" element={<AdminLogout />}></Route>
                <Route
                  path="update-profile"
                  element={<UpdateProfile />}
                ></Route>
                <Route
                  path="update-password"
                  element={<UpdatePassword />}
                ></Route>
                <Route path="read-all-users" element={<ReadAllUsers />}></Route>
              </>
            )}
            <Route
              path="forget-password"
              element={<AdminForgetPassword />}
            ></Route>
            <Route path="*" element={<div>404 page</div>}></Route>
          </Route>
          <Route path="users" element={<Outlet />}>
            <Route index element={<div>Users Page</div>}></Route>
            <Route path=":id" element={<ReadSpecificUser />}></Route>
            <Route path="update" element={<Outlet />}>
              <Route path=":id" element={<UpdateSpecificUser />}></Route>
            </Route>
          </Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="reset-password" element={<AdminResetPassword />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Router;

/* 
read all user => admin or superadmin
read specific user => admin or superadmin
delete user => admin or superadmin 
update user => superadmin
*/

/* 
while getting token
  add token to useContet form localStorage

  if other component needs token 
  get token from the useContext ratehr than localStorage (for page reload purpose)

while change token
   change to localStorage
   change to useContext

*/
