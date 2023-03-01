import { combineReducers, configureStore } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import moviesApiReducer, { moviesApi } from "./features/apiSlice";
import favoritesReducer from "./features/favoriteMoviesSlice";
import topRatedMoviesListReducer from "./features/topRatedMoviesListSlice";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  favorites: favoritesReducer,
  topRatedMoviesList: topRatedMoviesListReducer,
  moviesApi: moviesApiReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["favorites"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(moviesApi.middleware),
});

export const persistor = persistStore(store);
