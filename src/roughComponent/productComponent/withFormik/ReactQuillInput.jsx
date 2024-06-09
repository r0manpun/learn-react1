import { Field } from "formik";
import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const ReactQuillInput = ({
  name,
  label,
  onChange,
  required,
  type,
  ...props
}) => {
  return (
    <div>
      <label htmlFor={name}>
        {label} {required && <span style={{ color: "red" }}>* </span>}
      </label>
      <ReactQuill
        {...props}
        id={name}
        value={name}
        onChange={onChange}
      ></ReactQuill>
    </div>
  );
};

export default ReactQuillInput;
