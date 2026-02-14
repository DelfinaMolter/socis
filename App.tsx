import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Stats from "./components/Stats";
import Experience from "./components/Experience";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-blue-100 selection:text-blue-900 overflow-x-hidden">
      <Navbar scrolled={scrolled} />

      <main className="overflow-x-hidden">
        <section id="home">
          <Hero />
        </section>

        <section
          id="about"
          className="py-24 md:py-36 bg-slate-50  overflow-hidden"
        >
          <About />
        </section>

        <section id="process" className="py-24 md:py-36 bg-white">
          <Process />
        </section>

        <Stats />
        <section>
          <Experience />
        </section>

        <section id="contact" className="py-24 md:py-36 bg-white overflow-hidden">
          <Contact />
        </section>
      </main>

      <Footer />

      {/* Botón flotante de WhatsApp */}
      <WhatsAppFloat />
    </div>
  );
};

export default App;
