import React from "react";
import { BsLinkedin, BsGithub, BsFacebook } from "react-icons/bs";
const HeaderSocials = () => {
  return (
    <div className="absolute flex flex-col gap-4 bottom-20 text-xl text-[#4db5ff]">
      <a
        href="https://www.linkedin.com/in/mdshahin-8a830b280/"
        target="blank"
        className="hover:text-white"
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/ShahinHossaain"
        target="blank"
        className="hover:text-white"
      >
        <BsGithub />
      </a>
      <a
        href="https://www.facebook.com/logarithm.algorithm/"
        target="blank"
        className="hover:text-white"
      >
        <BsFacebook />
      </a>
      <div className="h-8 w-[2px] bg-[#4db5ff] ml-[8px]"></div>
    </div>
  );
};

export default HeaderSocials;
