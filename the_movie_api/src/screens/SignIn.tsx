import React, { useState } from "react";
import background from "../assets/bg.png";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  let handleSubmit = async () => {
    try {
      let res = await fetch("https://maindo.pythonanywhere.com/login/", {
        method: "POST",
        // mode: 'no-cors',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      let resJson = await res.json();
      console.log("recebido", resJson);

      if (res.status === 200) {
        localStorage.setItem("user", JSON.stringify(resJson));
        navigate("/");
        alert("User logged in now you can Added Movies to Favorite list");
      } else {
        alert(Object.values(resJson));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div style={divStyle}>
      <Navbar />
      <div className="w-full h-full px-4 py-16 bg-gradient-to-tl to-indigo-900">
        <div className="flex flex-col items-center justify-center">
          <div className="w-full p-10 mt-16 rounded shadow lg:w-1/3 md:w-1/2">
            <p
              tabIndex={0}
              aria-label="Login to your account"
              className="text-2xl font-extrabold leading-6 text-gray-800"
            >
              Login to your account
            </p>
            <Link to={"/SignUp/"}>
              <p className="mt-4 text-sm font-medium leading-none text-gray-500">
                Don't have account?{" "}
                <span
                  tabIndex={0}
                  role="link"
                  aria-label="Sign up here"
                  className="text-sm font-medium leading-none text-gray-800 underline cursor-pointer"
                >
                  {" "}
                  Sign up here
                </span>
              </p>
            </Link>

            <div>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your User name"
                className="w-full py-3 pl-3 mt-2 text-xs font-medium leading-none text-gray-800 bg-gray-200 border rounded focus:outline-none"
              />
            </div>
            <div className="w-full mt-6">
              <label className="text-sm font-medium leading-none text-gray-800">
                Password
              </label>
              <div className="relative flex items-center justify-center">
                <input
                  value={password}
                  placeholder="Enter your password"
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className="w-full py-3 pl-3 mt-2 text-xs font-medium leading-none text-gray-800 bg-gray-200 border rounded focus:outline-none"
                />
              </div>
            </div>
            <div className="mt-8">
              <button
                onClick={handleSubmit}
                role="button"
                aria-label="create my account"
                className="w-full py-4 text-sm font-semibold leading-none text-white bg-gray-900 border rounded focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none hover:bg-indigo-600"
              >
                Login to my account
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

const divStyle = {
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "noRepeat",
  // width: "100vw",
  height: "100vh",
  backgroundImage: "url(" + background + ")",
};

export default SignIn;
