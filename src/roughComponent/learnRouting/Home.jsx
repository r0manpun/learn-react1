import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    // navigate(-1); goes back to the previous page
    // navigate("/contact");
    navigate("/contact", { replace: true }); // replaces the current path  with the path of /contact
  };
  return (
    <div>
      Home Page
      <button onClick={handleClick}>go to contact</button>
    </div>
  );
};

export default Home;
