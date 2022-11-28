import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { BiCameraMovie, BiLogOutCircle } from "react-icons/bi";
import { FcContacts } from "react-icons/fc";

interface User {
  user_id: number;
  username: string;
  message: string;
  status: number;
}

export default function Navbar() {
  const navigate = useNavigate();
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [user, setUser] = useState<User>();

  const logOut = () => {
    console.log("user out");
    localStorage.removeItem("user");
    navigate("/");
  };

  useEffect(() => {
    const authDataString = localStorage.getItem("user");

    const authData = JSON.stringify(authDataString);
    let userfav = JSON.parse(authData);
    setUser(userfav);
  }, [user]);

  // Set current auth state in AsyncStorage

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
                  <BiCameraMovie className="text-lg leading-lg text-white opacity-75" />
                  <span className="ml-2">List of Movies </span>
                </Link>
              </li>
              {user ? (
                <>
                  <li className="nav-item">
                    <Link
                      to={"/fav"}
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      <MdFavoriteBorder className="text-lg leading-lg opacity-75" />
                      <span className="ml-2">My Favorites </span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      to={"/contacts"}
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      <FcContacts className="text-lg leading-lg text-white opacity-75" />
                      <span className="ml-2">Contacts</span>
                    </Link>
                  </li>

                  <li className="nav-item">
                    <div
                      onClick={logOut}
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                    >
                      <BiLogOutCircle className="text-lg leading-lg text-white opacity-75" />
                      <span className="ml-2 ">Log Out</span>
                    </div>
                  </li>
                </>
              ) : (
                <li className="nav-item">
                  <Link
                    to={"/contacts"}
                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  >
                    <FcContacts className="text-lg leading-lg text-white opacity-75" />
                    <span className="ml-2">Contacts</span>
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
