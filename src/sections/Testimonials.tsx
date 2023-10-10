import React from "react";
import testimonial_icon from "../assets/testimonia_icon.png";


const Testimonials = () => {
  return (
    <div className=" mx-auto px-1 sm:p-4 flex flex-wrap w-5/6 sm:w-full">
      <div className=" flex flex-col justify-between p-5 sm:p-20 max-w-2xl my-10 bg-purple-500 shadow-2xl shadow-purple-500/75 mx-auto">
        <img
          src={testimonial_icon}
          alt="testimonial icon - quotes"
          className=" h-20 w-24 mx-auto"
        />
        <p className=" my-10 text-white">
          {" "}
          "The custom audio editing package made all of the special moments even
          better!I couldn't believe how great everything sounded. Mile high was
          easy to work with and left me feeling confident on my wedding day."
        </p>
        <p className=" text-right text-white">
          <em>~ Caitlan Vollmer, wedding Sep. 2022</em>
        </p>
      </div>
      <div className=" flex flex-col justify-between p-5 sm:p-20 max-w-2xl my-10 bg-purple-500 shadow-2xl shadow-purple-500/75 mx-auto">
        <img
          src={testimonial_icon}
          alt="testimonial icon - quotes"
          className=" h-20 w-24 mx-auto"
        />
        <p className=" my-10 text-white">
          {" "}
          "Matt's audio editing and production package streamlined our marketing
          efforts. From concept to execution, working with Matt was a breeze. We
          will definitely use Mile High again."
        </p>
        <p className=" text-right text-white">
          <em>~ Chris Joseph, founder Detroit Dispending Solutions</em>
        </p>
      </div>
      <div className=" flex flex-col justify-between p-5 sm:p-20 max-w-2xl my-10 bg-purple-500 shadow-2xl shadow-purple-500/75 mx-auto">
        <img
          src={testimonial_icon}
          alt="testimonial icon - quotes"
          className=" h-20 w-24 mx-auto"
        />
        <p className=" text-white my-10">
          {" "}
          "Their DJ services are top notch. Matt always comes prepared and
          brought the best music, ensuring people had a great time and stuck
          around longer. He is always flexible when we had themed nights, took
          requests, and is a great MC! I wish he was still in the Detroit area!"
        </p>
        <p className=" text-right text-white">
          <em>~ Khalil Heron, Manager: Stache International - Detroit, MI</em>
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
