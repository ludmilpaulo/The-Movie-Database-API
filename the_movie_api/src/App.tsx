import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import FavouriteMovies from "./screens/FavouriteMovies";

import MovieListScreen from "./screens/MovieListScreen";
import { store } from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<MovieListScreen />} />
          <Route path="/fav/" element={<FavouriteMovies />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
