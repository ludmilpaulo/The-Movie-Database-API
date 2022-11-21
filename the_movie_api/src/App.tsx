import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import MovieListScreen from "./screens/MovieListScreen";
import {store} from "./redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />
        <MovieListScreen />
        <Footer />
      </Provider>
    </>
  );
}

export default App;
