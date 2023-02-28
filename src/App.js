import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import FavoriteMovies from "./components/FavoriteMovies";
import Header from "./components/Header";
import MovieDetail from "./components/MovieDetail";
import TopRatedMoviesList from "./components/TopRatedMoviesList";
import { createTheme, responsiveFontSizes, ThemeProvider } from "@mui/material/styles";

let theme = createTheme();
theme = responsiveFontSizes(theme);


const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <div style={{display:"flex", justifyContent:"center"}}>
      <div className="App" style={{ width: "60vw" }}>
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
