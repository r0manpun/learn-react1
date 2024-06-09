import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import ProductForm from "./ProductForm";

const CreateProducts = () => {
  // let [name, setName] = useState("");
  // let [price, setPrice] = useState("");
  // let [quantity, setQuantity] = useState("");
  // let [description, setDescription] = useState("");
  // let [isAvailable, setIsAvailable] = useState(false);
  let initialValues = {
    name: "",
    price: "",
    description: "",
    quantity: "",
    isAvailable: false,
    productImage: "",
  };

  let [data, setData] = useState(initialValues);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // HIT API CALL
    console.log(data);
    try {
      let result = await axios({
        url: "http://localhost:8000/product",
        method: "POST",
        data: data,
      });
      console.log(data);

      setData(initialValues);

      // Show toast message
      //   toast("Product created successfully!!");
      toast.success(result.data.message);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    // <>
    //   <form onSubmit={handlSubmit}>
    //     <div>
    //       <label>Name </label>
    //       <input
    //         type="text"
    //         value={data.name}
    //         // onChange={(e) => setName(e.target.value)}
    //         onChange={(e) => setData({ ...data, name: e.target.value })}
    //       />
    //     </div>
    //     <div>
    //       <label>Price </label>
    //       <input
    //         type="number"
    //         value={data.price}
    //         // onChange={(e) => setPrice(e.target.value)}
    //         onChange={(e) => setData({ ...data, price: e.target.value })}
    //       />
    //     </div>
    //     <div>
    //       <label>Quantity </label>
    //       <input
    //         type="number"
    //         value={data.quantity}
    //         // onChange={(e) => setQuantity(e.target.value)}
    //         onChange={(e) => setData({ ...data, quantity: e.target.value })}
    //       />
    //     </div>
    //     <div>
    //       <label>Description </label>
    //       <input
    //         type="text"
    //         value={data.description}
    //         // onChange={(e) => setDescription(e.target.value)}
    //         onChange={(e) => setData({ ...data, description: e.target.value })}
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="isAvailable">isAvailable </label>
    //       <input
    //         id="isAvailable"
    //         type="checkbox"
    //         checked={data.isAvailable}
    //         // onChange={(e) => setIsAvailable(e.target.checked)}
    //         onChange={(e) =>
    //           setData({ ...data, isAvailable: e.target.checked })
    //         }
    //       />
    //     </div>
    //     <button type="submit">Submit</button>
    //   </form>
    // </>
    <ProductForm
      buttonName="Submit"
      handleSubmit={handleSubmit}
      data={data}
      setData={setData}
    />
  );
};

export default CreateProducts;
