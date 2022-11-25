import React from "react";
import background from "../assets/bg.png";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { FiPhoneCall} from "react-icons/fi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FcGlobe } from "react-icons/fc";
import { AiOutlineGithub } from "react-icons/ai";
import {CiFacebook} from "react-icons/ci";
import {ImWhatsapp} from "react-icons/im";

const ContactScreen = () => {
  return (
    <div style={divStyle}>
      <Navbar />
      <div className="container px-4 mx-auto my-12 md:px-12">
        <h1>
          <p className="text-center underline hover:decoration-wavy">
            Ludmil Paulo Samuel Avelino
          </p>
        </h1>

        <div className="container px-6 mx-auto my-24">
          <section className="mb-32 text-gray-800">
            <div className="block rounded-lg ">
              <div className="flex flex-wrap items-center">
                <div className="w-full grow-0 shrink-0 basis-auto lg:w-6/12 xl:w-8/12">
                <div className="grid grid-cols-2 gap-4 place-content-evenly h-48 ...">
                    
                  <a href="tel:+27842368752">
                    <div className="w-full px-3 mb-12 grow-0 shrink-0 basis-auto md:w-6/12 lg:w-full xl:w-6/12 md:px-6 xl:px-12">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="flex items-center justify-center p-4 bg-gray-900 rounded-md shadow-md w-14 h-14">
                            <FiPhoneCall className="w-12 h-12 text-white" />
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-1 font-bold">Technical support</p>

                          <p className="text-gray-500">+27842368752</p>
                        </div>
                      </div>
                    </div>
                    </a>
                    <a href="mailto:ludmilpaulo@gmail.com" >
                    <div className="w-full px-3 mb-12 grow-0 shrink-0 basis-auto md:w-6/12 lg:w-full xl:w-6/12 md:px-6 xl:px-12">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="flex items-center justify-center p-4 bg-gray-900 rounded-md shadow-md w-14 h-14">
                            <MdOutlineMarkEmailUnread className="w-12 h-12 text-white" />
                          </div>
                        </div>
                        <div className="ml-6 grow">
                          <p className="mb-1 font-bold">Email</p>
                          <p className="text-gray-500">ludmilpaulo@gmail.com</p>
                        </div>
                      </div>
                    </div>
                    </a>
                    <a href="https://github.com/ludmilpaulo">
                    <div className="w-full px-3 mb-12 grow-0 shrink-0 basis-auto md:w-6/12 lg:w-full xl:w-6/12 md:px-6 xl:px-12">
                      <div className="flex align-start">
                        <div className="shrink-0">
                          <div className="flex items-center justify-center p-4 bg-gray-900 rounded-md shadow-md w-14 h-14">
                            <AiOutlineGithub className="w-12 h-12 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                    </a>
                    <a href="https://www.ludmilpaulo.com/">
                      <div className="w-full px-3 mb-12 lg:mb-0 grow-0 shrink-0 basis-auto md:w-6/12 lg:w-full xl:w-6/12 md:px-6 xl:px-12">
                        <div className="flex align-start">
                          <div className="shrink-0">
                            <div className="flex items-center justify-center p-4 bg-gray-900 rounded-md shadow-md w-14 h-14">
                              <FcGlobe className="w-12 h-12 text-white" />
                            </div>
                          </div>
                          <div className="ml-6 grow">
                            <p className="mb-1 font-bold">Bug report</p>
                            <p className="text-gray-500">www.ludmilpaulo.com</p>
                          </div>
                        </div>
                      </div>
                    </a>

                    <a href="https://www.facebook.com/ludmilpaulo">
                      <div className="w-full px-3 mb-12 grow-0 shrink-0 basis-auto md:w-6/12 lg:w-full xl:w-6/12 md:px-6 xl:px-12">
                      <div className="flex align-start">
                        <div className="shrink-0">
                          <div className="flex items-center justify-center p-4 bg-gray-900 rounded-md shadow-md w-14 h-14">
                            <CiFacebook className="w-12 h-12 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                    </a>

                     <a href="https://api.whatsapp.com/send?phone=0027842368752">
                      <div className="w-full px-3 mb-12 grow-0 shrink-0 basis-auto md:w-6/12 lg:w-full xl:w-6/12 md:px-6 xl:px-12">
                      <div className="flex align-start">
                        <div className="shrink-0">
                          <div className="flex items-center justify-center p-4 bg-gray-900 rounded-md shadow-md w-14 h-14">
                            <ImWhatsapp className="w-12 h-12 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                    </a>

                    

                  </div>
                  
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 w-full...">
        <iframe
          className="w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.8291920316265!2d18.486413015477428!3d-33.91979542913943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5c5a4231e7ef%3A0x17fabbb3078a1cee!2s21%20Royal%20Rd%2C%20Maitland%2C%20Cape%20Town%2C%207405!5e0!3m2!1sen!2sza!4v1669236841060!5m2!1sen!2sza"
          height="300"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
};

const divStyle = {
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "noRepeat",
  width: "100vw",
  height: "100vh",
  backgroundImage: "url(" + background + ")",
};

export default ContactScreen;
