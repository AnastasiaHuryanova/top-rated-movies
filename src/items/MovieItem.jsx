import StarIcon from "@mui/icons-material/Star";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Zoom,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const MovieItem = ({ movie }) => {
  const [show, setShow] = useState(false);
  const [hoveredId, setHoveredId] = useState("");

  const hoverId = (id) => {
    setHoveredId(id);
    console.log(hoveredId);
    setShow(true);
  };

  const removeHoverId = () => {
    setHoveredId();
    setShow(false);
  };

  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={3}
      lg={3}
      xl={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        position: "relative",
      }}
      onMouseOver={() => hoverId(movie.id)}
      onMouseOut={() => removeHoverId()}
    >
      <Card
        sx={{
          height: "30rem",
          width: "15rem",
          boxShadow: "none",
          alignSelf: "center",
        }}
      >
        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "black" }}
        >
          {show && movie.id === hoveredId && (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Zoom in={show}>
                <CardMedia
                  sx={{
                    height: "25rem",
                    width: "15rem",
                    borderRadius: "1rem",
                    position: "absolute",
                    backgroundColor: "rgba(0, 0, 0, 0.70)",
                    boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.70)",
                  }}
                  title={movie.title}
                  image={""}
                />
              </Zoom>
              <CardContent
                sx={{
                  position: "absolute",
                  color: "whitesmoke",
                  display: "flex",
                  bottom: "5rem",
                  justifyContent: "space-between",
                  width: "10rem",
                  padding: "1rem",
                }}
              >
                <Typography
                  style={{
                    fontSize: "1rem",
                    fontWeight: "700",
                  }}
                >
                  <StarIcon
                    style={{
                      fontSize: "1rem",
                      color: "yellow",
                      marginBottom: "-0.1rem",
                    }}
                  />
                  {movie.rating}
                </Typography>
                <Typography style={{ fontSize: "1rem", fontWeight: "700" }}>
                  {movie.year}
                </Typography>
              </CardContent>
            </Box>
          )}

          <CardMedia
            sx={{
              height: "25rem",
              width: "inherit",
              borderRadius: "1rem",
              backgroundSize: "cover",
            }}
            image={movie.image}
            title={movie.title}
          />
          <CardContent>
            <Typography
              style={{
                fontSize: "1rem",
                textAlign: "center",
                fontWeight: "600",
                lineHeight: "1",
              }}
            >
              {movie.title}
            </Typography>
          </CardContent>
        </Link>
      </Card>
    </Grid>
  );
};

export default MovieItem;
