import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import configureStore from "./redux/store";

import Navbar from "./components/NavBar";
import Footer from "./components/Footer";

import MovieListScreen from "./screens/MovieListScreen";

const store = configureStore();

function App() {
  return (
    <>
     <ReduxProvider store={store}>
      <Navbar />
      <MovieListScreen />
      <Footer />
      </ReduxProvider>
    </>
  );
}

export default App;
