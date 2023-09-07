import React from "react";
import { Link } from "react-router-dom";

const GetStartedButton = () => {
  return (
    <Link to="/get-started" target="_blank">
      <button className="rounded-md bg-blue-600 sm:w-52 w-32 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 cursor-pointer">
        Get started
      </button>
    </Link>
  );
};

export default GetStartedButton;
