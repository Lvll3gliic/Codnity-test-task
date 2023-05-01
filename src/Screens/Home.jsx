import React from "react";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";
import { orange } from "@mui/material/colors";

import { Link } from "react-router-dom";

const Home = () => {
  const string = "< Junior Web Developer />";
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        overflow: "auto",
        flexDirection: "column",
        mb: { xs: 5 },
      }}
    >
      <Box
        sx={{
          display: "flex",
          mt: { md: 5 },
          justifyContent: "center",
        }}
      >
        <img
          src={"/images/portrait.png"}
          alt=""
          style={{ width: 250, borderRadius: "35%" }}
        />
      </Box>
      <Box sx={{ mt: "20px" }}>
        <Typography
          variant={isSmallScreen ? "h2" : "h1"}
          sx={{
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
          }}
        >
          I'M EDGARS EGLĪTIS
        </Typography>
        <Typography variant={isSmallScreen ? "h5" : "h3"}>{string}</Typography>
      </Box>
      <Box
        sx={{
          mt: 5,
        }}
      >
        <Link to={`/resume`} style={{ textDecoration: "none", color: "#fff" }}>
          <Button
            variant="contained"
            sx={{
              mr: { xs: 2, md: 15 },
              borderRadius: "15px",
              width: { xs: "150px", md: "250px" },
              height: { xs: "40px", md: "50px" },
              color: "black",
              backgroundColor: orange[500],
              typography: {
                fontSize: "1rem",
                fontWeight: "bold",
              },
              "&:hover": {
                backgroundColor: orange[900],
              },
            }}
          >
            RESUME
          </Button>
        </Link>
        <Link
          to={`/about me`}
          style={{ textDecoration: "none", color: "#fff" }}
        >
          <Button
            variant="contained"
            sx={{
              borderRadius: "15px",
              width: { xs: "150px", md: "250px" },
              height: { xs: "40px", md: "50px" },
              color: "black",
              backgroundColor: orange[500],
              typography: {
                fontSize: "1rem",
                fontWeight: "bold",
              },
              "&:hover": {
                backgroundColor: orange[900],
              },
            }}
          >
            ABOUT ME
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
