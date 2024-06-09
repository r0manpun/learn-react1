import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AdminForgetPassword = () => {
  let [email, setEmail] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let data = {
        email: email,
      };
      let result = await axios({
        url: "http://localhost:8000/admin/forget-password",
        method: "post",
        data: data,
      });
      setEmail("");
      toast.success("link has been sent to your email");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <button style={{ cursor: "pointer" }}>Next</button>
    </form>
  );
};

export default AdminForgetPassword;
