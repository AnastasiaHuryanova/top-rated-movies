import { Link } from "react-router-dom";
import { AppBar } from "@mui/material";

const Header = () => {
  return (
    <AppBar>
      <h2>FavMovies</h2>
      <Link to="/">Top Rated</Link>
      <Link to="/favorites">Favorites</Link>
    </AppBar>
  );
};

export default Header;
