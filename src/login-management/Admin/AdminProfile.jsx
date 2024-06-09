import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import htmlDateFormat from "../../utils/dateFormat";

const AdminProfile = () => {
  let [data, setData] = useState({});
  let navigate = useNavigate();

  let token = localStorage.getItem("token");
  //   if (!token) throw new Error("no token available");

  let getAdminProfile = async () => {
    try {
      let admin = await axios({
        url: "http://localhost:8000/admin/my-profile",
        method: "get",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setData(admin.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAdminProfile();
  }, []);

  return (
    <div>
      Admin Profile
      <p>Name: {data.name}</p>
      <p>Email: {data.email}</p>
      <p>Gender: {data.gender}</p>
      <p>Date of Birth: {htmlDateFormat(data.dob)} yyyy-mm-dd</p>
      <p>Role: {data.role}</p>
      <button
        onClick={() => {
          navigate("/admin/update-profile");
        }}
      >
        Update Profile
      </button>
    </div>
  );
};

export default AdminProfile;
