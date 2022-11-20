import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import MovieListScreen from "./screens/MovieListScreen";

function App() {
  return (
    <>
      <Navbar fixed={undefined} />
      <MovieListScreen />
      <Footer />
    </>
  );
}

export default App;
