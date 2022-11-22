import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Button from "react-bootstrap/esm/Button";
interface Movie {
  id: string;
  title: string;
  poster_path: string;
  release_date: number;
}

export const MovieItem = ({ movie }: { movie: any }) => {
  const [items, setItems] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [favourites, setFavourites] = useState<Movie[]>([]);

  const addFlights = (movie: Movie) => {
    if (!favourites.includes(movie)) {
      console.log("Added from favourites");
      toast.success("Added to favourites");
      setFavourites([...favourites, movie]);
    } else {
      console.log("Removed from favourites");
      toast.success("Removed from favourites");
      setFavourites([...favourites.filter((item) => item !== movie)]);
    }
  };

  const removeFlights = (movie: Movie) => {
    toast.success("Removed from favourites");
    setFavourites([...favourites.filter((item) => item !== movie)]);
  };

  console.log("fav");
  //if (isLoading) return <p>Loading...</p>;

  let handleSubmit = async (movies: any) => {
    movies.preventDefault();
    try {
      let res = await fetch(
        "https://webhook.site/87b01ef3-8460-479a-bc89-eb1ce54a8380",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            data: movies,
          }),
        }
      );
      let resJson = await res.json();

      if (res.status === 201) {
        alert("Contact created successfully");
      } else {
        alert("Some error occured");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {movie.slice(0, 9).map((item: any, index: any) => (
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
                  onClick={() => addFlights(item)}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-900 rounded-lg hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gray-900 dark:hover:bg-gray-900 dark:focus:ring-blue-800"
                >
                  Add To Favorites
                </Button>
              </div>
            </article>
          </div>
        ))}
      </div>
    </>
  );
};
