import React from "react";
import dj_icon from "../assets/dj_icon.png";
import audio_editing_icon from "../assets/audio_editing_icon.png";
import karaoke_icon from "../assets/karaoke_icon.png";

const Services = () => {
  return (
    <div className="bg-white mx-20 h-screen">
      <div className=" flex flex-col justify-center items-center space-y-20 h-full">
        <div>
          <h1 className=" text-6xl">Services</h1>
        </div>

        <div className=" w-full h-1/2 flex justify-around space-x-10 px-5">
          <div className=" w-1/3  flex flex-col justify-around items-center space-y-5">
            <img
              src={dj_icon}
              className=" h-40"
              alt="full djing service icon"
            />
            <h2 className=" text-2xl ">Full Service DJing</h2>
            <p className=" w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
          </div>

          <div className=" w-1/3  flex flex-col justify-around items-center space-y-5">
            <img
              src={audio_editing_icon}
              className=" h-40"
              alt="audio editing service icon"
            />
            <h2 className=" text-2xl">Custom audio editing</h2>
            <p className=" w-3/4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip
            </p>
          </div>

          <div className=" w-1/3  flex flex-col justify-around items-center space-y-5">
            <img
              src={karaoke_icon}
              className=" h-40"
              alt="karaoke and trivia service icon"
            />
            <h2 className=" text-2xl">Karaoke & Trivia</h2>
            <p className=" w-3/4">
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
