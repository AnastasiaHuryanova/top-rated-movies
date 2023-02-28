import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Zoom,
} from "@mui/material";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import { useState } from "react";

const MovieItem = ({movie}) => {
    const [show, setShow] = useState(false);
    const [hoveredId, setHoveredId] = useState("");
    console.log(movie);
    


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
      xs={6}
      md={3}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        position: "relative",
      }}
      onMouseOver={() => hoverId(movie.id)}
      onMouseOut={() => removeHoverId()}
    >
      <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none" }}>
        <Card
          sx={{
            height: 450,
            width: 200,
            boxShadow: "none",
          }}
        >
          {show && movie.id === hoveredId && (
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Zoom in={show}>
                <CardMedia
                  sx={{
                    height: "75%",
                    width: "83%",
                    borderRadius: 3,
                    position: "absolute",
                    backgroundColor: "rgba(0, 0, 0, 0.70)",
                  }}
                  title={movie.title}
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
                }}
              >
                <Typography style={{ fontSize: "1rem" }}>
                  <StarIcon style={{ fontSize: "1rem", color: "yellow" }} />
                  {movie.rating}
                </Typography>
                <Typography style={{ fontSize: "1rem" }}>
                  {movie.year}
                </Typography>
              </CardContent>
            </Box>
          )}

          <CardMedia
            sx={{
              height: "80%",
              width: "100%",
              borderRadius: 3,
              objectFit: "contain",
            }}
            image={movie.image}
            title={movie.title}
          />
          <CardContent>
            <Typography style={{ fontSize: "1rem", textAlign: "center" }}>
              {movie.title}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Grid>
  );
};

export default MovieItem;
