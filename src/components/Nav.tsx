import GetStartedButton from "./GetStartedButton";
import mile_high_icon from "../assets/mile_high_icon_poppins.png";

const Nav = ({ showNavbar }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header className={`${showNavbar ? "hide" : "show"} fixed top-0 py-6 px-6 sm:px-20 bg-black text-white w-full flex justify-between sm:items-center z-10`}>
     <img src={mile_high_icon} alt="company logo" className=" h-14 cursor-pointer" onClick={scrollToTop}/>
      <GetStartedButton />
    </header>
  );
};

export default Nav;
