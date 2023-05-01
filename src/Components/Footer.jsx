import React from "react";

import { Box, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import SocialIconsComponent from "../Components/SocialIconsComponent";

const Footer = () => {
  return (
    <Box
      className="Footer"
      sx={{
        marginTop: "auto",
        backgroundColor: "primary.main",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "25px 0",
      }}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Typography
            variant="subtitle2"
            sx={{
              color: grey[600],
              textAlign: { xs: "center", sm: "left" },
              ml: { sm: 2 },
            }}
          >
            Edgars Eglītis
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4}>
          <SocialIconsComponent />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Typography
            variant="subtitle2"
            sx={{
              textAlign: { xs: "center", sm: "right" },
              color: grey[600],
              mr: { sm: 2 },
            }}
          >
            2023
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
