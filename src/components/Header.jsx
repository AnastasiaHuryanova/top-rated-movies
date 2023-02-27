import { Link } from "react-router-dom";
import { AppBar, Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ display: "flex", fontSize: "1.5rem", padding:"1rem"}}>
      <AppBar
        position="static"
        color="transparent"
        style={{
          boxShadow: "none",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Typography style={{ fontSize: "2rem" }}>FavMovies</Typography>
        <Box>
          <Link to="/" style={{ textDecoration: "none", margin: "5rem"}}>
            Top Rated
          </Link>
          <Link to="/favorites" style={{ textDecoration: "none" }}>
            Favorites
          </Link>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Header;
