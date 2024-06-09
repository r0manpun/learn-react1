import React from "react";
import { NavLink } from "react-router-dom";
import MyRoutes from "./MyRoutes";
import NestingRoute from "./NestingRoute";

const MyLinks = () => {
  return (
    <nav
      style={{
        backgroundColor: "#36f5",
        display: "flex",
        gap: "1rem",
        marginBottom: "10px",
      }}
    >
      {/* <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink> */}
      <NavLink to="/">Home</NavLink>
      <NavLink to="/products/create">Create Products</NavLink>
      <NavLink to="/products">All Products</NavLink>
    </nav>
  );
};

export default MyLinks;
