import React, { useEffect } from "react";
import CTA from "./CTA";
// import Typewriter from "../TypeWriter/TypeWriter";
// import image from "../../assets/Cartoon-astronaut-floating-on-transparent-background-PNG.png";
import "./Header.css";
import Test from "../test/Test";
import HeaderSocials from "./HeaderSocials";
import Nav from "../nav/Nav";
import ChangeText from "./ChangeText";

// aos
import Aos from "aos";
import "aos/dist/aos.css";
const Header = () => {
  useEffect(() => {
    Aos.init({
      duration: 500,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <section
      id="home"
      className="relative h-[75vh]  md:h-[100vh]  md:snap-center text-center section"
    >
      <div className="h-1/3">
        <div data-aos="fade-down">
          <p className="text-2xl  pt-10 md:text-4xl my-1 font-font7 font-thin ">
            <span className="font-font3 md:text-base">
              <span className="text-primary text-lg">Hello Its,</span>{" "}
            </span>{" "}
            Md. Shahin Hossain
          </p>

          <p className="font-font3 text-primary">I am a,</p>
          <p className="mb-3 md:mb-5">
            <ChangeText />
            <span className="text-2xl font-font5">_</span>
          </p>
        </div>
        <div data-aos="zoom-in">
          <CTA />
        </div>
        <HeaderSocials />
        <a
          href="#contact"
          className="absolute bottom-[140px] right-[-30px] text-center text-primary hover:text-white rotate-90"
        >
          Contact Now
        </a>
      </div>
      {/* <div className="relative h-2/3 flex justify-center"> */}
      <Test />

      <Nav />

      {/* </div> */}
    </section>
  );
};

export default Header;
