import { Field } from "formik";
import React from "react";

const FormikInput = ({ name, label, type, onChange, required, ...props }) => {
  //   const onChange = onChange ? onChange : field.onChange;

  return (
    <div>
      <Field name={name}>
        {({ field, form, meta }) => {
          return (
            <div>
              <label htmlFor={name}>
                {label} {required && <span style={{ color: "red" }}>*</span>}
              </label>
              <input
                {...field} // needed so that it will only show error for touched fields only
                {...props} // to pass the props inside the input tag
                id={name}
                type={type}
                value={meta.value}
                //   onChange={(e) =>
                //     formik.setFieldValue("firstName", e.target.value)
                //   }
                //   onChange={field.onChange}
                onChange={onChange ? onChange : field.onChange}
              ></input>
              {meta.touched && meta.error ? (
                <div style={{ color: "red" }}>{meta.error}</div>
              ) : null}
            </div>
          );
        }}
      </Field>
    </div>
  );
};

export default FormikInput;
