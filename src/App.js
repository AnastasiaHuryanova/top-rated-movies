import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import FavoriteMovies from "./components/FavoriteMovies";
import Header from "./components/Header";
import MovieDetail from "./components/MovieDetail";
import TopRatedMoviesList from "./components/TopRatedMoviesList";
import { createTheme, ThemeProvider } from "@mui/material/styles";


let theme = createTheme({
  breakpoints: {
    values: {
      xs: 241,
      sm: 960,
      md: 1450,
      lg: 1660,
      xl: 1920,
    },
  },
});

const App = () => {

  return (
    <ThemeProvider theme={theme}>
    <div style={{display:"flex", justifyContent:"center"}}>
      <div className="App" style={{ width: "70vw" }}>
        <Header></Header>
        <Routes>
          <Route exact path="/" element={<TopRatedMoviesList />} />
          <Route path="/movie/:movieId" element={<MovieDetail />} />
          <Route path="/favorites" element={<FavoriteMovies />} />
        </Routes>
      </div>
    </div>
    </ThemeProvider>
  );
};

export default App;
