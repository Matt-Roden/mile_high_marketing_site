import React from "react";
import { Link } from "react-router-dom";

const GetStartedButton = () => {
  return (
    <Link to="/get-started" target="_blank">
      <button className="rounded-md bg-transparent border-2 border-purple-600 sm:w-72 w-32 py-3 text-lg font-semibold text-purple-500 shadow-sm hover:bg-purple-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 cursor-pointer transition duration-500">
        Get started
      </button>
    </Link>
  );
};

export default GetStartedButton;
