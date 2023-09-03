import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-black mt-20">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-white">
              Your <span className="text-indigo-500">soundtrack</span> awaits.
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 text-white">
              Your event deserves the best. Let's make it resonate.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link to="/get-started">
                <button className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                  Get started
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
