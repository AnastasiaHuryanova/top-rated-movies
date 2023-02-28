import { Link } from "react-router-dom";
import { AppBar, Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box sx={{ display: "flex", fontSize: "1.5rem", padding:"1rem", width:"55vw"}}>
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
        <Typography variant="h3">FavMovies</Typography>
        <Box>
          <Link to="/" style={{ textDecoration: "none"}}>
            Top Rated
          </Link>
          <Link to="/favorites" style={{ textDecoration: "none", margin:"1.5rem" }}>
            Favorites
          </Link>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Header;
