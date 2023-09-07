import React, { useState, useEffect } from "react";
import GetStartedButton from "./GetStartedButton";

const Nav = ({ showNavbar }) => {

  return (
    <header className={`${showNavbar ? "hide" : "show"}  fixed top-0 p-5 bg-black text-white w-full flex sm:justify-between border-2 border-red-500`}>
      Nav!!! ----- 🪩
      <GetStartedButton />
    </header>
  );
};

export default Nav;
