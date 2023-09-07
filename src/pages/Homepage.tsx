import { useState, useEffect } from "react";
import "../App.css";
import Nav from "../components/Nav";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";

const Homepage = () => {
  const [showNavbar, setShowNavbar] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".heromatt").clientHeight;

      // Check if the top of the Hero section is below the viewport
      if (window.scrollY > heroSection) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <main>
      <section className="heromatt dshadow-lg">
        <Hero />
      </section>
      <Nav showNavbar={showNavbar}/>
      <section className=" bg-gradient-to-r from-slate-100 to-white">
        <Services />
      </section>
      <section className=" bg-gradient-to-r from-slate-100 to-white">
        <Testimonials />
      </section>
      {/* <section>
        <Footer />
      </section> */}
    </main>
  );
};

export default Homepage;
