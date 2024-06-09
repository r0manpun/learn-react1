import axios from "axios";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GlobalVariableContext } from "../App2";

const AdminLogin = () => {
  const navigate = useNavigate();
  let global = useContext(GlobalVariableContext);

  let [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let admin = await axios({
        url: "http://localhost:8000/admin/login",
        method: "post",
        data: formData,
      });
      localStorage.setItem("token", admin.data.token);
      global.setToken(admin.data.token);
      navigate("/admin");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
        <button style={{ cursor: "pointer" }} type="submit">
          Login
        </button>
        <div
          style={{ cursor: "pointer" }}
          onClick={() => {
            navigate("/admin/forget-password"); //kabab case
          }}
        >
          Forgot Password ?
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;

// login
/* 
 make form 
 hit api(token)
 save token to local storage
 /admin
 */

// profile
/* 
my profile
	link=> /admon/my-profile
	route=> /admin/my-profile => AdminProfile Component
	AdminProfile
		hit api on page load (useEffect)
		token => get token form the local storage

Logout 
	Link /admin/logout
	Route /admin/logout AdminLogout
	AdminLogout
	 	remove token form localStorage
		redirect to /

update profile
	email*, password*, role*
make update profile button on my profile when clicked change link to admin/profile-update 
	route admin/profile-update  UpdateProfile
	UpdateProfile
		make a form
		button => Update (hit api)
		for data populate=> get myProfile api on page load and set data


update password
	link => admin/updata-password
	route=> admin/update-password => UpdatePassword
	UpdatePassword	
		make a form for old and new password
		button => Update (hit api)
		success => logout (remove token from localstorage)
		redirect to login page
*/

// forget password
/*
    forget password (button) click ('/admin/forget-password')
    component ('/admin/forget-password) AdminForgetPassword
    AdminForgotPassword
        email
*/

// reset password
/* 
  route /reset-password => AdminResetPassword
  AdminResetPassword
      password
  redirect to /admin/login
*/
// Note: navigate is inside a button click or inside useEffect
