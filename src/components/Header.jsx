import { Link, NavLink } from "react-router-dom";
import { AppBar, Box, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        fontSize: "1.5rem",
        padding: "1rem",
        width: "100vw",
        backgroundColor: "white",
        marginBottom: "5rem",
      }}
    >
      <AppBar
        color="transparent"
        style={{
          boxShadow: "none",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: "4rem",
          width: "100vw",
        }}
      >
        <Typography style={{ fontSize: "2rem" }}>
          Fav<strong>Movies</strong>
        </Typography>
        <Box>
          <NavLink
            to="/"
            style={({ isActive }) => ({
              color: isActive ? "orange" : "grey",
              textDecoration: "none",
            })}
          >
            Top Rated
          </NavLink>
          <NavLink
            to="/favorites"
            style={({ isActive }) => ({
              color: isActive ? "orange" : "grey",
              textDecoration: "none",
              marginLeft: "rem",
            })}
          >
            Favorites
          </NavLink>
        </Box>
      </AppBar>
    </Box>
  );
};

export default Header;
