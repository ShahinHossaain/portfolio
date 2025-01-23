import React, { useEffect } from "react";
import About from "../about/About";
import Header from "../header/Header";
import Experience from "../Experience/Experience";
import Services from "../services/Services";
import Portfolio from "../portfolio/Portfolio";
import Contact from "../contact/Contact";
import "./Main.css";

import Aos from "aos";
import "aos/dist/aos.css";

function Main() {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="Container text-white">
      <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-20">
        <Header />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Contact />
      </div>
    </div>
  );
}

export default Main;