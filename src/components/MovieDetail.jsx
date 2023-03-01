import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetMovieDetailQuery } from "../redux/features/apiSlice";
import {
  addFavoriteMovie,
  removeFavoriteByMovieId,
  selectFavorites,
} from "../redux/features/favoriteMoviesSlice";
import StarIcon from "@mui/icons-material/Star";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

const TMDB_URL = "https://image.tmdb.org/t/p/w500";

const MovieDetail = () => {
  const { movieId } = useParams();
  console.log(movieId);

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  console.log(favorites);

  const [favorite, setFavorite] = useState(
    favorites.find((movie) => movie.id === movieId) ? true : false
  );

  const { data: movie, isLoading } = useGetMovieDetailQuery(movieId);
  console.log(movie);

  const favoritesAdding = () => {
    if (favorites.filter((film) => film.id !== movie.id)) {
      dispatch(addFavoriteMovie(movie));
    }
  };

  const favoritesRemoving = () => {
    if (favorites.filter((film) => film.id === movie.id)) {
      console.log("bau");
      dispatch(removeFavoriteByMovieId(movie.id));
    }
  };

  return (
    <Box sx={{ display: "flex", height: "70vh", justifyContent: "center" }}>
      {!isLoading && (
        <Card style={{ display: "flex", boxShadow: "none" }}>
          <CardMedia
            title={movie?.title}
            image={TMDB_URL + movie?.poster_path}
            sx={{
              flexBasis: "60%",
              padding: "1em 1em 0 1em",
              backgroundSize:"cover"
            }}
          />
          <CardContent
            sx={{
              flexBasis: "100%",
            }}
          >
            <Typography
              sx={{ fontSize: "2.5rem", margin: "1rem", fontWeight: "600" }}
            >
              {movie?.title}
            </Typography>
            <Typography
              sx={{
                margin: "1rem",
                width: "20rem",
                letterSpacing: "0.05rem",
                color: "grey",
                fontWeight: "600",
              }}
            >
              <StarIcon style={{ fontSize: "1rem", color: "orange" }} />
              {movie?.vote_average.toFixed(1)}
              <CalendarTodayOutlinedIcon
                style={{
                  fontSize: "1rem",
                  backgroundColor: "orange",
                  color: "white",
                }}
              />
              {movie?.release_date}
            </Typography>
            <Typography sx={{ textAlign: "justify", margin: "1rem" }}>
              {movie?.overview}
            </Typography>
            <Box
              sx={{
                display: "flex",
                width: "50wv",
                justifyContent: "center",
                margin: "3rem",
              }}
            >
              {favorite === false ? (
                <Button
                  variant="contained"
                  color="warning"
                  sx={{
                    borderRadius: "2rem",
                    textTransform: "none",
                    color: "white",
                    fontWeight: "500",
                    justifyContent: "center",
                  }}
                  onClick={() => {
                    favoritesAdding();
                    setFavorite(true);
                    console.log(favorites);
                  }}
                >
                  <Typography>Add To Favorites</Typography>
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="error"
                  sx={{
                    borderRadius: "2rem",
                    textTransform: "none",
                    color: "white",
                    fontWeight: "500",
                    justifyContent: "center",
                  }}
                  onClick={() => {
                    favoritesRemoving();
                    setFavorite(false);
                    console.log(favorites);
                  }}
                >
                  <Typography> Remove From Favorites</Typography>
                </Button>
              )}
            </Box>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default MovieDetail;
