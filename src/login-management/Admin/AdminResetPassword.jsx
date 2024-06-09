import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const AdminResetPassword = () => {
  let [params] = useSearchParams();
  let token = params.get("token");
  console.log(token);
  let [password, setPassword] = useState("");
  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = {
        password: password,
      };
      let result = await axios({
        url: "http://localhost:8000/admin/reset-password",
        method: "patch",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/admin/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="password">Password: </label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button style={{ cursor: "pointer" }}>Reset</button>
    </form>
  );
};

export default AdminResetPassword;
