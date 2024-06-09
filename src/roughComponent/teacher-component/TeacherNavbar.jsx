import React from 'react'
import { NavLink } from 'react-router-dom'

const TeacherNavbar = () => {
  return (
	<div style={{ display: "flex", gap: "1rem" }}>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/teachers/create">Create Teacher</NavLink>
      <NavLink to="/teachers">All Teachers</NavLink>
    </div>
  )
}

export default TeacherNavbar