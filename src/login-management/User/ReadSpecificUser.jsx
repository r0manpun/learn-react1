import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ReadSpecificUser = () => {
  let [user, setUser] = useState({});
  let navigate = useNavigate();
  let params = useParams();
  let token = localStorage.getItem("token");

  let getUser = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8000/user/${params.id}`,
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUser(result.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      User Profile
      <p>Name: {user.fullname}</p>
      <p>Email: {user.email}</p>
      <p>Gender: {user.gender}</p>
      <p>Date of Birth: {new Date(user.dob).toLocaleString()}</p>
      <p>Role: {user.role}</p>
      <button
        onClick={() => {
          navigate(`/users/update/${params.id}`);
        }}
      >
        Update Profile
      </button>
    </div>
  );
};

export default ReadSpecificUser;
