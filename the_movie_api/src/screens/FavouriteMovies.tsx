/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import background from "../assets/bg.png";
import { Button } from "react-bootstrap";

interface Movie {
  id: string;
  title: string;
  poster_path: string;
  release_date: number;
}

const FavouriteMovies = () => {
  const [filteredDataSource, setFilteredDataSource] = useState<Movie[]>([]);
  const [masterDataSource, setMasterDataSource] = useState<Movie[]>([]);

  const getMovie = async () => {
    try {
      fetch(`http://127.0.0.1:8000/get/`)
        .then((response) => response.json())
        .then((responseJson) => {
          setFilteredDataSource(responseJson?.movie);
          setMasterDataSource(responseJson?.movie);
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
  let handleSubmit = async (movie: Movie) => {
    // movie.preventDefault();
    try {
      let res = await fetch("http://127.0.0.1:8000/get/", {
        method: "DELETE",
        // mode: 'no-cors',
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: movie.id,
        }),
      });
      let resJson = await res.json();
      console.log("recebido", resJson);

      if (res.status === 201) {
        alert("Movie successfully Added to Favourite");
        // navigate("/ContactScreen/");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  //**************************************************************************** */
  useEffect(() => {
    getMovie();
  }, [filteredDataSource]);

  return (
    <div style={divStyle}>
      <Navbar />
      <div className="container my-12 mx-auto px-4 md:px-12">
        <div className="relative">
          <div className="flex items-center justify-center">
            <h1>My Favourite Movies </h1>
          </div>
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
                      Remove From Favourites
                    </Button>
                  </div>
                </article>
              </div>
            ))}
          </div>
        )}
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
  // height: "100vh",
  backgroundImage: "url(" + background + ")",
};

export default FavouriteMovies;
