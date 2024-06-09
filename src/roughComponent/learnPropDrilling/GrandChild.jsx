import React, { useContext } from "react";
import { Context1, Context2 } from "../../App1";

const GrandChild = (props) => {
  let value = useContext(Context1);
  let value2 = useContext(Context2);

  return (
    <div>
      Grand Child <br />
      name is {value.name}
      <br />
      age is {value.age}
      <br />
      address is {value2.address}
      <br />
      <button onClick={(e) => value.setName("Luffy")}>Change Name</button>
    </div>
  );
};

export default GrandChild;
