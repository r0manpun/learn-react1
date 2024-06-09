import React from "react";
import { useSearchParams } from "react-router-dom";

const About = () => {
  const [query] = useSearchParams();
  return (
    <div>
      About Page
      <br />
      {query.get("name")}
      <br />
      {query.get("age")}
      <br />
      {query.get("address")}
    </div>
  );
};

export default About;
