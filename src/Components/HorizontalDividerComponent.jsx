import React from "react";
import { Grid, Divider } from "@mui/material";

function HorizontalDividerComponent() {
  return (
    <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
      <Divider
        orientation="horizontal"
        sx={{
          width: "70%",
          margin: "auto",
          my: 3,
          mx: { xs: 2, sm: 4 },
        }}
      />
    </Grid>
  );
}

export default HorizontalDividerComponent;
