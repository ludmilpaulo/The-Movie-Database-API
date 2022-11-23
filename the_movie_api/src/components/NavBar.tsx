import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdFavoriteBorder} from "react-icons/md"
import { BiCameraMovie } from 'react-icons/bi';
import { FcContacts } from 'react-icons/fc';

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-gray-900 text-white mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <Link
                  to={"/"}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <BiCameraMovie className="text-lg leading-lg text-white opacity-75"/>
                  <span className="ml-2">List of Movies </span>
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to={"/fav"}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <MdFavoriteBorder className="text-lg leading-lg opacity-75"/>
                  <span className="ml-2">My Favorites </span>
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/contacts"}
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                >
                  <FcContacts className="text-lg leading-lg text-white opacity-75"/>
                  <span className="ml-2">Contacts</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
