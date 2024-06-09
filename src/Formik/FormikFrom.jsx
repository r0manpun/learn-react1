import { Field, Form, Formik } from "formik";
import * as yup from "yup";
import React from "react";
import FormikInput from "./FormikInput";
import FormikTextArea from "./FormikTextArea";
import FormikSelect from "./FormikSelect";
import FormikRadio from "./FormikRadio";
import FormikCheckBox from "./FormikCheckBox";

// prettierignore
const countryOptions = [
  { label: "Select Country", value: "", disabled: true },
  { label: "Nepal", value: "nepal", disabled: false },
  { label: "China", value: "china", disabled: false },
  { label: "India", value: "india", disabled: true },
  { label: "America", value: "usa", disabled: false },
  { label: "UK", value: "uk", disabled: false },
  { label: "Spain", value: "spain", disabled: true },
];

// prettierignore
const genderOptions = [
  { label: "Male", value: "male" },
  { label: "Female", value: "female" },
  { label: "Other", value: "other" },
];

const FormikFrom = () => {
  let initialValuesOptions = {
    firstName: "",
    lastName: "",
    description: "",
    country: "",
    gender: "",
    isMarried: false,
  };

  const schemaValidation = yup.object({
    firstName: yup.string().required("firstname is required"),
    lastName: yup.string().required("lastname is required"),
    description: yup.string().required("description is required"),
  });

  const handleSubmit = (value, other) => {
    console.log(value);
  };
  // Each Field has three thing
  // value
  // error
  // touche
  return (
    <Formik
      initialValues={initialValuesOptions}
      onSubmit={handleSubmit}
      validationSchema={schemaValidation}
    >
      {(formik) => {
        return (
          <Form>
            {/* 
            <Field name="firstName">
              {({ field, form, meta }) => {
                return (
                  <div>
                    <label htmlFor="firstName">First Name</label>
                    <input
                      {...field} // needed so that it will only show error for touched fields only
                      id="firstName"
                      type="text"
                      value={meta.value}
                      //   onChange={(e) =>
                      //     formik.setFieldValue("firstName", e.target.value)
                      //   }
                      onChange={field.onChange}
                    ></input>
                    {meta.touched && meta.error ? (
                      <div style={{ color: "red" }}>{meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
            <Field name="lastName">
              {({ field, form, meta }) => {
                return (
                  <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      {...field}
                      id="lastName"
                      type="text"
                      value={meta.value}
                      onChange={(e) =>
                        formik.setFieldValue("lastName", e.target.value)
                      }
                    ></input>
                    {meta.touched && meta.error ? (
                      <div style={{ color: "red" }}>{meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </Field>
            <Field name="description">
              {({ field, form, meta }) => {
                return (
                  <div>
                    <label htmlFor="desc">Description</label>
                    <textarea
                      {...field}
                      id="desc"
                      value={meta.value}
                      onChange={(e) =>
                        formik.setFieldValue("description", e.target.value)
                      }
                    ></textarea>
                    {meta.touched && meta.error ? (
                      <div style={{ color: "red" }}>{meta.error}</div>
                    ) : null}
                  </div>
                );
              }}
            </Field> */}
            <FormikInput
              name="firstName"
              label="First Name"
              type="text"
              onChange={(e) => {
                formik.setFieldValue("firstName", e.target.value);
              }}
              placeholder="FirstName"
              style={{ backgroundColor: "green" }}
              required={true}
            />
            <FormikInput
              name="lastName"
              label="Last Name"
              type="text"
              onChange={(e) => {
                formik.setFieldValue("lastName", e.target.value);
              }}
              placeholder="LastName"
              required={true}
            />
            {/* <FormikInput name="email" label="Email" type="email" /> */}
            <FormikInput
              name="password"
              label="Password"
              type="password"
              onChange={(e) => {
                formik.setFieldValue("password", e.target.value);
              }}
              placeholder="password"
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
            <FormikSelect
              name="coutry"
              label="Country"
              onChange={(e) => {
                formik.setFieldValue("country", e.target.value);
              }}
              required={true}
              options={countryOptions}
            />
            <FormikRadio
              name="gender"
              label="Gender"
              onChange={(e) => {
                formik.setFieldValue("gender", e.target.value);
              }}
              required={true}
              options={genderOptions}
            />
            <FormikCheckBox
              name="isMarried"
              label="Is Married"
              onChange={(e) => {
                formik.setFieldValue("isMarried", e.target.checked);
              }}
              required={true}
            />
            <button type="submit">Submit</button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikFrom;
