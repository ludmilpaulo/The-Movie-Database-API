import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MovieListScreen from "./screens/MovieListScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieListScreen />} />
      </Routes>
    </Router>
  );
}

export default App;