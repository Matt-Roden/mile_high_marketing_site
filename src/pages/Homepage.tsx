import Nav from "../components/Nav";
import Footer from "../sections/Footer";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Testimonials from "../sections/Testimonials";

const Homepage = () => {
  return (
    <main>
      <section className=" dshadow-lg">
        <Hero />
      </section>
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
