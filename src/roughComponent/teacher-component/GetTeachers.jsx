import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const GetTeachers = () => {
  let [teachers, setTeachers] = useState([]);
  let navigate = useNavigate();
  const getAllTeachers = async () => {
    try {
      let teachers = await axios({
        url: "http://localhost:8000/teacher",
        method: "GET",
      });
      setTeachers(teachers.data.result);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getAllTeachers();
  }, []);

  const handleView = (item) => {
    return (e) => {
      navigate(`/teachers/${item._id}`);
      console.log(item);
    };
  };
  const handleDelete = (item) => {
    return async (e) => {
      try {
        await axios({
          url: `http://localhost:8000/teacher/${item._id}`,
          method: "delete",
        });
        getAllTeachers();
        toast.success("teacher account deleted successfully");
      } catch (error) {
        console.log(error);
      }
    };
  };
  return (
    <div>
      {teachers.map((item, i) => {
        return (
          <div
            key={i}
            style={{ border: "solid red 3px", marginBottom: "20px" }}
          >
            <p>teacher name is {item.name}</p>
            <button onClick={handleView(item)}>View</button>
            <button>Edit</button>
            <button onClick={handleDelete(item)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default GetTeachers;
