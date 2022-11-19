import React, {useEffect, useState} from 'react';
import Pagination from "./Pagination";


function MovieList() {

 

  const [movies, setMovies] = useState<any>([{}]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = movies.slice(firstPostIndex, lastPostIndex);


  console.log('Loading', movies.length)

 
  const getMovies = async () => {
    try {
      let res = await fetch(`https://api.themoviedb.org/4/movie/popular?api_key=6802651e847439a9b1d064176b06c639`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let resJson = await res.json();
      setMovies(resJson?.results);
     
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4" >

{movies.map((item:any, index:any) => {
     
     return(


<div className="flex justify-center" key={item.id}>
  <div className="rounded-lg shadow-lg bg-white max-w-sm">
  
      <img className="w-full aspect-video ..." 
      src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
      alt={`${item.title} Poster`}
      />

    <div className="p-6">
      <h5 className="text-gray-900 text-xl font-medium mb-2"></h5>
      <p className="text-gray-700 text-base mb-4">
        Some quick example text to build on the card title and make up the bulk of the card's
        content.
      </p>
      <button type="button" className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Button</button>
    </div>
  </div>
</div>
 
    )
})}
</div>




  );
}

export default MovieList;
