import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import MovieItem from "../items/MovieItem";
import { selectFavorites } from "../redux/features/favoriteMoviesSlice";

const FavoriteMovies = () => {
  const favorites = useSelector(selectFavorites);

  return (
    <Box>
      <Grid container spacing={4}>
        {favorites?.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </Grid>
    </Box>
  );
};

export default FavoriteMovies;
