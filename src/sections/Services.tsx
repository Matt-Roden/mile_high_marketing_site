import React from "react";
import dj_icon from "../assets/dj_icon.png";
import audio_editing_icon from "../assets/audio_editing_icon.png";
import karaoke_icon from "../assets/karaoke_icon.png";

const Services = () => {
  return (
    <div className=" sm:mx-20">
      <div className=" flex flex-col justify-center items-center sm:space-y-15 h-full"> 
        <div>
          <h1 className=" text-6xl my-8">Services</h1>
        </div>

        <div className="  flex flex-col sm:flex-row justify-center sm:justify-around sm:space-x-5 px-5 ">

          <div className="  sm:w-1/3 flex flex-col items-start space-y-4 py-4">
            <img
              src={dj_icon}
              className=" h-11"
              alt="full djing service icon"
            />
            <h2 className=" text-2xl ">Full Service DJing</h2>
            <p className=" sm:w-3/4 w-full">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
          </div>

          <div className="  sm:w-1/3 flex flex-col items-start space-y-4 py-4">
            <img
              src={audio_editing_icon}
              className=" h-11"
              alt="audio editing service icon"
            />
            <h2 className=" text-2xl">Custom audio editing</h2>
            <p className=" sm:w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
          </div>

          <div className="  sm:w-1/3 flex flex-col items-start space-y-4 py-4">
            <img
              src={karaoke_icon}
              className=" h-11"
              alt="karaoke and trivia service icon"
            />
            <h2 className=" text-2xl">Karaoke & Trivia</h2>
            <p className=" sm:w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
