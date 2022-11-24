/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import background from "../assets/bg.png";
import { Button } from "react-bootstrap";
import { GrChapterNext, GrChapterPrevious } from "react-icons/gr";
import SignIn from "./SignIn";

interface Movie {
  id: string;
  title: string;
  poster_path: string;
  release_date: number;
}
interface User {
  user_id: number;
  username: string;
  message: string;
  status: number;
}

const MovieListScreen = () => {
  const navigate = useNavigate();
  const [movieData, setMovieData] = useState([] as any[]);
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState<Movie[]>([]);
  const [masterDataSource, setMasterDataSource] = useState<Movie[]>([]);

  const [currentPage, setCurrentPage] = useState(0);

  const [page, setPage] = useState(1);

  const nextPage = () => {
    setPage(page + 1);
    getMovie();
    console.log("page ==>", page);
  };

  const previousPage = () => {
    if (page != 1) {
      setPage(page - 1);
      getMovie();
      console.log("page ==>", page);
    }
  };

  let handleSubmit = async (movie: Movie) => {
    const authDataString = localStorage.getItem("user");

    //const authData = JSON.parse(authDataString || "");

    console.log("new ndata==>>", authDataString);

    if (authDataString === null) {
      alert("Please log in to Add your favorite Movie");
      navigate("/SignIn/");
    } else {
      try {
        let res = await fetch("http://127.0.0.1:8000/get/", {
          method: "POST",
          // mode: 'no-cors',
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: movie.title,
            release_date: movie.release_date,
            poster_path: movie.poster_path,
          }),
        });
        let resJson = await res.json();
        console.log("recebido", resJson);

        if (res.status === 201) {
          alert("Movie successfully Added to Favorite");
          // navigate("/ContactScreen/");
        } else {
          alert("Some error occurred");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const getMovie = async () => {
    try {
      fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=6802651e847439a9b1d064176b06c639&language=en-US&page=${page}`
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setMovieData(responseJson?.results);
          setFilteredDataSource(responseJson?.results);
          setMasterDataSource(responseJson?.results);
          setCurrentPage(responseJson?.page);
        })
        .catch(function (error) {
          console.log(
            "There has been a problem with your fetch operation: " +
              error.message
          );
          // ADD THIS THROW error
          throw error;
        });
    } catch (e) {
      alert(e);
    }
  };

  //***************************************************************** */

  const searchMovie = (e: any) => {
    e.preventDefault();

    setSearch(e.target.value);

    try {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=6802651e847439a9b1d064176b06c639&language=en-US&query=${e.target.value}&page=1&include_adult=false`
      )
        .then((response) => response.json())
        .then((responseJson) => {
          setMovieData(responseJson?.results);
          setFilteredDataSource(responseJson?.results);
          setMasterDataSource(responseJson?.results);
          setCurrentPage(responseJson?.page);
        })
        .catch(function (error) {
          console.log(
            "There has been a problem with your fetch operation: " +
              error.message
          );
          // ADD THIS THROW error
          throw error;
        });
    } catch (e) {
      alert(e);
    }
  };

  ///******************************Search ************************* */
  const searchFilterFunction = (e: string) => {
    console.log("texto", e);
    // Check if searched text is not blank
    if (e) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item: any) {
        // Applying filter for the inserted text in search bar
        const itemData = item.title
          ? item.title.toUpperCase()
          : "".toUpperCase();
        const textData = e.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(e);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with MovieData
      setFilteredDataSource(masterDataSource);
      setSearch(e);
    }
  };
  //**************************************************************************** */
  useEffect(() => {
    // searchFilterFunction();
    getMovie();
  }, []);

  return (
    <div style={divStyle}>
      <Navbar />
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            value={search}
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Mockups, Logos..."
            onChange={(e) => searchFilterFunction(e.target.value)}
          />
        </div>
        {filteredDataSource.length > 0 && (
          <div className="flex flex-wrap -mx-1 lg:-mx-4">
            {filteredDataSource.slice(0, 9).map((item: any, index: any) => (
              <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                <article
                  className="overflow-hidden rounded-lg shadow-lg"
                  key={index}
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
                    alt={`${item.title} Poster`}
                    className="block h-auto w-full"
                  />

                  <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                      {item.title}
                    </h5>

                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                      <b>Release date</b>:{item.release_date}
                    </p>

                    <Button
                      onClick={() => handleSubmit(item)}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
                    >
                      Add to Favorites
                    </Button>
                  </div>
                </article>
              </div>
            ))}
          </div>
        )}
        <div className="flex items-center justify-center divide-y">
          <div
            className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
            role="group"
          >
            <GrChapterPrevious onClick={previousPage} className="w-16 h-16" />
            <label className="inline-block px-6 py-2.5 text-black font-medium text-lg leading-tight">
              {currentPage}
            </label>

            <GrChapterNext className="w-16 h-16" onClick={nextPage} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

const divStyle = {
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "noRepeat",
  //  width: "100vw",
  //  height: "100vh",
  backgroundImage: "url(" + background + ")",
};

export default MovieListScreen;
