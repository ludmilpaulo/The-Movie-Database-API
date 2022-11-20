/* eslint-disable eqeqeq */
import React, { useState, useEffect } from "react";
import { MovieItem } from "../components/MovieItem";
import ReactPaginate from "react-paginate";
import { Button } from "react-bootstrap";

const MovieListScreen = () => {
  const [movieData, setMovieData] = useState([] as any[]);
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([] as any[]);
  const [masterDataSource, setMasterDataSource] = useState([] as any[]);

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

  useEffect(() => {
    getMovie();
  }, [movieData]);

  ///******************************Procurar************************* */
  const searchFilterFunction = (text: any) => {

    console.log("texto", text)
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.title ? item.title.toUpperCase() : "".toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with restaurantData
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
    
  
          <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
              </div>
              <input
              value={search} 
            
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..."
              onChange={(text:any) => searchFilterFunction(text.target.value)}
              />
              
          </div>
     

      <MovieItem movieList={filteredDataSource}/>

      <div className="flex items-center justify-center">
        <div
          className="inline-flex shadow-md hover:shadow-lg focus:shadow-lg"
          role="group"
        >
          <button
          onClick={previousPage}
            type="button"
            className="rounded-l inline-block px-6 py-2.5 bg-gray-900 text-white font-medium text-xs leading-tight uppercase hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-0 active:bg-gray-900 transition duration-150 ease-in-out"
          >
            Previous Page
          </button>
          <button
            type="button"
            className=" inline-block px-6 py-2.5 bg-gray-900 text-white font-medium text-xs leading-tight uppercase hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-0 active:bg-gray-900 transition duration-150 ease-in-out"
          >
           {currentPage}
          </button>
          <button
          onClick={nextPage}
            type="button"
            className=" rounded-r inline-block px-6 py-2.5 bg-gray-900 text-white font-medium text-xs leading-tight uppercase hover:bg-gray-900 focus:bg-gray-900 focus:outline-none focus:ring-0 active:bg-gray-900 transition duration-150 ease-in-out"
          >
            Next Page
          </button>
        </div>
      </div>
          
              
        </div>

  
  );
};

export default MovieListScreen;
