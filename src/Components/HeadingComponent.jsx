import React from "react";
import { Typography, Box } from "@mui/material";
import { orange } from "@mui/material/colors";

const HeadingComponent = ({ variant = "h3", text, sx }) => {
  return (
    <Typography variant={variant} component="span">
      <Box
        sx={{
          borderBottom: 2,
          borderColor: orange[500],
          width: 100,
          ...sx,
        }}
      >
        {text}
      </Box>
    </Typography>
  );
};

export default HeadingComponent;
