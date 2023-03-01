import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import MovieItem from "../items/MovieItem";
import { useGetTopRatedMoviesQuery } from "../redux/features/apiSlice";
import {
  concatMovies,
  moviesSetting,
  nextPage,
  selectPage,
  selectTopRatedMovies,
} from "../redux/features/topRatedMoviesListSlice";

const TMDB_URL = "https://image.tmdb.org/t/p/w500";

const TopRatedMoviesList = () => {
  const movies = useSelector(selectTopRatedMovies);

  const dispatch = useDispatch();
  const page = useSelector(selectPage);

  const { data: fetchedMovies, isSuccess } = useGetTopRatedMoviesQuery(page);
  const previousValues = useRef({ page, fetchedMovies });

  useEffect(() => {
    if (
      !fetchedMovies ||
      (previousValues.current.page === page &&
        previousValues.current.fetchedMovies === fetchedMovies)
    )
      return;
    const mappedFetchedMovies = fetchedMovies.results.map((movie) => {
      return {
        title: movie.title,
        id: movie.id,
        image: TMDB_URL + movie.poster_path,
        year: movie.release_date.slice(0, 4),
        rating: movie.vote_average.toFixed(1),
      };
    });

    page === 1
      ? dispatch(moviesSetting(mappedFetchedMovies))
      : dispatch(concatMovies(mappedFetchedMovies));
  }, [page, fetchedMovies]);

  return (
    <Box>
      <Grid container spacing={1}>
        {isSuccess &&
          movies?.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          sx={{
            borderRadius: "2rem",
            textTransform: "none",
            color: "black",
            backgroundColor: "#f2f2f2",
            border: "solid 0.01rem #ccc",
            padding: "0.5rem 2rem",
            margin: 6,
          }}
          onClick={() => {
            dispatch(nextPage());
          }}
        >
          <Typography sx={{ fontWeight: "700" }}>Load More</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default TopRatedMoviesList;
