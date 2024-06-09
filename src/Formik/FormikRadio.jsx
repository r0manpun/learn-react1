import { Field } from "formik";
import React from "react";

const FormikRadio = ({
  name,
  label,
  onChange,
  options,
  required,
  ...props
}) => {
  return (
    <div>
      <Field name={name}>
        {({ field, form, meta }) => {
          return (
            <div>
              <label htmlFor={name}>
                {label} {required && <span style={{ color: "red" }}>*</span>}
              </label>
              {options.map((item, i) => {
                return (
                  <span key={i}>
                    <label htmlFor={item.value}>{item.label}</label>
                    <input
                      {...field}
                      {...props}
                      id={item.value}
                      type="radio"
                      value={item.value}
                      checked={meta.value === item.value}
                      onChange={onChange ? onChange : field.onChange}
                    />
                  </span>
                );
              })}
            </div>
          );
        }}
      </Field>
    </div>
  );
};

export default FormikRadio;
