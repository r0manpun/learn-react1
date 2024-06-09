import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { hitApi } from "../../services/hitapi";

const GetProductDetails = () => {
  let params = useParams();
  let navigate = useNavigate();

  let [product, setProduct] = useState({});

  let getProductDetails = async () => {
    try {
      let product = await hitApi({
        url: `/product/${params.id}`,
        method: "get",
      });
      //   console.log(product.data.result);
      setProduct(product.data.result);
    } catch (error) {}
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  const handleUpdate = (item) => {
    return () => {
      navigate(`/products/update/${item._id}`);
    };
  };
  return (
    <div>
      GetProductDetails:
      <p>Product Name : {product.name}</p>
      <p>Product Price : ${product.price}</p>
      <p>Product Quantity : {product.quantity}</p>
      <p>Product Description : {product.description}</p>
      <p>Is product available ? : {product.isAvailable ? "Yes" : "No"}</p>
      <div>
        Product image :
        <div>
          <img
            style={{
              width: "12rem",
              border: "dashed 2px black",
              marginLeft: "20px",
            }}
            src={product.productImage}
          />
        </div>
      </div>
      <button onClick={handleUpdate(product)}>Update</button>
    </div>
  );
};

export default GetProductDetails;
