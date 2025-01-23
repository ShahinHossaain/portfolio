import React from "react";
import "./Project.css";
// import { SwiperSlide } from "swiper/react";

// {
//   img: "",
//   projectName: "",
//   aboutProject: "",
//   client: "",
//   server: "",
//   live: ""
// }
const Project = ({ projectInfo }) => {
  const { img, projectName, aboutProject, client, server, live } = projectInfo;
  return (
    <div className="card w-full h-[440px] bg-primary rounded-3xl backdrop-blur-sm hover:bg-opacity-40 bg-opacity-30 shadow-xl cursor-pointer">
      <figure className="">
        <img
          src={img}
          alt="Shoes"
          className="h-[200px] w-full "
        />
      </figure>
      <div className="card-body">
        <h2 className="text-primary font-font1 text-2xl">{projectName}</h2>
        <p className="text-white font-font4 text-sm font-thin">
          {aboutProject}
        </p>
        <div className="card-actions justify-start">
          <button className="button-23 hover:scale-110" role="button">
            <a href={client} target="blank">
              Client
            </a>
          </button>

          <button className="button-23 hover:scale-110">
            <a href={server} target="blank">
              Server
            </a>
          </button>

          <button className="button-23 hover:scale-110">
            <a href={live} target="blank">
              Live Side
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Project;
