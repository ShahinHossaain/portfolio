import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import { BsFillPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section
      id="experience"
      className="md:h-[100vh] py-10 md:py-16  md:snap-center section"
    >
      <SectionTitle>my experience</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-11 px-5 md:px-7 lg:px-10">
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
                <p className="text-xl font-medium font-font2">Java Script</p>
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
                <p className="text-xl font-medium font-font2">Next JS</p>
                <p className="text-sm mt-1">Basic</p>
              </div>
            </div>
          </div>
        </div>
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
            <div className="flex gap-2">
              <p className="mt-1 text-primary">
                <BsFillPatchCheckFill />
              </p>
              <div>
                <p className="text-xl font-medium font-font2">MySQL</p>
                <p className="text-sm mt-1">Basic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
