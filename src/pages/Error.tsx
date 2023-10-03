import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div>Oops! Something went wrong. Please try again</div>
      <Link to="/">Go Home</Link>
    </>
  );
};

export default Error;
