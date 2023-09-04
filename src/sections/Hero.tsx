import GetStartedButton from "../components/GetStartedButton";
import mile_high_icon from "../assets/mile_high_icon.png";

const CallToActionBox = () => {
  return (
    <div className=" sm:w-1/2 flex  px-7">
      <div className=" text-center sm:text-start">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight sm:text-6xl text-white">
          Your <span className="text-blue-600">soundtrack</span> awaits.
        </h1>
        <p className="mt-6 text-xl leading-8 text-gray-300 ">
          Every event deserves the best. Let's make it resonate.
        </p>
        <GetStartedButton />
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    // <div className="bg-black h-screen sm:flex sm:justify-center">
      <div className=" bg-black flex">
        <div className=" space-y-16 flex flex-col sm:flex-row justify-between items-center w-full py-20 ">
          <div className=" px-4 sm:w-1/2 sm:h-3/5 flex justify-center items-center">
            <img src={mile_high_icon} alt="company logo" />;
          </div>
          <CallToActionBox />
        </div>
      </div>
    // </div>
  );
};

export default Hero;
