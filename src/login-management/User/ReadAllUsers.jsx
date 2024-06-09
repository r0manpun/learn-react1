import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

const ReadAllUsers = () => {
  let [users, setUsers] = useState([]);
  let navigate = useNavigate();

  let token = localStorage.getItem("token");
  //hit api
  let getAllUsers = async () => {
    try {
      const result = await axios({
        url: "http://localhost:8000/user",
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setUsers(result.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  // set data to users

  // handle click
  const handleView = (item) => {
    return () => {
      navigate(`/users/${item._id}`);
    };
  };

  const handleDelete = (item) => {
    return async () => {
      swal({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then(async (willDelete) => {
        if (willDelete) {
          try {
            swal("Proof! User has been deleted!", { icon: "success" });
            let result = await axios({
              url: `http://localhost:8000/user/${item._id}`,
              method: "delete",
              headers: {
                Authorization: `Bearer ${token}`,
              },
            });
            // invalidation
            getAllUsers();

            toast.success(result.data.message);
          } catch (error) {}
        } else {
          swal("user is not deleted");
        }
      });
    };
  };

  const handleUpdate = (item) => {
    return () => {
      navigate(`/users/update/${item._id}`);
    };
  };

  return (
    <div>
      {users.map((item, i) => {
        return (
          <div
            key={i}
            style={{ border: "solid red 3px", marginBottom: "20px" }}
          >
            <p>User name is {item.fullname}</p>
            <button onClick={handleView(item)}>View</button>
            <button onClick={handleUpdate(item)}>Edit</button>
            <button onClick={handleDelete(item)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default ReadAllUsers;
