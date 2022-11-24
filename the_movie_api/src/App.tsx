import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthProvider } from "./components/AuthContext";

import FavoriteMovies from "./screens/FavoriteMovies";
import ContactScreen from "./screens/ContactScreen";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";

import MovieListScreen from "./screens/MovieListScreen";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MovieListScreen />} />
          <Route path="/fav/" element={<FavoriteMovies />} />
          <Route path="/contacts/" element={<ContactScreen />} />
          <Route path="/SignIn/" element={<SignIn />} />
          <Route path="/SignUp/" element={<SignUp />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
