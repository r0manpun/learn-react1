import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";

const RegisterAdmin = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    dob: "",
    gender: "",
  };
  let [formData, setFormData] = useState(initialValues);
  return (
    <div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          // setFormData(formData);
          // console.log(formData);
          try {
            let data = { ...formData, role: "admin" };
            // console.log(data);
            let result = await axios({
              url: "http://localhost:8000/admin",
              method: "post",
              data: data,
            });

            toast.success(
              "Please verify your email by clicking on the mail sent to your email address."
            );
            setFormData(initialValues);
            // console.log(result.data.result);
          } catch (error) {
            toast.error(error.response.data.message);
          }
        }}
      >
        <div>
          <label htmlFor="fullname">Full Name : </label>
          <input
            id="fullname"
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email">Email : </label>
          <input
            id="email"
            type="text"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <input
            id="password"
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="dob">dob : </label>
          <input
            id="dob"
            type="date"
            value={formData.dob}
            onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
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
              checked={formData.gender === "male"}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
            />
            <label htmlFor="female">Female : </label>
            <input
              id="female"
              type="radio"
              value="female"
              checked={formData.gender === "female"}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
            />
            <label htmlFor="other">Other : </label>
            <input
              id="other"
              type="radio"
              value="other"
              checked={formData.gender === "other"}
              onChange={(e) =>
                setFormData({ ...formData, gender: e.target.value })
              }
            />
          </span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RegisterAdmin;
