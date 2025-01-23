import React, { useState } from "react";
import SectionTitle from "../sectionTitle/SectionTitle";
import { BiMessageDots } from "react-icons/bi";
import { LiaFacebookMessenger } from "react-icons/lia";
import { BsWhatsapp } from "react-icons/bs";
// import { TbFidgetSpinner } from "react-icons/tb";
import "./Contact.css";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { Slide } from "react-awesome-reveal";
const Contact = () => {
  const success = () => toast("Message sent Successfully!");
  const errorr = () => toast("Message can not sent!");
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_nsi8nv7",
        "template_mrg85jh",
        form.current,
        "L31MATSblIUfijpE4"
      )
      .then(
        (result) => {
          setIsLoading(false);
          success();
          form.current.reset();
          console.log(result);
        },
        (error) => {
          setIsLoading(false);
          errorr();
        }
      );
  };
  return (
    <section
      id="contact"
      className="grid grid-cols-1 justify-center items-center md:h-[100vh] px-5 md:snap-center section md:pb-16"
    >
      <div>
        <ToastContainer />
        <div className="pt-16 mb-8 md:mb-28 lg:mb-0 md:pt-16 lg:pt-5">
          <SectionTitle>Contact Me</SectionTitle>
        </div>
        <div className="flex flex-col md:flex-row justify-around lg:items-center md: gap-5 lg:gap-20">
          <div className="flex flex-col gap-5 md:w-1/3 lg:px-16">
            <Slide triggerOnce direction="up" delay={500}>
              <div className="bg-primary  grid grid-cols-1 items-center gap-0 py-7  backdrop-blur-sm hover:bg-opacity-60 bg-opacity-30 rounded-3xl text-center">
                <span className="mx-auto inline-block text-primary text-3xl">
                  <BiMessageDots />
                </span>

                <p>Email</p>
                {/* <p>mdshahinhossaain@gmail.com</p> */}
                <a
                  className="text-primary hover:text-white"
                  href="mailto:mdshahinhossaain@gmail.com"
                  target="blank"
                >
                  Send A Message
                </a>
              </div>
            </Slide>
            <Slide triggerOnce direction="up" delay={300}>
              <div className="bg-primary  grid grid-cols-1 items-center gap-0 py-7  backdrop-blur-sm hover:bg-opacity-60 bg-opacity-30 rounded-3xl text-center">
                <span className="mx-auto inline-block text-primary text-[41.5px]">
                  <LiaFacebookMessenger />
                </span>
                <p>Messenger</p>
                {/* <p>https://www.facebook.com/logarithm.algorithm/</p> */}
                <p>Md. Shahin Hossain</p>
                <a
                  className="text-primary hover:text-white"
                  href="https://m.me/logarithm.algorithm"
                  target="blank"
                >
                  Send A Message
                </a>
              </div>
            </Slide>
            <Slide triggerOnce direction="up" delay={100}>
              <div className="bg-primary  grid grid-cols-1 items-center gap-0 py-7  backdrop-blur-sm hover:bg-opacity-60 bg-opacity-30 rounded-3xl text-center">
                <span className="mx-auto inline-block text-primary text-3xl">
                  <BsWhatsapp />
                </span>
                <p>Whats App</p>
                <p>+880 1634376553</p>
                <a
                  className="text-primary hover:text-white"
                  href="https://api.whatsapp.com/send?phone=1634376553"
                  target="blank"
                >
                  Send A Message
                </a>
              </div>
            </Slide>
          </div>
          {/* form part  */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="md:w-2/3 flex flex-col gap-6 mb-20 md:mb-0"
          >
            <p className="text-center font-font6 text-xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-white">
              Send Message Now
            </p>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              className="p-3 inputField  rounded-2xl bg-primary  backdrop-blur-sm focus:backdrop-blur-md focus:bg-opacity-40 bg-opacity-30 text-gray-300"
              required
            />
            <input
              type="text"
              name="email"
              placeholder="Your Email"
              className="p-3 inputField  rounded-2xl bg-primary  backdrop-blur-sm focus:backdrop-blur-md focus:bg-opacity-40 bg-opacity-30 text-gray-300  "
              required
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              className="resize-none p-3  inputField  rounded-2xl bg-primary  backdrop-blur-sm focus:backdrop-blur-md focus:bg-opacity-40 bg-opacity-30 text-gray-300"
              required
            ></textarea>
            <button type="submite" className="btn2">
              {
                <p className="flex gap-2">
                  <span>Send Message</span>
                  {isLoading && (
                    <span className="loading loading-infinity loading-md"></span>
                  )}
                </p>
              }
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
