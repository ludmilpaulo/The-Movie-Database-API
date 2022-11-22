import React, { useEffect, useState } from "react";

import FlightCard from "./FlightCard";
import toast, { Toaster } from "react-hot-toast";

interface Movie {
  id: string;
  title: string;
  poster_path: string;
  release_date: number;
}

const FavouriteMovies = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Movie[]>([]);
  const [favourites, setFavourites] = useState<Movie[]>([]);

  useEffect(() => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=6802651e847439a9b1d064176b06c639";
    // Allows us to intercept an API request so we can cancel anytime - sending signal in fetch will destroy immediately
    const controller = new AbortController();
    const { signal } = controller;
    const fetchData = async () => {
      try {
        const response = await fetch(url, { signal }).then((res) => res.json());
        setData(response.results);
        setIsLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          if (err.name === "AbortError") {
            console.log("api request has been cancelled");
          }
          console.log(err.name);
        } else {
          console.log("This is an unknown error");
        }
      }
    };
    fetchData();
    return () => {
      // cleanup the abort controller
      controller.abort();
    };
  }, []);

  const addFlights = (flight: Movie) => {
    if (!favourites.includes(flight)) {
      toast.success("Added to favourites");
      setFavourites([...favourites, flight]);
    } else {
      toast.success("Removed from favourites");
      setFavourites([...favourites.filter((item) => item !== flight)]);
    }
  };

  const removeFlights = (flight: Movie) => {
    toast.success("Removed from favourites");
    setFavourites([...favourites.filter((item) => item !== flight)]);
  };

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <FlightCard title="Trending Destination">
        {data.length &&
          data?.map((item) => (
            <div
              key={item.id}
              className="destination"
              onClick={() => addFlights(item)}
            >
              <li>{item.title}</li>
              <button>+</button>
            </div>
          ))}
      </FlightCard>
      <FlightCard title="My Destination List">
        {favourites.length ? (
          favourites?.map((item) => (
            <div
              key={item.id}
              className="destination"
              onClick={() => removeFlights(item)}
            >
              <li>{item.title}</li>
              <button>-</button>
            </div>
          ))
        ) : (
          <p>Nothing added to your list yet</p>
        )}
      </FlightCard>
    </>
  );
};

export default FavouriteMovies;
