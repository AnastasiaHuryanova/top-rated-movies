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
        previousValues.current.fetchedMovies)
    )
      return;
    const mappedFetchedMovies = fetchedMovies.results.map((movie) => {
      return {
        title: movie.title,
        id: movie.id,
        image: TMDB_URL + movie.poster_path,
        year: movie.release_date.slice(0, 4),
        rating: movie.vote_average,
      };
    });

    page === 1
      ? dispatch(moviesSetting(mappedFetchedMovies))
      : dispatch(concatMovies(mappedFetchedMovies));
  }, [fetchedMovies, page]);

  return (
    <Box>
      <Grid container spacing={4}>
        {isSuccess &&
          movies?.map((movie) => <MovieItem key={movie.id} movie={movie} />)}
      </Grid>
      <Box sx={{ display: "flex", width: "50wv", justifyContent: "center" }}>
        <Button
          sx={{
            borderRadius: "2rem",
            bgcolor: "grey",
            textTransform: "none",
            color: "black",
            padding: "1rem",
            fontWeight: "500",
            margin: 6,
            justifyContent: "center",
          }}
          onClick={() => {
            dispatch(nextPage());
          }}
        >
          <Typography>Load more</Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default TopRatedMoviesList;
