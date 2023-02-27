import { Box, Button, Card, CardContent, CardMedia, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
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
  const dispatch = useDispatch();
  const movies = useSelector(selectTopRatedMovies);
  const page = useSelector(selectPage);

  const { data: fetchedMovies } = useGetTopRatedMoviesQuery(page);

  useEffect(() => {
    if (!fetchedMovies) return;
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
  }, [fetchedMovies]);

  return (
    <Box>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {movies.map((movie) => (
          <Grid item xs={2} key={movie.id}>
            <Card>
              <CardMedia
                sx={{ height: 400, width: 200 }}
                image={movie?.image}
                title={movie?.title}
              />
              <CardContent>
                <Link to={`/movie/${movie.id}`}>{movie?.title}</Link>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Button
        onClick={() => {
          dispatch(nextPage());
        }}
      >
        Load More
      </Button>
    </Box>
  );
};

export default TopRatedMoviesList;
