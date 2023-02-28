import StarIcon from "@mui/icons-material/Star";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
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
import {Zoom} from "@mui/material";

const TMDB_URL = "https://image.tmdb.org/t/p/w500";

const TopRatedMoviesList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(selectTopRatedMovies);
  const page = useSelector(selectPage);
  const [show, setShow] = useState(false);
  const [hoveredId, setHoveredId] = useState("");

  const { data: fetchedMovies } = useGetTopRatedMoviesQuery(page);

  const previousValues = useRef({ page, fetchedMovies });

  useEffect(() => {
    if (!fetchedMovies || (previousValues.current.page === page &&
        previousValues.current.fetchedMovies === fetchedMovies)) return;
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

  const hoverId = (id) => {
    setHoveredId(id);
    console.log(hoveredId);
    setShow(true);
  };

  const removeHoverId = () => {
    setHoveredId();
    setShow(false);
  };

  return (
    <Box>
      <Grid container spacing={{ xs: 1, md: 2 }}>
        {movies.map((movie) => (
          <Grid
            item
            xs={3}
            key={movie.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignContent: "center",
              position: "relative",
            }}
            onMouseOver={() => hoverId(movie.id)}
            onMouseOut={() => removeHoverId()}
          >
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
              <Card
                sx={{
                  height: 400,
                  width: 200,
                  boxShadow: "none",
                }}
              >
                {show && movie.id === hoveredId && (
                  <Box>
                    <Zoom in={show}>
                      <CardMedia
                        sx={{
                          height: 320,
                          width: 200,
                          borderRadius: 3,
                          position: "absolute",
                          backgroundColor: "rgba(0, 0, 0, 0.46)",
                        }}
                        title={movie?.title}
                      />
                    </Zoom>
                    <Box
                      sx={{
                        position: "absolute",
                        color: "whitesmoke",
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "space-between",
                        height: 320,
                        width: 200,
                      }}
                    >
                      <Typography sx={{ margin: "1rem" }}>
                        <StarIcon
                          style={{ fontSize: "medium", color: "yellow" }}
                        />
                        {movie?.rating}
                      </Typography>
                      <Typography sx={{ margin: "1rem" }}>
                        {movie?.year}
                      </Typography>
                    </Box>
                  </Box>
                )}

                <CardMedia
                  sx={{
                    height: "80%",
                    width: "100%",
                    borderRadius: 3,
                  }}
                  image={movie?.image}
                  title={movie?.title}
                />
                <CardContent>
                  <Typography>{movie?.title}</Typography>
                </CardContent>
              </Card>
            </Link>
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
