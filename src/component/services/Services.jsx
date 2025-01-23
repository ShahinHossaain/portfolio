import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import { BiCheck } from "react-icons/bi";
import { JackInTheBox } from "react-awesome-reveal";
const Services = () => {
  return (
    <section
      id="service"
      className="grid grid-cols-1 justify-center items-center md:h-[100vh] mx-5 md:mx-7 lg:mx-10 py-10 md:py-10 md:pb-32 lg:pb-24 md:snap-center section"
    >
      <div>
        <SectionTitle>Services</SectionTitle>
        <JackInTheBox triggerOnce>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-7">
            <div className="bg-primary backdrop-blur-sm hover:bg-opacity-40 bg-opacity-30 rounded-b-3xl">
              <p className="bg-primary text-center py-5 rounded-b-3xl font-font3 font-medium text-lg">
                UI/UX design
              </p>
              <ul className="mx-4 md:mx-6 lg:mx-8 py-4">

                <li className="flex gap-2">
                  <p className="text-lg text-primary">
                    <BiCheck />
                  </p>
                  Responsive Design: Ensuring websites work well on various devices and screen sizes.
                </li>
                <li className="flex gap-2">
                  <p className="text-lg text-primary">
                    <BiCheck />
                  </p>
                  Website Redesign: Updating and improving the design and functionality of existing websites.
                </li>


                <li className="flex gap-2">
                  <p className="text-lg text-primary">
                    <BiCheck />
                  </p>
                  UI/UX Design Collaboration: Collaborating with designers to implement user-friendly interfaces.
                </li>


              </ul>
            </div>
            <div className="bg-primary backdrop-blur-sm hover:bg-opacity-40 bg-opacity-30 rounded-b-3xl border border-blue-400">
              <p className="bg-primary text-center py-5 rounded-b-3xl font-font3 font-medium text-lg">
                Web Development
              </p>
              <ul className="mx-4 md:mx-6 lg:mx-8 py-4">
                <li className="flex gap-2">
                  <p className="text-lg text-primary">
                    <BiCheck />
                  </p>
                  Website Development: Building websites from scratch or working on existing projects.
                </li>
                <li className="flex gap-2">
                  <p className="text-lg text-primary">
                    <BiCheck />
                  </p>
                  Front-End Development: Creating user interfaces and experiences using HTML, CSS, JavaScript and React.
                </li>
                <li className="flex gap-2">
                  <p className="text-lg text-primary">
                    <BiCheck />
                  </p>
                  Testing and Debugging: Ensuring websites are error-free and work as expected.
                </li>
                <li className="flex gap-2">
                  <p className="text-lg text-primary">
                    <BiCheck />
                  </p>
                  Web Hosting and Deployment: Setting up and managing web hosting services and deploying websites.
                </li>
                <li className="flex gap-2">
                  <p className="text-lg text-primary">
                    <BiCheck />
                  </p>
                  Web Application Development: Developing web-based applications using technologies like React.
                </li>
              </ul>
            </div>
            <div className="bg-primary backdrop-blur-sm hover:bg-opacity-40 bg-opacity-30 rounded-b-3xl border border-blue-400">
              <p className="bg-primary text-center py-5 rounded-b-3xl font-font3 font-medium text-lg">
                Others
              </p>
              <ul className="mx-4 md:mx-6 lg:mx-8 py-4">
                <li className="flex gap-2">
                  <p className="text-lg text-primary">
                    <BiCheck />
                  </p>
                  Client Training: Providing training to clients on how to manage and update their websites.
                </li>
                <li className="flex gap-2">
                  <p className="text-lg text-primary">
                    <BiCheck />
                  </p>
                  echnical Support: Providing technical assistance to clients for web-related issues.
                </li>
              </ul>
            </div>
          </div>
        </JackInTheBox>
      </div>
    </section>
  );
};

export default Services;
