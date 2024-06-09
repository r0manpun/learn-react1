import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-quill/dist/quill.snow.css";
import ProductForm from "./ProductForm";
import Dropzone from "react-dropzone";

const UpdateProduct = () => {
  let initialValues = {
    name: "",
    price: "",
    description: "",
    quantity: "",
    isAvailable: false,
    productImage: "",
  };

  let [data, setData] = useState(initialValues);
  let params = useParams();
  let navigate = useNavigate();

  let getProductDetails = async () => {
    try {
      let result = await axios({
        url: `http://localhost:8000/product/${params.id}`,
        method: "GET",
      });
      let data = result.data.result;

      setData({
        name: data.name,
        price: data.price,
        quantity: data.quantity,
        description: data.description,
        isAvailable: data.isAvailable,
        productImage: data.productImage, /// update
      });
    } catch (error) {}
  };

  useEffect(() => {
    getProductDetails();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // HIT API CALL
    try {
      let result = await axios({
        url: `http://localhost:8000/product/${params.id}`,
        method: "patch",
        data: data,
      });
      navigate("/products");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    // <ProductForm
    //   handlSubmit={handleSubmit}
    //   data={data}
    //   setData={setData}
    //   buttonName="Update"
    // />
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name </label>
          <input
            type="text"
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div>
          <label>Price </label>
          <input
            type="number"
            value={data.price}
            onChange={(e) => setData({ ...data, price: e.target.value })}
          />
        </div>
        <div>
          <label>Quantity </label>
          <input
            type="number"
            value={data.quantity}
            onChange={(e) => setData({ ...data, quantity: e.target.value })}
          />
        </div>
        <div>
          <label>Description </label>
          <ReactQuill
            type="text"
            value={data.description}
            onChange={(value) =>
              setData((prevData) => {
                return { ...prevData, description: value };
              })
            }
          />
        </div>
        <div>
          <label htmlFor="isAvailable">isAvailable </label>
          <input
            id="isAvailable"
            type="checkbox"
            checked={data.isAvailable}
            onChange={(e) =>
              setData({ ...data, isAvailable: e.target.checked })
            }
          />
        </div>
        <div>
          <label>Product Image</label>
          <Dropzone
            onDrop={async (acceptedFiles) => {
              let data = new FormData();
              data.append("docs", acceptedFiles[0]);
              try {
                let result = await axios({
                  url: "http://localhost:8000/file/single",
                  method: "post",
                  data: data,
                });
                console.log(result.data.result);
                setData((prevData) => ({
                  ...prevData,
                  productImage: result.data.result,
                }));
              } catch (error) {
                console.log(error);
              }
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <p style={{ cursor: "pointer", userSelect: "none" }}>
                    Drag 'n' drop some files here, or click to select files
                  </p>
                  {data.productImage ? (
                    <img src={data.productImage} style={{ width: "10rem" }} />
                  ) : null}
                </div>
              </section>
            )}
          </Dropzone>
        </div>
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default UpdateProduct;
