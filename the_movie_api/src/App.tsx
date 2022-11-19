import React, {useEffect, useState} from 'react';
import Pagination from "./components/Pagination";
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import MovieList from './components/MovieList';


function App() {

 

  const [movies, setMovies] = useState<any>([{}]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(9);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = movies.slice(firstPostIndex, lastPostIndex);


  console.log('Loading', movies.length)

 
  const getMovies = async () => {
    try {
      let res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=6802651e847439a9b1d064176b06c639`, {
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
<>
    

<Navbar fixed={undefined}/>

<MovieList />

<Footer/>

</>

  );
}

export default App;
