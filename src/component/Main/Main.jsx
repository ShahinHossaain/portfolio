import React from "react";
import About from "../About/About";
import Header from "../header/Header";
import Experience from "../Experience/Experience";
import Services from "../services/Services";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import "./Main.css";
const Main = () => {
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
};

export default Main;
