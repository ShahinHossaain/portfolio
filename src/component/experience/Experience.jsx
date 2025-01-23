import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { Slide } from "react-awesome-reveal";
const Experience = () => {
  return (
    <section
      id="experience"
      className="grid grid-cols-1 justify-center items-center md:h-[100vh] mt-10 md:pb-20 md:snap-center section"
    >
      <div>
        <SectionTitle>my experience</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-11 px-5 md:px-7 lg:px-10">
          <Slide triggerOnce>
            <div className="bg-primary rounded-3xl backdrop-blur-sm hover:bg-opacity-40 bg-opacity-30 py-5">
              <p className="text-center p-5 text-2xl font-font2 font-semibold text-primary">
                Front-end Development
              </p>
              <div className="grid grid-cols-2 gap-5 px-5 md:px-10 lg:px-20">
                <div className="flex gap-2">
                  <p className="mt-1 text-primary">
                    <BsFillPatchCheckFill />
                  </p>
                  <div>
                    <p className="text-xl font-medium font-font2">Html</p>
                    <p className="text-sm mt-1">Experience</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <p className="mt-1 text-primary">
                    <BsFillPatchCheckFill />
                  </p>
                  <div>
                    <p className="text-xl font-medium font-font2">Css</p>
                    <p className="text-sm mt-1">Intermediate</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <p className="mt-1 text-primary">
                    <BsFillPatchCheckFill />
                  </p>
                  <div>
                    <p className="text-xl font-medium font-font2">
                      Java Script
                    </p>
                    <p className="text-sm mt-1">Experience</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <p className="mt-1 text-primary">
                    <BsFillPatchCheckFill />
                  </p>
                  <div>
                    <p className="text-xl font-medium font-font2">Bootstrap</p>
                    <p className="text-sm mt-1">Experience</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <p className="mt-1 text-primary">
                    <BsFillPatchCheckFill />
                  </p>
                  <div>
                    <p className="text-xl font-medium font-font2">Tailwind</p>
                    <p className="text-sm mt-1">Experience</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <p className="mt-1 text-primary">
                    <BsFillPatchCheckFill />
                  </p>
                  <div>
                    <p className="text-xl font-medium font-font2">React</p>
                    <p className="text-sm mt-1">Experience</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <p className="mt-1 text-primary">
                    <BsFillPatchCheckFill />
                  </p>
                  <div>
                    <p className="text-xl font-medium font-font2">TypeScript and Story Book</p>
                    <p className="text-sm mt-1">Intermediate</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <p className="mt-1 text-primary">
                    <BsFillPatchCheckFill />
                  </p>
                  <div>
                    <p className="text-xl font-medium font-font2">Next JS</p>
                    <p className="text-sm mt-1">Basic</p>
                  </div>
                </div>
              </div>
            </div>
          </Slide>
          <Slide triggerOnce direction="up">
            <div className="bg-primary rounded-3xl backdrop-blur-sm hover:bg-opacity-40 bg-opacity-30 py-5">
              <p className="text-center p-5 text-2xl font-font2 font-semibold text-primary">
                Back-end Development
              </p>
              <div className="grid grid-cols-2  gap-5 px-5 md:px-10 lg:px-20">
                <div className="flex gap-2">
                  <p className="mt-1 text-primary">
                    <BsFillPatchCheckFill />
                  </p>
                  <div>
                    <p className="text-xl font-medium font-font2">Node Js</p>
                    <p className="text-sm mt-1">Intermediate</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <p className="mt-1 text-primary">
                    <BsFillPatchCheckFill />
                  </p>
                  <div>
                    <p className="text-xl font-medium font-font2">Express Js</p>
                    <p className="text-sm mt-1">Intermediate</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <p className="mt-1 text-primary">
                    <BsFillPatchCheckFill />
                  </p>
                  <div>
                    <p className="text-xl font-medium font-font2">MongoDB</p>
                    <p className="text-sm mt-1">Intermediate</p>
                  </div>
                </div>

              </div>
            </div>
          </Slide>
        </div>
      </div>
    </section>
  );
};

export default Experience;
