import React from "react";
import Button from "react-bootstrap/esm/Button";

export const MovieItem = ({ movieList }: { movieList: any }) => {
  return (
    <>
     <div className="flex flex-wrap -mx-1 lg:-mx-4">
            

        {movieList.map((item: any) => (
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
            <article
              className="overflow-hidden rounded-lg shadow-lg"
              key={item.id}
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
                 <b>release date</b>:{item.release_date}
                </p>
                <Button
                  href="#"
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
