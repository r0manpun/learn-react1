import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const TeacherDetails = () => {
  let params = useParams();

  let [teacher, setTeacher] = useState([]);
  let getTeacherDetails = async () => {
    try {
      let teacher = await axios({
        url: `http://localhost:8000/teacher/${params.id}`,
        method: "get",
      });
      console.log(teacher);
      setTeacher(teacher.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTeacherDetails();
  }, []);
  return (
    <div>
      Get Teacher Details:
      <p>Teacher Name : {teacher.name}</p>
      <p>Teacher address : {teacher.address}</p>
      <p>
        Teacher profileImage :
        <img src={teacher.profileImage} style={{ width: "80px" }}></img>
      </p>
    </div>
  );
};

export default TeacherDetails;
