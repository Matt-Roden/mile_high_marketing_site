import Nav from "../components/Nav";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";

const Homepage = () => {
  return (
    <>
      <section>
        <Hero />
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Testimonials />
      </section>
      {/* <section>
        <Footer />
      </section> */}
    </>
  );
};

export default Homepage;
