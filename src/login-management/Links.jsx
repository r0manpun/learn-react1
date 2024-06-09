import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalVariableContext } from "../App2";

const Links = () => {
  let global = useContext(GlobalVariableContext);
  return (
    <div
      style={{
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
        marginBottom: "10px",
      }}
    >
      <NavLink to="/">Home</NavLink>
      {/* <NavLink to="/login">Login</NavLink> */}
      {/* <NavLink to="/students">Students</NavLink> */}
      {/* <NavLink to="/students/register">Register/Create Students</NavLink> */}
      <NavLink to="/admin/register">Admin Register</NavLink>
      {global.token ? (
        <>
          <NavLink to="/admin/my-profile">My Profile</NavLink>{" "}
          <NavLink to="/admin/logout">Admin Logout</NavLink>
          <NavLink to="/admin/update-password">Update Password</NavLink>
          <NavLink to="/admin/read-all-users">Read All User</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/admin/login">Admin Login</NavLink>
        </>
      )}
    </div>
  );
};

export default Links;
