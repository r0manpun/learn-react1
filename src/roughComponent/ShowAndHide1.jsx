import React, { useState } from "react";

const ShowAndHide1 = () => {
  const [show, setShow] = useState(true);

  //   const handleShow = () => {
  //     setShow(true);
  //   };

  //   const handleHide = () => {
  // 	  setShow(false);
  //   };

  const handleShow = (value) => {
    return () => {
      setShow(value);
    };
  };
  return (
    <div>
      {show ? <h1>Hello Roman</h1> : null}
      <button onClick={handleShow(true)}>Show</button>
      <button onClick={handleShow(false)}>Hide</button>
    </div>
  );
};

export default ShowAndHide1;
