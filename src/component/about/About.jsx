import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import me from "../../assets/profilePic2.png";
import { FaAward } from "react-icons/fa";
import { BsPatchQuestionFill } from "react-icons/bs";
import { GoProjectSymlink } from "react-icons/go";
import { Flip, Slide } from "react-awesome-reveal";

// import "./About.css";
const About = () => {
  return (
    <section
      id="about"
      className="grid grid-cols-1 justify-center items-center md:h-[100vh] md:snap-center mt-32  md:mt-10 section mb-6 md:mb-0 md:pb-20"
    >
      <div>
        <SectionTitle>about me</SectionTitle>

        <div className="flex flex-col md:flex-row justify-around gap-8 md:gap-32 md:p-10 items-center mt-10 lg:mt-4">
          <div className="flex justify-center aspect-w-1 aspect-h-1 w-full md:w-1/3">
            {/* image */}
            <Flip triggerOnce delay={1000}>
              <div className=" bg-gradient-to-r from-secondary to-primary h-[340px] w-[260px] rounded-3xl">
                <img
                  src={me}
                  alt=""
                  className="h-[340px] w-[260px] rounded-3xl rotate-[10deg] hover:rotate-[0deg] duration-300"
                />
              </div>
            </Flip>
          </div>
          {/* Experience */}

          <div className=" w-5/6 md:w-2/3">
            <div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 
    mx-auto lg:justify-between gap-5"
            >
              <Slide triggerOnce direction="left">
                <div className="bg-primary  grid grid-cols-1 items-center gap-0 py-7  backdrop-blur-sm hover:bg-opacity-60 bg-opacity-30 rounded-3xl text-center">
                  <span className="mx-auto inline-block text-primary text-3xl">
                    <FaAward />
                  </span>
                  <p className="font-semibold">Experience</p>
                  <p className="text-xs">6 Month +</p>
                </div>
              </Slide>
              <Slide triggerOnce direction="left" delay={200}>
                <div className="bg-primary  grid grid-cols-1 items-center gap-0 py-7  backdrop-blur-sm hover:bg-opacity-60  bg-opacity-30 rounded-3xl text-center">
                  <span className="mx-auto inline-block text-primary text-3xl">
                    <BsPatchQuestionFill />
                  </span>
                  <p className="font-semibold">Problem Solving</p>
                  <p className="text-xs">350+ solved</p>
                </div>
              </Slide>
              <Slide triggerOnce direction="left" delay={400}>
                <div className="bg-primary  grid grid-cols-1 items-center gap-0 py-7  backdrop-blur-sm hover:bg-opacity-60  bg-opacity-30 rounded-3xl text-center">
                  <span className="mx-auto inline-block text-primary text-3xl">
                    <GoProjectSymlink />
                  </span>
                  <p className="font-semibold">Projects</p>
                  <p className="text-xs">15 Projects done</p>
                </div>
              </Slide>
            </div>

            <p className="my-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae delectus, laudantium repellendus quasi quisquam, dicta
              illum eaque voluptates iusto quidem accusantium vel culpa
              assumenda aliquid! Ut iure dicta illo molestias consectetur! Odit
              quae vero voluptates beatae aut dolorum obcaecati aspernatur
              repellat delectus asperiores iste in autem sunt, harum quos! In.
            </p>
            <div className="text-center md:text-left">
              <button className="btn2">
                <a href="#contact">Lets Talk</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
