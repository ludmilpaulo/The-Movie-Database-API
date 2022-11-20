import React, {useState, useEffect} from "react";
import { MovieItem } from '../components/MovieItem';
import Pagination from "../components/Pagination";

const MovieListScreen = () => {
  const [ movieData, setMovieData ] = useState([] as any[]);
  const [search, setSearch] = useState("");
  const [filteredDataSource, setFilteredDataSource] = useState([] as any[]);
  const [masterDataSource, setMasterDataSource] = useState([] as any[]);
  

  const getMovie = async () => {
    try {
      fetch("https://api.themoviedb.org/3/movie/popular?api_key=6802651e847439a9b1d064176b06c639")
        .then((response) => response.json())
        .then((responseJson) => {
          setMovieData(responseJson?.results);
          setFilteredDataSource(responseJson?.results);
          setMasterDataSource(responseJson?.results);
        })
        .catch(function(error) {
          console.log('There has been a problem with your fetch operation: ' + error.message);
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
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource and update FilteredDataSource
      const newData = masterDataSource.filter(function (item) {
        // Applying filter for the inserted text in search bar
        const itemData = item.name ? item.name.toUpperCase() : "".toUpperCase();
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
    <div className="flex flex-wrap -mx-1 lg:-mx-4">
    {filteredDataSource.map((item:any)=>(
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">

           
              <article className="overflow-hidden rounded-lg shadow-lg" key={item.id}>

             
              <img    
              src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
      alt={`${item.title} Poster`} 
              className="block h-auto w-full" 
               />

<div className="p-5">
<h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.title}</h5>

  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
  <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
      Read more
      <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </a>
</div>

</article>

        </div>
      )
      )}
    </div>

    <div className="flex justify-center">
      
    </div>


</div>
  )
}

export default MovieListScreen
