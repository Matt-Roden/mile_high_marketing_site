import GetStartedButton from "../components/GetStartedButton";
import mile_high_icon from '../assets/mile_high_icon.png'

const CallToActionBox = () => {
  return (
    <div className=" w-1/2 flex items-center">
      <div className="text-start">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-6xl text-white">
          Your <span className="text-blue-600">soundtrack</span> awaits.
        </h1>
        <p className="mt-6 text-xl leading-8 text-gray-600 text-white ">
          Every event deserves the best. Let's make it resonate.
        </p>
        <GetStartedButton />
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <div className="bg-black h-screen flex justify-center">
      <div className=" flex w-3/4">
        <div className=" flex justify-between items-center w-full my-40">
          <CallToActionBox />
          <div className=" w-1/2 h-3/5 flex justify-center items-center">
            <img src={mile_high_icon} alt="company logo"/>;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
