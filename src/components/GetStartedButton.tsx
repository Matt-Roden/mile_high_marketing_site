import React from "react";
import { Link } from "react-router-dom";

const GetStartedButton = () => {
  return (
    <div className="mt-10 flex items-center justify-center sm:justify-start gap-x-6">
      <Link to="/get-started">
        <button className="rounded-md bg-blue-600 w-52 py-3 text-lg font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
          Get started
        </button>
      </Link>
    </div>
  );
};

export default GetStartedButton;
