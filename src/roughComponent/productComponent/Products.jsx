import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import swal from "sweetalert";
import { hitApi } from "../../services/hitapi";

const Products = () => {
  let [products, setProducts] = useState([]);
  let navigate = useNavigate();

  //hit api
  let getProducts = async () => {
    try {
      const result = await hitApi({
        url: "/product",
        method: "get",
      });
      setProducts(result.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // set data to products

  // handle click
  const handleView = (item) => {
    return () => {
      navigate(`/products/${item._id}`);
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
          swal("Proof! product has been deleted!", { icon: "success" });
          try {
            let result = await hitApi({
              url: `/product/${item._id}`,
              method: "delete",
            });
            // invalidation
            getProducts();

            toast.success(result.data.message);
          } catch (error) {
            console.log(error);
          }
        } else {
          swal("user is not deleted");
        }
      });
    };
  };

  const handleUpdate = (item) => {
    return () => {
      navigate(`/products/update/${item._id}`);
    };
  };

  return (
    <div>
      {products.reverse().map((item, i) => {
        return (
          <div
            key={i}
            style={{ border: "solid red 3px", marginBottom: "20px" }}
          >
            <p>product name is {item.name}</p>
            {/* <p>product price is {item.price}</p>
            <p>product quantity is {item.quantity}</p>
            <p>product description : {item.description}</p>
            <p>product isAvailable?: {item.isAvailable ? "Yes" : "NO"}</p> */}
            <button onClick={handleView(item)}>View</button>
            <button onClick={handleUpdate(item)}>Edit</button>
            <button onClick={handleDelete(item)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
