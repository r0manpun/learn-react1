import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const AdminVerify = () => {
  let [query] = useSearchParams();
  let token = query.get("token");

  let navigate = useNavigate();

  let verifyAccount = () => {
    try {
      let result = axios({
        url: "http://localhost:8000/admin/verify-account",
        method: "patch",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/admin/login");
    } catch (error) {}
  };

  useEffect(() => {
    verifyAccount();
  }, []);

  return <div>Admin Verified</div>;
};

export default AdminVerify;
