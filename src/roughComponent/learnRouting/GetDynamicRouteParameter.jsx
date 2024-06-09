import React from "react";
import {
  useNavigation,
  useParams,
  useSearchParams,
} from "react-router-dom";

// useParams() - to get dynamic route parameter
// useSearchParams() - to get query parameter
// useNavigation() - to change path onClick event

const GetDynamicRouteParameter = () => {
  const params = useParams();

  return (
    <>
      <div>GetDynamicRouteParameter</div>
      {params.id1}
      <br />
      {params.id2}
    </>
  );
};

export default GetDynamicRouteParameter;
