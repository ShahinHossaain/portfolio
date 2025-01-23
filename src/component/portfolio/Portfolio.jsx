import React from "react";
import SectionTitle from "../sectionTitle/SectionTitle";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Portfolio.css";

// import required modules
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import Project from "../singleProject/Project";
import { Slide } from "react-awesome-reveal";

// import img from "../../assets/IMG_20220503_161831_1.jpg";
const projectInfo = [
  // {
  //   img: "",
  //   projectName: "",
  //   aboutProject: "",
  //   client: "",
  //   server: "",
  //   live: ""
  // }
  {
    img: "https://i.ibb.co/jwmTqPj/Screenshot-2023-07-01-140727.png",
    projectName: "Athlete Zone",
    aboutProject:
      " About : A dynamic full-stack sports website catering to admin, instructor, and student roles. Seamlessly enroll in sports classes using secure card payments.",

    client: "https://github.com/ShahinHossaain/athlete-zone",
    server: "https://github.com/ShahinHossaain/athlete-zone-server",
    live: "https://auth-email-password-5fc36.web.app/",
  },
  {
    img: "https://i.ibb.co/SxbvXXJ/Screenshot-2023-07-01-144724.png",
    projectName: "Joy Full Play THings",
    aboutProject:
      "About : A user-centric toy sharing platform where users can add, update, and delete their own toys. Secure login and registration powered by Firebase.",

    client: "https://github.com/ShahinHossaain/joy-full-play-things-server",
    server: "https://github.com/ShahinHossaain/joy-full-play-things",
    live: "https://auth-firebase-context-ta-2e0a4.web.app/",
  },
  {
    img: "https://i.ibb.co/MB6LsCw/Screenshot-2023-06-30-232051.png",
    projectName: "Dish Detective Pro",
    aboutProject:
      " Dish Detective Pro is a captivating chefs website where users can explore detailed chef profiles, create a personalized favorite list.",

    client: "https://github.com/ShahinHossaain/dish-detective-pro",
    server: "https://github.com/ShahinHossaain/dish-detective-pro-server",
    live: "https://650c7dc5cabb6e1bd0453267--imaginative-crumble-075739.netlify.app/",
  },
  {
    img: "https://i.ibb.co/Phdxg01/Screenshot-2023-09-21-234041.png",
    projectName: "Job Hunter",
    aboutProject:
      "Job Hunter is demo website where users can apply their suitable jobs. They can choose their job according to their choice.",

    client: "https://github.com/Porgramming-Hero-web-course/b7a9-career-hub-ShahinHossaain",
    live: "https://mellifluous-bavarois-891671.netlify.app/",
  },
  {
    img: "https://i.ibb.co/nsZQcKQ/Screenshot-2023-09-22-000606.png",
    projectName: "Knowledge Home",
    aboutProject:
      "Knowledge Home is demo website where users can bookmark any article which he/she want to read.",

    client: "https://github.com/Porgramming-Hero-web-course/b7a8-knowledge-cafe-ShahinHossaain",
    live: "https://fabulous-paletas-3b5829.netlify.app/",
  },

];

// const { img, projectName, aboutProject, client, server, live } = projectInfo[0];
const Portfolio = () => {
  return (
    <section
      id="portfolio"
      className="grid grid-cols-1 justify-center items-center md:h-[100vh] md:snap-center section lg:px-10 py-3 md:pb-16"
    >
      <div>
        <SectionTitle>Portfolio</SectionTitle>

        {/* swiper  */}
        <Slide direction="up" triggerOnce>
          <div className="flex flex-col md:flex-row items-center overflow-hidden">
            <div className="mx-auto w-full">
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                // loop={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                  rotate: 0,
                  stretch: 0,
                  depth: 100,
                  modifier: 2.5,
                }}
                pagination={{ el: ".swiper-pagination", clickable: true }}
                navigation={{
                  nextEl: ".swiper-button-next",
                  prevEl: ".swiper-button-prev",
                  clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
              >
                {projectInfo.map((project, index) => (
                  <SwiperSlide key={index}>
                    <Project projectInfo={project} />
                  </SwiperSlide>
                ))}

                {/* new  */}
                <div className="slider-controler relative bottom-[-30px] z-30 mx-[50px] pad">
                  <div className="swiper-button-prev slider-arrow">
                    <ion-icon name="arrow-back-outline "></ion-icon>
                  </div>
                  <div className="swiper-button-next slider-arrow ">
                    <ion-icon name="arrow-forward-outline"></ion-icon>
                  </div>
                </div>
                <div className="swiper-pagination"></div>
              </Swiper>
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default Portfolio;
