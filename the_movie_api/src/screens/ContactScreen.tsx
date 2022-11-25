import React from "react";
import background from "../assets/bg.png";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FcGlobe } from "react-icons/fc";
import { AiOutlineGithub } from "react-icons/ai";

const ContactScreen = () => {
  return (
    <div style={divStyle}>
      <Navbar />
      <div className="container my-12 mx-auto px-4 md:px-12">
        <h1>
          <p className="text-center underline hover:decoration-wavy">
            Ludmil Paulo Samuel Avelino
          </p>
        </h1>

        <div className="container my-24 px-6 mx-auto">
          <section className="mb-32 text-gray-800">
            <div className="block rounded-lg ">
              <div className="flex flex-wrap items-center">
                <div className="grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
                  <div className="flex flex-wrap pt-12 lg:pt-0">
                    <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="p-4 bg-gray-900 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                            <FiPhoneCall className="w-12 h-12  text-white" />
                          </div>
                        </div>
                        <div className="grow ml-6">
                          <p className="font-bold mb-1">Technical support</p>

                          <p className="text-gray-500">+27842368752</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                      <div className="flex items-start">
                        <div className="shrink-0">
                          <div className="p-4 bg-gray-900 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                            <MdOutlineMarkEmailUnread className="w-12 h-12  text-white" />
                          </div>
                        </div>
                        <div className="grow ml-6">
                          <p className="font-bold mb-1">Email</p>
                          <p className="text-gray-500">ludmilpaulo@gmail.com</p>
                        </div>
                      </div>
                    </div>

                    <div className="mb-12 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                      <div className="flex align-start">
                        <div className="shrink-0">
                          <div className="p-4 bg-gray-900 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                            <AiOutlineGithub className="w-12 h-12  text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="https://www.ludmilpaulo.com/">
                      <div className="mb-12 lg:mb-0 grow-0 shrink-0 basis-auto w-full md:w-6/12 lg:w-full xl:w-6/12 px-3 md:px-6 xl:px-12">
                        <div className="flex align-start">
                          <div className="shrink-0">
                            <div className="p-4 bg-gray-900 rounded-md shadow-md w-14 h-14 flex items-center justify-center">
                              <FcGlobe className="w-12 h-12  text-white" />
                            </div>
                          </div>
                          <div className="grow ml-6">
                            <p className="font-bold mb-1">Bug report</p>
                            <p className="text-gray-500">www.ludmilpaulo.com</p>
                          </div>
                        </div>
                      </div>
                    </a>

                    <div className="flex space-x-14 items-end p-8">
                      <a href="https://github.com/ludmilpaulo">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 496 512"
                          className="w-12 h-12"
                        >
                          <path
                            fill="currentColor"
                            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
                          />
                        </svg>
                      </a>

                      <a href="https://www.facebook.com/ludmilpaulo">
                        <svg
                          className="w-12 h-12 text-blue-600 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                        </svg>
                      </a>
                      <a href="https://twitter.com/ludmilpaulo">
                        <svg
                          className="w-12 h-12 text-blue-300 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                        </svg>
                      </a>
                      <a href="https://www.linkedin.com/in/ludmil-paulo-4143b131/">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="w-12 h-12 text-blue-300 fill-current"
                        >
                          <path
                            fill="currentColor"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                          />
                        </svg>
                      </a>
                    </div>
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
