import { useSelector } from "react-redux";
import { selectFavorites } from "../redux/features/favoriteMoviesSlice";

const FavoriteMovies = () => {
    const favorites = useSelector(selectFavorites);

  return (favorites.map((movie) => {return <h1>{movie.title}</h1>}))
};

export default FavoriteMovies;
