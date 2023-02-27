import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useGetMovieDetailQuery } from "../redux/features/apiSlice";
import {
  addFavoriteMovie,
  removeFavoriteByMovieId,
  selectFavorites,
} from "../redux/features/favoriteMoviesSlice";

const TMDB_URL = "https://image.tmdb.org/t/p/w500";

const MovieDetail = ({ navigation, route }) => {
  const { movieId } = useParams();
  console.log(movieId);

  const dispatch = useDispatch();
  const favorites = useSelector(selectFavorites);
  console.log(favorites);

  const [favorite, setFavorite] = useState(
    favorites.find((movie) => movie.id === movieId) ? true : false
  );

  const { data: movie, isLoading } = useGetMovieDetailQuery(movieId);

  const favoritesAdding = () => {
    if (favorites.filter((film) => film.id !== movie.id)) {
      console.log("miao");
      dispatch(addFavoriteMovie(movie));
    }
  };

  const favoritesRemoving = () => {
    if (favorites.filter((film) => film.id === movie.id)) {
      console.log("bau");
      dispatch(removeFavoriteByMovieId(movie.id));
    }
  };

  /*   const favoritesHandling = () => {
    if (iconHeart === faHeart) {
      setIconHeart(faHeartSolid);
      dispatch(addFavoriteMovie(movie));
    } else {
      setIconHeart(faHeart);
      return dispatch(removeFavoriteByMovieId(id));
    }
  }; */

  /* useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable
          onPress={() => {
            favoritesHandling();
          }}
        >
          <FontAwesomeIcon
            className="fa-beat"
            icon={iconHeart}
            style={{ color: "red" }}
            size={27}
          />
        </Pressable>
      ),
    });
  }, [iconHeart, movie]); */

  //if (isLoading) return null;

  return (
    <div>
      <h1>{movie?.title}</h1>
      <h1>{movie?.overview}</h1>
      {favorite === false ? (
        <button
          onClick={() => {
            favoritesAdding();
            setFavorite(true)
            console.log(favorites);
          }}
        >
          add to favorites
        </button>
      ) : (
        <button
          onClick={() => {
            favoritesRemoving();
            setFavorite(false)
            console.log(favorites);
          }}
        >
          remove from favorites
        </button>
      )}
    </div>
  );
};

export default MovieDetail;
