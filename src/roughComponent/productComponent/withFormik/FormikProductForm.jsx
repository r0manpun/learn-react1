import { Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";
import FormikInput from "../../../Formik/FormikInput";
import FormikTextArea from "../../../Formik/FormikTextArea";
import FormikCheckBox from "../../../Formik/FormikCheckBox";

const FormikProductForm = ({
  buttonName = "Create",
  handleSubmit = () => {},
  product = {},
}) => {
  // let initialValuesOptions = {
  //   name: "",
  //   price: "",
  //   description: "",
  //   quantity: "",
  //   isAvailable: false,
  //   productImage: "",
  // };

  let initialValuesOptions = {
    name: product.name || "",
    price: product.price || "",
    description: product.description || "",
    quantity: product.quantity || "",
    isAvailable: product.isAvailable || false,
    productImage: product.productImage || "",
  };
  
  const schemaValidation = yup.object({
    name: yup.string().required("name is required"),
    price: yup.number().required("price is required"),
    description: yup.string().required("description is required"),
    quantity: yup.number().required("quantity is required"),
    productImage: yup.string(),
    isAvailable: yup.boolean(),
  });

  return (
    <Formik
      initialValues={initialValuesOptions}
      onSubmit={handleSubmit}
      validationSchema={schemaValidation}
      enableReinitialize={true}
    >
      {(formik) => {
        return (
          <Form>
            <FormikInput
              name="name"
              label="Product Name"
              type="text"
              onChange={(e) => {
                formik.setFieldValue("name", e.target.value);
              }}
              placeholder="product name"
              required={true}
            />
            <FormikInput
              name="price"
              label="Price"
              type="number"
              onChange={(e) => {
                formik.setFieldValue("price", e.target.value);
              }}
              required={true}
            />
            <FormikInput
              name="quantity"
              label="Quantity"
              type="number"
              onChange={(e) => {
                formik.setFieldValue("quantity", e.target.value);
              }}
              required={true}
            />
            <FormikTextArea
              name="description"
              label="Description"
              type="text"
              onChange={(e) => {
                formik.setFieldValue("description", e.target.value);
              }}
              placeholder="description"
              required={true}
            />
            <FormikCheckBox
              name="isAvailable"
              label="isAvailable"
              onChange={(e) => {
                formik.setFieldValue("isAvailable", e.target.checked);
              }}
            />
            <FormikInput
              name="productImage"
              label="Product Image"
              type="text"
              onChange={(e) => {
                formik.setFieldValue("productImage", e.target.value);
              }}
            />
            <button type="submit">{buttonName}</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikProductForm;
