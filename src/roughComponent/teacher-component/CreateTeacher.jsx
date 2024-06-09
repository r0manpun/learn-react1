import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const CreateTeacher = () => {
  let initialValues = {
    name: "",
    address: "",
    profileImage: "",
  };
  let [data, setData] = useState(initialValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let formData = new FormData();
    formData.append("name", data.name);
    formData.append("address", data.address);
    formData.append("profileImage", data.profileImage);

    try {
      let result = await axios({
        url: "http://localhost:8000/teacher",
        method: "post",
        data: formData,
      });
      console.log(result);
      // toast.success(result.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Teacher Name </label>
          <input
            id="name"
            type="text"
            value={data.name}
            onChange={(e) => {
              setData({ ...data, name: e.target.value });
            }}
          />
        </div>
        <div>
          <label htmlFor="address">Address </label>
          <input
            id="address"
            type="text"
            value={data.address}
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="profile">Profile Image </label>
          <input
            id="profile"
            type="file"
            multiple={false}
            onChange={(e) =>
              setData({ ...data, profileImage: e.target.files[0] })
            }
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreateTeacher;
