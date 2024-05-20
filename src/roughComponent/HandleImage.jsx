import React, { useState } from "react";

const HandleImage = () => {
  const [show, setShow] = useState(true);

  const handleShow = (e) => {
    setShow(!show);
  };

  // Q: if image is shown make button name as hide
  //  if image is hidden make button name show
  return (
    <div>
      {show ? <img src="./vite.svg" /> : null}
      <button onClick={handleShow}>
        {show ? "hide" : "show"}
      </button>
    </div>
  );
};

export default HandleImage;
