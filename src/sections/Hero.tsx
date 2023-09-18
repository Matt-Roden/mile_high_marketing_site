import GetStartedButton from "../components/GetStartedButton";
import mile_high_icon from "../assets/mile_high_icon_poppins.png";

const CallToActionBox = () => {
  return (
    <div className=" sm:w-1/2  sm:px-16">
      <div className=" text-center sm:text-start">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight sm:text-6xl text-white">
          Your <span className="text-purple-600">soundtrack</span> awaits.
        </h1>
        <p className="mt-6 mb-8 text-xl leading-8 text-gray-300 ">
          Every event deserves the best. Let's make it resonate.
        </p>
        <GetStartedButton />
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className=" bg-black flex flex-col sm:flex-row justify-center items-center w-full px-5 pb-6">
      <img
        className=" px-10 sm:order-last"
        src={mile_high_icon}
        alt="company logo"
      />
      ;
      <CallToActionBox />
    </div>
  );
};

export default Hero;
