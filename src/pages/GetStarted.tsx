import React, { useState } from "react";
import EmailForm from "../components/EmailForm";
import Confetti from "react-confetti";

const GetStarted = () => {
  const [dropConfetti, setDropConfetti] = useState(false);
  return (
    <div className="bg-cover h-screen p-4 sm:p-12 bg-[#EBEDEF]">
      {dropConfetti && (<><Confetti recycle={false} numberOfPieces={1000} /><div className=" text-center text-3xl mt-20">We're so excited to connect with you soon!</div></>)}
      {!dropConfetti && (
        <div className="glass-container-email relative mx-auto">
          <EmailForm setDropConfetti={setDropConfetti} />
        </div>
      )}
    </div>
  );
};

export default GetStarted;
