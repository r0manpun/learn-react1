import { useNavigate } from "react-router-dom";
import { hitApi } from "../../../services/hitapi";
import FormikProductForm from "./FormikProductForm";
// prettierignore

const CreateProduct = () => {
  let navigate = useNavigate();
  const handleSubmit = async (values, other) => {
    //hit api
    try {
      let newProduct = await hitApi({
        method: "post",
        data: values,
      });
      navigate("/products");
      console.log(newProduct.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormikProductForm
      buttonName="Create Product"
      handleSubmit={handleSubmit}
    />
    // <Formik
    //   initialValues={initialValuesOptions}
    //   onSubmit={handleSubmit}
    //   validationSchema={schemaValidation}
    //   enableReinitialize={true}
    // >
    //   {(formik) => {
    //     return (
    //       <Form>
    //         <FormikInput
    //           name="name"
    //           label="Product Name"
    //           type="text"
    //           onChange={(e) => {
    //             formik.setFieldValue("name", e.target.value);
    //           }}
    //           placeholder="product name"
    //           required={true}
    //         />
    //         <FormikInput
    //           name="price"
    //           label="Price"
    //           type="number"
    //           onChange={(e) => {
    //             formik.setFieldValue("price", e.target.value);
    //           }}
    //           required={true}
    //         />
    //         <FormikInput
    //           name="quantity"
    //           label="Quantity"
    //           type="number"
    //           onChange={(e) => {
    //             formik.setFieldValue("quantity", e.target.value);
    //           }}
    //           required={true}
    //         />
    //         <FormikTextArea
    //           name="description"
    //           label="Description"
    //           type="text"
    //           onChange={(e) => {
    //             formik.setFieldValue("description", e.target.value);
    //           }}
    //           placeholder="description"
    //           required={true}
    //         />
    //         <FormikCheckBox
    //           name="isAvailable"
    //           label="isAvailable"
    //           onChange={(e) => {
    //             formik.setFieldValue("isAvailable", e.target.checked);
    //           }}
    //         />
    //         <FormikInput
    //           name="productImage"
    //           label="Product Image"
    //           type="text"
    //           onChange={(e) => {
    //             formik.setFieldValue("productImage", e.target.value);
    //           }}
    //         />
    //         <button type="submit">Submit</button>
    //       </Form>
    //     );
    //   }}
    // </Formik>
  );
};

export default CreateProduct;
