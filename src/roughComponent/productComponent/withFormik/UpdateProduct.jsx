import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormikProductForm from "./FormikProductForm";
import { hitApi } from "../../../services/hitapi";
// prettierignore

const UpdateProduct = () => {
  let params = useParams();
  let navigate = useNavigate();
  let [product, setProduct] = useState({});

  let getProduct = async () => {
    try {
      let result = await hitApi({
        url: `/product/${params.id}`,
        method: "get",
      });
      setProduct(result.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  const handleSubmit = async (values, other) => {
    // hit api
    try {
      await hitApi({
        method: "patch",
        url: `/product/${params.id}`,
        data: values,
      });
      navigate(`/products/${params.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormikProductForm
      buttonName="Update Produce"
      handleSubmit={handleSubmit}
      product={product}
    />
  );
};

export default UpdateProduct;
