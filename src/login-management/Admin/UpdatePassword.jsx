import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UpdatePassword = () => {
  let [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
  });
  let navigate = useNavigate();
  let token = localStorage.getItem("token");

  const handleSubmit = async () => {
    try {
      let result = await axios({
        url: "http://localhost:8000/admin/update-password",
        method: "post",
        data: password,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      localStorage.removeItem("token");
      navigate("/admin/login");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="oldPass">Old Password</label>
          <input
            id="oldPass"
            type="text"
            value={password.oldPassword}
            onChange={(e) =>
              setPassword({ ...password, oldPassword: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="newPass">New Password</label>
          <input
            id="newPass"
            type="password"
            value={password.newPassword}
            onChange={(e) =>
              setPassword({ ...password, newPassword: e.target.value })
            }
          />
        </div>
        <button type="submit" onClick={(e) => {}}>
          Update Password
        </button>
      </form>
    </div>
  );
};

export default UpdatePassword;
