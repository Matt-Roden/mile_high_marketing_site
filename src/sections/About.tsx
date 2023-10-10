import React from "react";
import "./About.css";
import dj_handles_purples from "../assets/dj_hands_purples.jpg";
import GetStartedButton from "../components/GetStartedButton";

const AboutText = () => {
  return (
    <div className="about-section p-4 space-y-6 sm:px-20">
      <h2 className="text-2xl font-bold">About Mile High Music & Events</h2>
      <p className="text-base">
        At Mile High Music & Events, we believe in the power of music and
        seamless event coordination to elevate experiences. Nestled in the heart
        of Colorado's Front Range, our passion resonates in every beat we play
        and every event we're a part of.
      </p>

      <p className="text-base font-semibold">What sets us apart?</p>
      <ul className="list-decimal pl-5 space-y-3">
        <li className="text-base">
          <strong>Value Beyond Music:</strong> Our services are not just about
          playing tracks; it's about understanding the soul of your event. We
          help curate the ideal soundtrack and atmosphere, ensuring your event
          remains memorable for all your guests. Whether it's a wedding,
          corporate gathering, or any special occasion, we've got the perfect
          tune for every moment.
        </li>
        <li className="text-base">
          <strong>Custom Audio Edits:</strong> To give your event a personal
          touch, we offer custom audio edits, molding the music to fit the
          essence of your celebration. Whether it's a special song for your
          first dance or producing a custom edit to make the special moments even
          better, we craft it with precision.
        </li>
        <li className="text-base">
          <strong>Professionalism at its Peak:</strong> Entrusting your event's
          music and coordination to us means you're choosing seasoned experts
          who respect timelines, cater to preferences, and commit to impeccable
          sound quality. Our team knows how to handle situations with
          professionalism, ensuring your event flows smoothly.
        </li>

        <li className="text-base">
          <strong>End-to-End Event Services:</strong> Beyond music, our event
          expertise ensures every detail is looked after. From the initial
          planning stages to the event's culmination, we work side by side with
          you, making sure everything aligns with your vision and everything is
          sounding just right.
        </li>
      </ul>
      <p className="text-base">
        Choose Mile High Music & Events, and let us infuse life, energy, and
        professionalism into your special occasions. Your soundtrack awaits, and
        with it, an event that echoes in memories long after the last note
        fades.
      </p>
      <div className=" ">
        <GetStartedButton />
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div
      style={{ backgroundImage: `url(${dj_handles_purples})` }}
      className="bg-cover bg-center min-h-96 p-4 sm:p-12"
    >
      <div className="glass-container relative">
        <AboutText />
      </div>
    </div>
  );
};

export default About;
