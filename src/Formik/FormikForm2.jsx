import React from "react";
import FormikInput from "./FormikInput";
import FormikCheckBox from "./FormikCheckBox";
import FormikSelect from "./FormikSelect";
import FormikRadio from "./FormikRadio";
import FormikTextArea from "./FormikTextArea";
import { Form, Formik } from "formik";
import * as yup from "yup";

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
const FormikForm2 = () => {
  const initialValues = {
    fullname: "",
    email: "",
    password: "",
    isMarried: false,
    country: "",
    gender: "",
    description: "",
    phoneNo: "",
    age: 0,
  };

  const validationSchema = yup.object({
    fullname: yup
      .string()
      .required("fullname is required")
      .min(6, "Must be at least 6 characters")
      .max(15, "Must be at most 15 characters")
      .matches(/^[a-zA-Z ]*$/, "only alphabets and space are allowed"),
    email: yup
      .string()
      .required("email is required")
      .matches(
        /^((?!\.)[\w]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/,
        "please enter valid email"
      ),
    password: yup
      .string()
      .required("passsword is required")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W).{8,20}$/,
        "password must have min 8 and max 20 character, at least on number, uppercase, lowercase and one symbol"
      ),
    country: yup.string().required("country is required"),
    gender: yup.string().required("gender is required"),
    description: yup.string(),
    isMarried: yup.boolean(),
    phoneNo: yup
      .string()
      .required("phone no is required")
      .matches(/^[0-9]+$/, "only number allowed"),
    age: yup
      .number()
      .required("age is required")
      .min(18, "minimum age must be 18"),
  });

  const handleSubmit = (values, other) => {
    console.log(values);
  };
  return (
    <div>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        {(formik) => {
          return (
            <Form>
              <FormikInput
                name="email"
                label="Email"
                type="email"
                required={true}
                placeholder="example@email.com"
              />
              <FormikInput
                name="password"
                label="Password"
                type="password"
                required={true}
                onChange={(e) => {
                  formik.setFieldValue("password", e.target.value);
                }}
                placeholder="password"
              />
              <FormikInput
                name="fullname"
                label="Full Name"
                type="text"
                required={true}
                placeholder="fullname"
              />
              <FormikCheckBox name="isMarried" label="Is Married" />
              <FormikSelect
                name="country"
                label="Country"
                options={countryOptions}
                required={true}
              />
              <FormikRadio
                name="gender"
                label="Gender"
                options={genderOptions}
                required={true}
              />
              <FormikTextArea
                name="description"
                label="Description"
                placeholder="Write no more than 200 characters"
              />
              <FormikInput
                name="phoneNo"
                label="Phone Number"
                type="text"
                required={true}
                placeholder="0123456789"
              />
              <FormikInput
                name="age"
                label="Age"
                type="number"
                required={true}
              />
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default FormikForm2;
