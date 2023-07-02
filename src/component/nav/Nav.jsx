import React, { useState, useEffect } from "react";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { MdOutlineContacts } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";

const Nav = () => {
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("qqqqqqqqq", active);
          setActive(`#${entry.target.id}`);
        }
      });
    };

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust the threshold as per your requirement
    };

    const observer = new IntersectionObserver(handleIntersection, options);
    const targets = document.querySelectorAll(".section");

    targets.forEach((target) => {
      observer.observe(target);
    });

    return () => {
      targets.forEach((target) => {
        observer.unobserve(target);
      });
    };
  }, []);

  console.log("Current location:", active);

  return (
    <div className="fixed right-0 left-0 bottom-6 bg-gray-800 backdrop-blur-sm rounded-3xl px-10 py-4 flex gap-8 bg-opacity-50 max-w-[max-content] mx-auto text-primary z-10">
      <a
        href="#home"
        className={`hover:text-blue-200 ${
          active === "#home" ? "text-white" : ""
        }`}
        onClick={() => setActive("#home")}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        className={`hover:text-blue-200 ${
          active === "#about" ? "text-white" : ""
        }`}
        onClick={() => setActive("#about")}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        className={`hover:text-blue-200 ${
          active === "#experience" ? "text-white" : ""
        }`}
        onClick={() => setActive("#experience")}
      >
        <BiBook />
      </a>
      <a
        href="#service"
        className={`hover:text-blue-200 ${
          active === "#service" ? "text-white" : ""
        }`}
        onClick={() => setActive("#service")}
      >
        <RiServiceLine />
      </a>
      <a
        href="#portfolio"
        className={`hover:text-blue-200 ${
          active === "#portfolio" ? "text-white" : ""
        }`}
        onClick={() => setActive("#portfolio")}
      >
        <CgWebsite />
      </a>
      <a
        href="#contact"
        className={`hover:text-blue-200 ${
          active === "#contact" ? "text-white" : ""
        }`}
        onClick={() => setActive("#contact")}
      >
        <MdOutlineContacts />
      </a>
    </div>
  );
};

export default Nav;
