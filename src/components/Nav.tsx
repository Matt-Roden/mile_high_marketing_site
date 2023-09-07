import GetStartedButton from "./GetStartedButton";
import mile_high_icon from "../assets/mile_high_icon.png";

const Nav = ({ showNavbar }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className={`${showNavbar ? "hide" : "show"} shadow-md  shadow-slate-500 fixed top-0 p-5 bg-black text-white w-full flex justify-between sm:items-center `}>
     <img src={mile_high_icon} alt="company logo" className=" h-14 cursor-pointer" onClick={scrollToTop}/>
      <GetStartedButton />
    </header>
  );
};

export default Nav;
