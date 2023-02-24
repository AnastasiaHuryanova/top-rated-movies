import { configureStore } from "@reduxjs/toolkit";
import moviesApiReducer, { moviesApi } from "./features/apiSlice";
import favoritesReducer from "./features/favoriteMoviesSlice";
import topRatedMoviesListReducer from "./features/topRatedMoviesListSlice";

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    topRatedMoviesList: topRatedMoviesListReducer,
    moviesApi: moviesApiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(moviesApi.middleware),
});
