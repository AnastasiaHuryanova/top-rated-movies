import {  NavLink } from "react-router-dom";
import { AppBar, Box, Container, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box>
      (<Container
        sx={{
          height: "8rem",
          width: "100%",
          fontSize: "1.5rem",
          fontWeight: "600",
          marginBottom: "5rem",
        }}
      >
        <AppBar
          sx={{
            boxShadow: "none",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "baseline",
            backgroundColor: "rgba(255,255,255, 0.5)",
            backdropFilter: "blur(20px)",
            padding: "3rem",
          }}
        >
          <Typography
            style={{ fontSize: "2rem", marginLeft: "12rem", color: "black" }}
          >
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
                marginLeft: "4rem",
                marginRight: "12rem",
              })}
            >
              Favorites
            </NavLink>
          </Box>
        </AppBar>
      </Container>)
      : ({" "}
      <Container
        sx={{
          height: "8rem",
          width: "100%",
          fontSize: "1.5rem",
          fontWeight: "600",
          marginBottom: "5rem",
        }}
      >
        <AppBar
          sx={{
            boxShadow: "none",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "baseline",
            backgroundColor: "rgba(255,255,255, 0.5)",
            backdropFilter: "blur(20px)",
            padding: "3rem",
          }}
        >
          <Typography
            style={{ fontSize: "2rem", marginLeft: "12rem", color: "black" }}
          >
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
                marginLeft: "4rem",
                marginRight: "12rem",
              })}
            >
              Favorites
            </NavLink>
          </Box>
        </AppBar>
      </Container>
      )
    </Box>
  );
};

export default Header;
