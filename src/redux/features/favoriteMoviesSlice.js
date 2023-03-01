import { createSlice } from "@reduxjs/toolkit";

const TMDB_URL = "https://image.tmdb.org/t/p/w500";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavoriteMovie: (state, action) => {
      const movie = action.payload;
      const mappedMovie = {
        id: movie.id,
        title: movie.title,
        image: TMDB_URL + movie.poster_path,
        year: movie.release_date.slice(0, 4),
        rating: movie.vote_average.toFixed(1),
      };
      state.favorites = [...state.favorites, mappedMovie];
    },

    removeFavoriteByMovieId: (state, action) => {
      const favoriteMovieIdToBeRemoved = action.payload;
      state.favorites = state.favorites.filter((movie) => {
        return movie.id !== favoriteMovieIdToBeRemoved;
      });
    },
  },
});

export const { addFavoriteMovie, removeFavoriteByMovieId } =
  favoritesSlice.actions;
export const selectFavorites = (state) => state.favorites.favorites;

export default favoritesSlice.reducer;
