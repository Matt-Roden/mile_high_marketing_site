import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Footer from './sections/Footer';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials';

const App = () => {
  return (
    <main className='relative'>
      <Nav />
      <section>
        <Hero/>
      </section>
      <section>
        <Services />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
};

export default App;
