import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateSpecificUser = () => {
  let [data, setData] = useState({
    fullname: "",
    dob: "",
    gender: "",
  });
  let params = useParams();
  let navigate = useNavigate();

  let token = localStorage.getItem("token");

  // Populate the fields
  useEffect(() => {
    (async () => {
      try {
        let userInfo = await axios({
          url: `http://localhost:8000/user/${params.id}`,
          method: "get",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        let data = userInfo.data.result;
        console.log(data);
        setData({
          fullname: data.fullname,
          gender: data.gender,
          dob: data.dob,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("progress");
    try {
      let result = await axios({
        url: `http://localhost:8000/user/${params.id}`,
        method: "patch",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(result);
      navigate(`/users/${params.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname">Full Name : </label>
          <input
            id="fullname"
            type="text"
            value={data.fullname}
            onChange={(e) => setData({ ...data, fullname: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="dob">dob : </label>
          <input
            id="dob"
            type="date"
            value={data.dob}
            onChange={(e) => setData({ ...data, dob: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="gender">Gender : </label>
          <span>
            <label htmlFor="male">Male : </label>
            <input
              id="male"
              type="radio"
              value="male"
              checked={data.gender === "male"}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
            />
            <label htmlFor="female">Female : </label>
            <input
              id="female"
              type="radio"
              value="female"
              checked={data.gender === "female"}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
            />
            <label htmlFor="other">Other : </label>
            <input
              id="other"
              type="radio"
              value="other"
              checked={data.gender === "other"}
              onChange={(e) => setData({ ...data, gender: e.target.value })}
            />
          </span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UpdateSpecificUser;
