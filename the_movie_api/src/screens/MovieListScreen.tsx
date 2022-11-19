import React, {useEffect, useState} from 'react';
import MovieList from '../components/MovieList';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

export default function MovieListScreen() {
    const [moviesList, setMoviesList] = useState<any>([{}]);

 // const [currentPage, setCurrentPage] = useState(1);
 // const [postsPerPage, setPostsPerPage] = useState(9);

 // const lastPostIndex = currentPage * postsPerPage;
 // const firstPostIndex = lastPostIndex - postsPerPage;
 // const currentPosts = moviesList.slice(firstPostIndex, lastPostIndex);


  console.log('Loading', moviesList.length)

 
  const getMovies = async () => {
    try {
      let res = await fetch(`https://api.themoviedb.org/4/movie/popular?api_key=6802651e847439a9b1d064176b06c639`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let resJson = await res.json();
      setMoviesList(resJson?.results);
     
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    getMovies();
  },
  []);

  

  return (
    <>
 
 
 <div class="py-2">
  <nav class="block">
    <ul class="flex pl-0 rounded list-none flex-wrap">
      <li>
        <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500">
          <i class="fas fa-chevron-left -ml-px"></i>
        </a>
      </li>
      <li>
        <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500">
          1
        </a>
      </li>
      <li>
        <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500">
          2
        </a>
      </li>
      <li>
        <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500">
          3
        </a>
      </li>
      <li>
        <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500">
          4
        </a>
      </li>
      <li>
        <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500">
          5
        </a>
      </li>
      <li>
        <a href="#pablo" class="first:ml-0 text-xs font-semibold flex w-8 h-8 mx-1 p-0 rounded-full items-center justify-center leading-tight relative border border-solid border-pink-500 bg-white text-pink-500">
          <i class="fas fa-chevron-right -mr-px"></i>
        </a>
      </li>
    </ul>
  </nav>
</div>

 
    </>
  )
}
