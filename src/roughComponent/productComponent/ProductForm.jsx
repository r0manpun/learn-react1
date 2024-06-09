import axios, { formToJSON } from "axios";
import React from "react";
import Dropzone from "react-dropzone";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ProductForm = ({ data, setData, handleSubmit, buttonName }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name </label>
          <input
            type="text"
            value={data.name}
            // onChange={(e) => setName(e.target.value)}
            onChange={(e) => setData({ ...data, name: e.target.value })}
          />
        </div>
        <div>
          <label>Price </label>
          <input
            type="number"
            value={data.price}
            // onChange={(e) => setPrice(e.target.value)}
            onChange={(e) => setData({ ...data, price: e.target.value })}
          />
        </div>
        <div>
          <label>Quantity </label>
          <input
            type="number"
            value={data.quantity}
            // onChange={(e) => setQuantity(e.target.value)}
            onChange={(e) => setData({ ...data, quantity: e.target.value })}
          />
        </div>
        <div>
          <label>Description </label>
          <ReactQuill
            type="text"
            value={data.description}
            // onChange={(e) => setDescription(e.target.value)}
            onChange={(value) =>
              setData((prevData) => {
                return { ...prevData, description: value };
              })
            }
          ></ReactQuill>
        </div>
        <div>
          <label htmlFor="isAvailable">isAvailable </label>
          <input
            id="isAvailable"
            type="checkbox"
            checked={data.isAvailable}
            // onChange={(e) => setIsAvailable(e.target.checked)}
            onChange={(e) =>
              setData({ ...data, isAvailable: e.target.checked })
            }
          />
        </div>
        <div>
          <label>Product Image</label>
          <Dropzone
            onDrop={async (acceptedFiles) => {
              let formData = new FormData();
              formData.append("docs", acceptedFiles[0]);
              try {
                let result = await axios({
                  url: "http://localhost:8000/file/single",
                  method: "post",
                  data: formData,
                });
                console.log(result);
                // setData((prevData) => ({
                //   ...prevData,
                //   productImage: result.data.result,
                // }));
                setData({ ...data, productImage: result.data.result });
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
        <button type="submit">{buttonName}</button>
      </form>
    </>
  );
};

export default ProductForm;
