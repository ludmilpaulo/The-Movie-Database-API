import React from "react";
import { useDispatch, useSelector } from "react-redux";


import Button from "react-bootstrap/esm/Button";

export const MovieItem = ({ movie }: { movie:any}) => {

  const dispatch = useDispatch();

  const selectItem = (movies:any, favoriteMovie:any) =>
    dispatch({
      type: "ADD_TO_FAVORITE",
      payload: {
        ...movies,
       // restaurantName: restaurantName,
        favoriteMovie: favoriteMovie,
      },
    });

    const cartItems = useSelector(
      (state) => state.cartReducer.selectedItems.items
    );

  

  return (
    <>
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {movie.slice(0, 9).map((movies:any,index:any) => (
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article
              className="overflow-hidden rounded-lg shadow-lg"
              key={index}
            >
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={`${movies.title} Poster`}
                className="block h-auto w-full"
              />

              <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-black">
                  {movies.title}
                </h5>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  <b>Release date</b>:{movies.release_date}
                </p>
                <Button
                onClick={(favoriteMovie) => selectItem(movie, favoriteMovie)}
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
