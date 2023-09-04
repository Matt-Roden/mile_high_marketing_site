import React from "react";
import ReviewCard from "../components/ReviewCard";
import testimonial_icon from "../assets/testimonia_icon.png";

const review_cards_info = [
  {
    quote:
      "The custom audio editing package made all of the special moments even better!",
    reviewer: "Caitlan Vollmer, wedding Sep. 2022",
  },
  {
    quote:
      "Matt's audio editing and production package streamlined our marketing efforts. We would definitely use Mile High Again Music.",
    reviewer: "Chris Joseph, founder Detroit Dispending Solutions",
  },
];

const Testimonials = () => {
  return (
    <div className="bg-white md:mx-20 h-screen">
      <div className=" flex flex-col justify-center items-center sm:flex-row sm:justify-around space-y-20 h-full ">
        {review_cards_info.map((card, index) => {
          return <ReviewCard 
            icon_source={testimonial_icon}
            quote={card.quote}
            reviewer={card.reviewer}
          />;
        })}
      </div>
    </div>
  );
};

export default Testimonials;