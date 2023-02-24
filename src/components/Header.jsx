import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <h2>FavMovies</h2>
      <Link to="/">Top Rated</Link>
      <Link to="/favorites">Favorites</Link>
    </>
  );
};

export default Header;
