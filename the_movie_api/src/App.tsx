import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import FavouriteMovies from "./screens/FavouriteMovies";

import MovieListScreen from "./screens/MovieListScreen";
import { store } from "./redux/store";
import { Provider } from "react-redux";


function App() {
  return (
   
      <Router>
        <Routes>   
          <Route path="/" element={<MovieListScreen />} />
          <Route path="/fav/" element={<FavouriteMovies />} />
        </Routes>
      </Router> 
   
  );
}

export default App;
