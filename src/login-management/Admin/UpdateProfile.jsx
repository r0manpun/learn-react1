import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import htmlDateFormat from "../../utils/dateFormat";

const UpdateProfile = () => {
  let [data, setData] = useState({
    name: "",
    dob: "",
    gender: "",
  });
  let navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        let adminInfo = await axios({
          url: `http://localhost:8000/admin/my-profile`,
          method: "get",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log(adminInfo);
        let data = adminInfo.data.result;
        setData({
          name: data.name,
          gender: data.gender,
          dob: data.dob,
        });
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  let token = localStorage.getItem("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let result = await axios({
        url: "http://localhost:8000/admin/update-profile",
        method: "post",
        data: data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/admin/my-profile");
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
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="dob">dob : </label>
          <input
            id="dob"
            type="date"
            value={htmlDateFormat(data.dob)}
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

export default UpdateProfile;
